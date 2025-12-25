import Link from "next/link";
import { SectionCard } from "@/components/SectionCard";

const modules = [
  {
    title: "Veda Pillars",
    description:
      "History of lineage, biological science, Ayurvedic foundations—organized as a clean, masonry-style library.",
    tags: ["History", "Science", "Ayurveda"]
  },
  {
    title: "Scientific Glossary",
    description:
      "Crosswalk Sanskrit terms to physiology with citations (Pranayama → Vagus Nerve Stimulation).",
    tags: ["Peer Reviewed", "Authority"]
  },
  {
    title: "Interactive Anatomy",
    description:
      "Hover a pose to reveal biological impact: vestibular balance, cortisol regulation, endocrine focus.",
    tags: ["Anatomy", "Impact"]
  }
];

export default function WisdomPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-10">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-soma-muted">Authority & Lineage</p>
          <h1 className="font-heading text-4xl text-soma-foreground">Wisdom Repository</h1>
          <p className="text-soma-muted mt-2">Establish trust through rigorous storytelling.</p>
        </div>
        <Link href="/" className="text-sm text-soma-muted hover:text-soma-foreground">
          ← Home
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {modules.map((item) => (
          <SectionCard key={item.title} {...item} />
        ))}
      </div>
    </main>
  );
}
