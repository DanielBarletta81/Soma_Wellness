import Link from "next/link";
import { SectionCard } from "@/components/SectionCard";

const data = [
  {
    title: "Sanctuary Check-In",
    description:
      "3-second pulse (Energetic, Heavy, Scattered) feeds breath, flow, and nourishment prescriptions on login.",
    tags: ["Adaptive", "Polyvagal"]
  },
  {
    title: "Daily Ritual Tracker",
    description:
      "Prana-based incentives: +50 early Sun Salutations, +100 nutrition streaks, meditation glow for dwell time.",
    tags: ["Prana", "Consistency"]
  },
  {
    title: "Dosha Aura Engine",
    description:
      "Quiz sets Vata/Pitta/Kapha palettes and animation pacing—grounding moss, cooling blues, energizing saffron.",
    tags: ["Dosha", "Chromotherapy"]
  }
];

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-10">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-soma-muted">State-of-Being</p>
          <h1 className="font-heading text-4xl text-soma-foreground">Dashboard</h1>
          <p className="text-soma-muted mt-2">Your nervous system-informed entry point.</p>
        </div>
        <Link href="/" className="text-sm text-soma-muted hover:text-soma-foreground">
          ← Home
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {data.map((item) => (
          <SectionCard key={item.title} {...item} />
        ))}
      </div>
    </main>
  );
}
