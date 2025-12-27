from datetime import datetime, timedelta, timezone
from typing import Optional, Dict
import os

import jwt
from fastapi import APIRouter, Depends, HTTPException, Response, status, Cookie
from pydantic import BaseModel

router = APIRouter()


class LoginSchema(BaseModel):
  email: str
  password: str


JWT_SECRET = os.getenv("JWT_SECRET")
ALGORITHM = os.getenv("JWT_ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("JWT_EXPIRE_MINUTES", "1440"))


def verify_user_in_db(email: str, password: str) -> Optional[Dict[str, str]]:
  # TODO: replace with real lookup + password hash verify
  if email == "test@example.com" and password == "test":
    return {"email": email, "role": "member"}
  return None


def decode_token(token: str) -> Dict[str, str]:
  try:
    return jwt.decode(token, JWT_SECRET, algorithms=[ALGORITHM])
  except jwt.ExpiredSignatureError:
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token expired")
  except jwt.InvalidTokenError:
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")


@router.post("/login")
async def login(response: Response, login_data: LoginSchema):
  if not JWT_SECRET:
    raise HTTPException(
      status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
      detail="Server misconfigured: missing JWT_SECRET"
    )

  user = verify_user_in_db(login_data.email, login_data.password)
  if not user:
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

  expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
  payload = {"sub": user["email"], "role": user["role"], "exp": expire}
  token = jwt.encode(payload, JWT_SECRET, algorithm=ALGORITHM)

  response.set_cookie(
    key="soma_auth_token",
    value=token,
    httponly=True,
    secure=True,  # keep True in production (HTTPS)
    samesite="lax",
    max_age=ACCESS_TOKEN_EXPIRE_MINUTES * 60,
    path="/"
  )
  return {"message": "Authenticated successfully"}


@router.post("/logout")
async def logout(response: Response):
  response.delete_cookie(key="soma_auth_token", path="/")
  return {"message": "Logged out"}


def get_current_user(soma_auth_token: Optional[str] = Cookie(default=None)) -> Dict[str, str]:
  if not JWT_SECRET:
    raise HTTPException(
      status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
      detail="Server misconfigured: missing JWT_SECRET"
    )
  if not soma_auth_token:
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated")
  payload = decode_token(soma_auth_token)
  return {"email": payload.get("sub"), "role": payload.get("role")}


@router.get("/me")
async def read_me(current_user: Dict[str, str] = Depends(get_current_user)):
  return {"user": current_user}


@router.get("/protected")
async def protected_example(current_user: Dict[str, str] = Depends(get_current_user)):
  if current_user.get("role") != "member":
    raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Insufficient permissions")
  return {"message": "You have access to protected content"}
