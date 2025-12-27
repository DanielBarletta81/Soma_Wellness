import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import auth  # expects auth.py at project root; adjust import if relocated

app = FastAPI(title="Soma Wellness API", version="0.1.0")

allowed_origins = [
    origin.strip()
    for origin in os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# Auth routes (login/logout/me/protected)
app.include_router(auth.router, prefix="/auth", tags=["auth"])


@app.get("/healthz")
def healthcheck():
    return {"status": "ok"}
