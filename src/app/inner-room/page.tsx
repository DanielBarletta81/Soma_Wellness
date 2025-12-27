"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { SectionCard } from "@/components/SectionCard";

const lockedCopy = [
  {
    title: "Inner Room Access",
    description: "Premium flows, Ayurveda deep dives, and masterclasses are secured behind membership.",
    tags: ["Signed HLS", "Stripe Gated"]
  },
  {
    title: "Why lock it?",
    description: "Protect C.J. Barletta’s IP while keeping streams smooth and available worldwide.",
    tags: ["Security", "Global Edge"]
  },
  {
    title: "What’s inside",
    description: "Long-form vinyasa, postpartum support series, nutritional sanctuaries, and bloom tracking.",
    tags: ["Flows", "Motherhood", "Nutrition"]
  }
];

export default function InnerRoomPage() {
  const { data: session, status } = useSession();
  const authed = status === "authenticated";

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-10">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-soma-muted">Sanctuary</p>
          <h1 className="font-heading text-4xl text-soma-foreground">Inner Room</h1>
          <p className="text-soma-muted mt-2">
            {authed
              ? "Welcome back. Your Inner Room content will appear here once linked to your membership."
              : "Premium content is locked. Sign in to continue into the sanctuary."}
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-soma-muted hover:text-soma-foreground">
            ← Home
          </Link>
          {authed ? (
            <button
              onClick={() => signOut()}
              className="rounded-full border border-white/15 px-3 py-1.5 text-soma-foreground hover:border-white/30"
            >
              Sign out
            </button>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="rounded-full bg-soma-accent px-3 py-1.5 text-black font-semibold shadow-glow"
            >
              Sign in
            </button>
          )}
        </div>
      </div>

      {!authed && (
        <div className="rounded-2xl border border-dashed border-white/15 p-6 text-sm text-soma-muted">
          This area will surface your unlocked Sadhanas, purchased retreats, and saved micro-rituals once
          you authenticate.
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-3">
        {lockedCopy.map((item) => (
          <SectionCard key={item.title} {...item} />
        ))}
      </div>
    </main>
  );
}
