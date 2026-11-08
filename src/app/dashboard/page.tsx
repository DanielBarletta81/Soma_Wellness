import type { Metadata } from "next";
import Link from "next/link";
import { SectionCard } from "@/components/SectionCard";
import { ritualCatalog, ritualRoutines, ritualTemplates } from "@/content/rituals";

export const metadata: Metadata = {
  title: "Dashboard — Daily Rituals & Routines",
  description:
    "A nervous-system-informed ritual library: short breath resets, gentle yoga, meditations, and weekly templates — minimal time, steady care."
};

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

      <section className="space-y-4">
        <div>
          <h2 className="font-heading text-3xl text-soma-foreground">Ritual Library</h2>
          <p className="text-soma-muted mt-2">
            {ritualCatalog.length} gentle micro-rituals — breath, movement, meditation, and habit.
            Minimal time, steady care.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ritualCatalog.map((ritual) => (
            <SectionCard
              key={ritual.id}
              title={ritual.title}
              description={ritual.instructions}
              tags={[`${ritual.minutes} min`, ritual.type, ritual.intensity]}
            />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="font-heading text-3xl text-soma-foreground">Prescribed Routines</h2>
          <p className="text-soma-muted mt-2">
            Curated stacks of rituals for mornings, middays, and wind-downs.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {ritualRoutines.map((routine) => {
            const minutes = routine.modules.reduce((sum, id) => {
              const ritual = ritualCatalog.find((r) => r.id === id);
              return sum + (ritual?.minutes ?? 0);
            }, 0);
            return (
              <SectionCard
                key={routine.id}
                title={routine.title}
                description={routine.description}
                tags={[`${minutes} min total`, `${routine.modules.length} rituals`]}
              />
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="font-heading text-3xl text-soma-foreground">Weekly Templates</h2>
          <p className="text-soma-muted mt-2">
            Pre-planned weeks you can adopt in one tap — busy, gentle, or evenings-only.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {ritualTemplates.map((template) => (
            <SectionCard
              key={template.id}
              title={template.title}
              description={template.description}
              tags={[`${template.entries.length} sessions / week`]}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
