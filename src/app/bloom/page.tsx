import Link from "next/link";
import { SectionCard } from "@/components/SectionCard";

const items = [
  {
    title: "Eternal Bloom Engine",
    description:
      "Logarithmic P = 20·log10(t+1) growth—fast encouragement early, intricate petals for deep dedication.",
    tags: ["Log Growth", "Mastery"]
  },
  {
    title: "Prana Minutes",
    description:
      "Unified score across breathwork, movement, learning, and journaling—stem grows during each session.",
    tags: ["Multi-Modal", "Unified Score"]
  },
  {
    title: "Sadhana Tiers & Security",
    description:
      "Foyer, Inner Room, and Private Retreat gating with signed HLS URLs and Stripe lifecycle hooks.",
    tags: ["Access", "Security"]
  }
];

export default function BloomPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-10">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-soma-muted">Progression</p>
          <h1 className="font-heading text-4xl text-soma-foreground">Eternal Bloom</h1>
          <p className="text-soma-muted mt-2">
            A visual, compassionate growth model rooted in nature&apos;s pacing.
          </p>
        </div>
        <Link href="/" className="text-sm text-soma-muted hover:text-soma-foreground">
          ← Home
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <SectionCard key={item.title} {...item} />
        ))}
      </div>
    </main>
  );
}
