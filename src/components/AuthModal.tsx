'use client';

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export function AuthModal() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const isAuthed = status === "authenticated";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-soma-foreground hover:border-white/30 hover:text-white transition"
      >
        {isAuthed ? "Account" : "Sign in"}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          aria-modal="true"
          role="dialog"
        >
          <div className="glass w-full max-w-md rounded-2xl p-6 shadow-glow">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-soma-muted">Welcome</p>
                <h3 className="font-heading text-2xl text-soma-foreground">
                  {isAuthed ? "You’re in the sanctuary" : "Enter the sanctuary"}
                </h3>
                <p className="text-sm text-soma-muted mt-1">
                  {isAuthed
                    ? `Signed in as ${session?.user?.email ?? "member"}.`
                    : "Sign in to sync your rituals, Prana minutes, and saved wisdom."}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 px-2 py-1 text-xs text-soma-muted hover:text-soma-foreground"
              >
                Close
              </button>
            </div>

            {!isAuthed ? (
              <div className="mt-6 space-y-3">
                <button
                  onClick={() => signIn("google")}
                  className="w-full rounded-xl bg-white text-black px-4 py-3 text-sm font-semibold hover:bg-slate-100 transition"
                >
                  Continue with Google
                </button>
                <p className="text-[11px] text-soma-muted text-center">
                  We use Google to keep your session secure. Email magic link available when configured.
                </p>
              </div>
            ) : (
              <div className="mt-6 space-y-3">
                <button
                  onClick={() => signOut()}
                  className="w-full rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-soma-foreground hover:border-white/30 transition"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
