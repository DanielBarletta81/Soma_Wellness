'use client';

import { useSession } from "next-auth/react";

export function AuthStatusChip() {
  const { data: session, status } = useSession();

  const label =
    status === "authenticated"
      ? session?.user?.email ?? "Signed in"
      : status === "loading"
      ? "Checking..."
      : "Guest";

  return (
    <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-soma-muted">
      {label}
    </span>
  );
}
