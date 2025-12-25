import Link from "next/link";
import { SectionCard } from "@/components/SectionCard";

const flows = [
  {
    title: "Hormonal Compass",
    description:
      "Wave visual of progesterone/estrogen shifts; adjusts rituals by stage (prenatal, labor prep, postpartum).",
    tags: ["Prenatal", "Endocrine"]
  },
  {
    title: "Nursing Mode",
    description:
      "Circadian-aware dark mode, whisper audio normalization, and 3am meditations for matrescence support.",
    tags: ["Low Blue", "Comfort"]
  },
  {
    title: "First 40 Days Quiz",
    description:
      "Agni, rest, and mood tracker; triggers micro-rituals (warm congee, Soma Calm breath) for stabilization.",
    tags: ["Safety", "Recovery"]
  }
];

export default function MotherhoodPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-10">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-soma-muted">Sacred Window</p>
          <h1 className="font-heading text-4xl text-soma-foreground">Motherhood Portal</h1>
          <p className="text-soma-muted mt-2">
            Designed for prenatal care, postpartum recovery, and compassionate support.
          </p>
        </div>
        <Link href="/" className="text-sm text-soma-muted hover:text-soma-foreground">
          ← Home
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {flows.map((item) => (
          <SectionCard key={item.title} {...item} />
        ))}
      </div>
    </main>
  );
}
