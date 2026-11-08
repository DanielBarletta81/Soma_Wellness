import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionCard } from "@/components/SectionCard";
import chakraData from "@/content/chakras.json";
import ayurveda from "@/content/ayurveda.json";
import yoga from "@/content/yoga.json";
import crystals from "@/content/crystals.json";
import kitchen from "@/content/ayurveda-kitchen.json";
import poseData from "@/content/yoga-poses.json";
import sources from "@/content/sources.json";

export const metadata: Metadata = {
  title: "Wisdom Repository — Yoga, Ayurveda & Chakra Science",
  description:
    "Lineage-based education: the eight limbs of yoga, the Tridosha framework, the chakra sanctum, a pose library, and the Ayurvedic kitchen — grounded in cited sources."
};

type PillarSection = { id: string; title: string; body: string; bullets?: string[] };
type Pillar = { title: string; subtitle: string; summary: string; sections: PillarSection[] };

const pillars: Pillar[] = [ayurveda, yoga, crystals] as Pillar[];

function PillarBlock({ pillar }: { pillar: Pillar }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-heading text-3xl text-soma-foreground">{pillar.title}</h3>
        <p className="text-sm uppercase tracking-[0.2em] text-soma-muted mt-1">{pillar.subtitle}</p>
        <p className="text-soma-muted mt-2 leading-relaxed">{pillar.summary}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {pillar.sections.map((section) => (
          <div key={section.id} className="glass rounded-2xl p-6 shadow-glow">
            <h4 className="font-heading text-xl text-soma-foreground">{section.title}</h4>
            <p className="text-sm text-soma-muted mt-2 leading-relaxed">{section.body}</p>
            {section.bullets && (
              <ul className="mt-3 space-y-1 text-sm text-soma-muted list-disc list-inside">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WisdomPage() {
  const poses = poseData.poses;

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-14">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-soma-muted">Authority & Lineage</p>
          <h1 className="font-heading text-4xl text-soma-foreground">Wisdom Repository</h1>
          <p className="text-soma-muted mt-2">
            {chakraData.chakras.length} energy centers, {poses.length} foundational poses,{" "}
            {kitchen.ingredients.length} apothecary ingredients — grounded in {sources.length} cited
            sources.
          </p>
        </div>
        <Link href="/" className="text-sm text-soma-muted hover:text-soma-foreground">
          ← Home
        </Link>
      </div>

      {/* Chakra Sanctum */}
      <section id="chakras" className="space-y-4">
        <div>
          <h2 className="font-heading text-3xl text-soma-foreground">Chakra Sanctum</h2>
          <p className="text-soma-muted mt-2 leading-relaxed">{chakraData.summary}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {chakraData.chakras.map((chakra) => (
            <div key={chakra.id} className="glass rounded-2xl overflow-hidden shadow-glow">
              <div className="relative h-32">
                <Image
                  src={chakra.image}
                  alt={chakra.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${chakra.color}CC, transparent)` }}
                />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: chakra.color }}
                    aria-hidden
                  />
                  <h3 className="font-heading text-xl text-soma-foreground">{chakra.name}</h3>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-soma-muted">
                  {chakra.element} · {chakra.themes.join(" · ")}
                </p>
                <p className="text-sm text-soma-muted italic">“{chakra.mantra}”</p>
                <p className="text-sm text-soma-muted">
                  <span className="text-soma-foreground">Practices:</span>{" "}
                  {chakra.practices.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ayurveda / Yoga / Crystals pillars */}
      {pillars.map((pillar) => (
        <section key={pillar.title} id={pillar.title.toLowerCase()}>
          <PillarBlock pillar={pillar} />
        </section>
      ))}

      {/* Pose Library */}
      <section id="poses" className="space-y-4">
        <div>
          <h2 className="font-heading text-3xl text-soma-foreground">Pose Library</h2>
          <p className="text-soma-muted mt-2">
            Foundational asanas with alignment cues and gentle modifications — a guide, not a test.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {poses.map((pose) => (
            <div key={pose.id} className="glass rounded-2xl p-6 shadow-glow">
              <h3 className="font-heading text-xl text-soma-foreground">{pose.name}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-soma-muted mt-1">
                {pose.sanskrit}
              </p>
              <ul className="mt-3 space-y-1 text-sm text-soma-muted list-disc list-inside">
                {pose.benefits.slice(0, 2).map((b: string) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="text-sm text-soma-muted mt-3">
                <span className="text-soma-foreground">Cue:</span> {pose.cues[0]}
              </p>
              <p className="text-sm text-soma-muted mt-1">
                <span className="text-soma-foreground">Make it easier:</span>{" "}
                {pose.modifications[0]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sunrise Kitchen */}
      <section id="kitchen" className="space-y-4">
        <div>
          <h2 className="font-heading text-3xl text-soma-foreground">{kitchen.title}</h2>
          <p className="text-sm uppercase tracking-[0.2em] text-soma-muted mt-1">
            {kitchen.subtitle}
          </p>
          <p className="text-soma-muted mt-2 leading-relaxed">{kitchen.intro}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {kitchen.ingredients.map((ing) => (
            <SectionCard
              key={ing.id}
              title={ing.name}
              description={`${ing.quality}. ${ing.note}`}
              tags={[ing.sanskrit, ing.category]}
            />
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {kitchen.recipes.map((recipe) => (
            <div key={recipe.id} className="glass rounded-2xl p-6 shadow-glow">
              <h3 className="font-heading text-xl text-soma-foreground">{recipe.name}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-soma-muted mt-1">
                {recipe.subtitle} · {recipe.prep_time} · {recipe.time_of_day}
              </p>
              <ul className="mt-3 space-y-1 text-sm text-soma-muted list-disc list-inside">
                {recipe.ingredients.map((i: string) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Sources */}
      <section id="sources" className="space-y-4">
        <h2 className="font-heading text-3xl text-soma-foreground">Works Cited</h2>
        <p className="text-soma-muted">
          Every pillar above is grounded in published guidance and peer-reviewed research.
        </p>
        <ol className="grid gap-x-8 gap-y-1 md:grid-cols-2 text-sm text-soma-muted list-decimal list-inside">
          {sources.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
