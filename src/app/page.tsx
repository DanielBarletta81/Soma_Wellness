"use client";

import Link from "next/link";
import Image from "next/image";
import { SectionCard } from "@/components/SectionCard";
import StateSwitcher from "@/components/StateSwitcher";
import { useSomaAura } from "@/hooks/useSomaAura";
import { SomaSession } from "@/components/SomaSession";
import { AuthModal } from "@/components/AuthModal";
import { AuthStatusChip } from "@/components/AuthStatusChip";

const ritualPrescriptions = [
  {
    title: "Daily Ritual Tracker",
    description:
      "Earn Prana through intentional practice: +50 before 8am Sun Salutations, +100 five-day nutrition streaks, and meditation dwell-time glows.",
    tags: ["Prana", "Consistency", "Micro-Rituals"]
  },
  {
    title: "Dosha-Aware Aura",
    description:
      "Signup quiz sets palettes and pacing: Earthy grounding for Vata, cooling blues for Pitta, energizing saffron for Kapha.",
    tags: ["Dosha Quiz", "Chromotherapy"]
  },
  {
    title: "Sanctuary Check-In",
    description:
      "3-second pulse check (Energetic, Heavy, Scattered) feeds prescriptions for breath, flow, and nourishment on login.",
    tags: ["Adaptive", "Polyvagal"]
  }
];

const wisdomModules = [
  {
    title: "Wisdom Repository",
    description:
      "Timeline and lore pillars: lineage history, biological science, Ayurvedic foundations—bridging Vedas to lab notes.",
    tags: ["History", "Science", "Ayurveda"]
  },
  {
    title: "Scientific Glossary",
    description:
      "Peer-reviewed definitions mapping Sanskrit terms to physiology (Pranayama → Vagus Nerve Stimulation).",
    tags: ["Peer Reviewed", "Authority"]
  },
  {
    title: "Chakra Sanctum",
    description:
      "Energy centers mapped to endocrine glands and nerve plexuses with chakra-aligned chromotherapy.",
    tags: ["Endocrine", "Color"]
  }
];

const motherhoodFlows = [
  {
    title: "Matrescence Dashboard",
    description:
      "Prenatal, labor prep, and postpartum logic with hormone wave visualizations and compassionate mentor tone.",
    tags: ["Stages", "Hormonal Compass"]
  },
  {
    title: "Nursing Sanctuary",
    description:
      "Circadian-aware dark mode for 3am feeds, whisper-normalized audio, and restful meditations.",
    tags: ["Low Blue", "Night Mode"]
  },
  {
    title: "First 40 Days Check-In",
    description:
      "Digestion, rest, and mood tracker triggering micro-rituals (warm congee, Soma Calm breath) for stabilization.",
    tags: ["Clinical", "Micro-Rituals"]
  }
];

const bloomEngine = [
  {
    title: "Eternal Bloom Engine",
    description:
      "Logarithmic growth for total practice minutes (P = 20·log10(t+1)); early encouragement, deep mastery later.",
    tags: ["Logarithmic", "Prana Minutes"]
  },
  {
    title: "Lotus Progression",
    description:
      "Stem grows during sessions; petals unfurl at milestones (10h, 50h, 100h) and never reset—no shame UX.",
    tags: ["SVG Lotus", "Flow State"]
  },
  {
    title: "Sadhana Gating",
    description:
      "Foyer (free), Inner Room (subscription), Private Retreat (one-time) with aura cues and secure media access.",
    tags: ["Access", "Stripe", "Signed URLs"]
  }
];

const streaming = [
  {
    title: "Soma Stream",
    description:
      "S3 + CloudFront + HLS with signed URLs; adaptive bitrate keeps flows smooth while protecting premium IP.",
    tags: ["HLS", "Signed URLs"]
  },
  {
    title: "Ritual Webhook",
    description:
      "Stripe confirmation triggers a 24-hour “New Student” aura and grants sanctuary access automatically.",
    tags: ["Stripe", "Lifecycle"]
  },
  {
    title: "Session Focus Mode",
    description:
      "When a flow plays, the UI fades to deep Soma Blue leaving only the video and a subtle breathing progress line.",
    tags: ["Flow State", "Minimal UI"]
  }
];

const launchManifest = [
  {
    title: "First Breath",
    description: "Free 15-minute morning flow + Ayurvedic grocery list + 108 Prana to open the sanctuary.",
    tags: ["Onboarding", "Gift"]
  },
  {
    title: "Subscription",
    description: "Full sanctuary access with secure streaming and Sadhana tiers.",
    tags: ["Inner Room", "Recurring"]
  },
  {
    title: "Breathwork Timer",
    description: "Homepage timer grants +5 Prana for one minute of conscious breathing.",
    tags: ["Hook", "Micro-Ritual"]
  }
];

const evidence = [
  {
    src: "/images/wellness.jpg",
    alt: "Wellness studio with natural light",
    title: "Yoga improves sleep quality",
    description:
      "Research shows yoga practice can improve sleep efficiency and reduce insomnia severity.",
    href: "https://pubmed.ncbi.nlm.nih.gov/30946665/",
    source: "PubMed"
  },
  {
    src: "/images/ayurveda.jpg",
    alt: "Ayurvedic herbs and mortar",
    title: "Ayurveda reduces stress markers",
    description:
      "Trials suggest adaptogens like ashwagandha can lower cortisol and perceived stress.",
    href: "https://pubmed.ncbi.nlm.nih.gov/23439798/",
    source: "PubMed"
  },
  {
    src: "/images/neuro-fascial.jpg",
    alt: "Person practicing calm breathwork",
    title: "Breathwork calms the nervous system",
    description:
      "Slow diaphragmatic breathing can improve heart rate variability and emotional regulation.",
    href: "https://www.frontiersin.org/articles/10.3389/fnhum.2017.00448/full",
    source: "Frontiers in Human Neuroscience"
  },
  {
    src: "/images/art-release.jpg",
    alt: "Person journaling outdoors",
    title: "Mindfulness eases anxiety",
    description:
      "Mindfulness programs are associated with reduced anxiety and depressive symptoms.",
    href: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/1809754",
    source: "JAMA Intern Med"
  }
];

export default function Home() {
  const { state, setState, meta } = useSomaAura("balanced");

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 space-y-16">
      <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-soma-muted">Soma Wellness</p>
          <h1 className="font-heading text-4xl md:text-5xl text-soma-foreground">
            The Living Sanctuary
          </h1>
          <p className="text-soma-muted mt-2">
            Ascension and vitality over survival—adaptive mentorship for breath, movement, and nourishment.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <nav className="flex items-center gap-3 text-sm text-soma-muted flex-wrap">
            <Link href="#launch" className="hover:text-soma-foreground">
              Launch
            </Link>
            <Link href="#dashboard" className="hover:text-soma-foreground">
              Dashboard
            </Link>
            <Link href="#wisdom" className="hover:text-soma-foreground">
              Wisdom
            </Link>
            <Link href="#stream" className="hover:text-soma-foreground">
              Stream
            </Link>
            <Link href="#motherhood" className="hover:text-soma-foreground">
              Sacred Window
            </Link>
            <Link href="#bloom" className="hover:text-soma-foreground">
              Eternal Bloom
            </Link>
            <AuthModal />
            <AuthStatusChip />
          </nav>
          <StateSwitcher value={state} onChange={setState} />
        </div>
      </header>

      <section className="glass rounded-2xl p-8 shadow-glow gradient-ring">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-soma-muted">Biophilic UI</p>
            <h2 className="font-heading text-3xl md:text-4xl">
              Soma breathes with your nervous system state.
            </h2>
            <p className="text-soma-muted leading-relaxed">
              Select your Vayu on login. The sanctuary shifts palettes, pacing, and prescriptions to balance
              your Dosha and current breath. A living mentor—never a slot machine.
            </p>
            <div className="flex gap-3 text-sm">
              <Link
                href="/dashboard"
                className="rounded-full bg-soma-accent px-4 py-2 font-semibold text-black"
              >
                Explore dashboard
              </Link>
              <Link href="/wisdom" className="rounded-full border border-white/15 px-4 py-2">
                Browse wisdom
              </Link>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 space-y-4 shadow-glow">
            <p className="text-xs uppercase tracking-[0.2em] text-soma-muted">Live Prescription</p>
            <h3 className="font-heading text-2xl">Soma Mentor</h3>
            <p className="text-soma-muted text-sm leading-relaxed">{meta.note}</p>
            <div className="grid gap-3">
              {ritualPrescriptions.map((item) => (
                <SectionCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="evidence" className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-soma-muted">Grounded in Science</p>
          <h2 className="font-heading text-3xl text-soma-foreground">Why it works</h2>
          <p className="text-soma-muted mt-2">
            Every ritual in the sanctuary is anchored in peer-reviewed research.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {evidence.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl overflow-hidden shadow-glow group"
            >
              <div className="relative h-36">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-heading text-lg text-soma-foreground">{item.title}</h3>
                <p className="text-sm text-soma-muted leading-relaxed">{item.description}</p>
                <p className="text-[11px] uppercase tracking-[0.15em] text-soma-accent">
                  {item.source} →
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="launch" className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-soma-muted">Launch Manifest</p>
            <h2 className="font-heading text-3xl text-soma-foreground">First Breath Package</h2>
            <p className="text-soma-muted mt-2">Onboarding gifts and rituals to open the sanctuary.</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {launchManifest.map((item) => (
            <SectionCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section id="dashboard" className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-soma-muted">State-of-Being</p>
            <h2 className="font-heading text-3xl text-soma-foreground">Dashboard</h2>
          </div>
          <Link href="/dashboard" className="text-sm text-soma-muted hover:text-soma-foreground">
            Deep dive →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {ritualPrescriptions.map((item) => (
            <SectionCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section id="stream" className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-soma-muted">Delivery</p>
            <h2 className="font-heading text-3xl text-soma-foreground">Soma Stream & Security</h2>
            <p className="text-soma-muted mt-2">
              Enterprise-grade media gating for flows, meditations, and masterclasses.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {streaming.map((item) => (
            <SectionCard key={item.title} {...item} />
          ))}
        </div>
        <SomaSession demo />
      </section>

      <section id="wisdom" className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-soma-muted">Authority & Lineage</p>
            <h2 className="font-heading text-3xl text-soma-foreground">Wisdom Repository</h2>
          </div>
          <Link href="/wisdom" className="text-sm text-soma-muted hover:text-soma-foreground">
            View modules →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {wisdomModules.map((item) => (
            <SectionCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section id="motherhood" className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-soma-muted">Sacred Window</p>
            <h2 className="font-heading text-3xl text-soma-foreground">Motherhood Portal</h2>
          </div>
          <Link href="/motherhood" className="text-sm text-soma-muted hover:text-soma-foreground">
            Enter sanctuary →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {motherhoodFlows.map((item) => (
            <SectionCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section id="bloom" className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-soma-muted">Progression</p>
            <h2 className="font-heading text-3xl text-soma-foreground">Eternal Bloom Engine</h2>
          </div>
          <Link href="/bloom" className="text-sm text-soma-muted hover:text-soma-foreground">
            See growth →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {bloomEngine.map((item) => (
            <SectionCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 pt-10 pb-6 space-y-4">
        <p className="text-sm text-soma-muted leading-relaxed max-w-3xl">
          Soma Wellness is a modern wellness platform focused on calm, optional guidance rather than
          performance or tracking. By combining somatic principles with thoughtful interaction
          design, Soma helps people reconnect with their bodies without pressure, gamification, or
          data extraction — support, not management.
        </p>
        <p className="text-xs text-soma-muted">
          © 2025 Soma Wellness · C.J. Barletta ·{" "}
          <a href="mailto:cjbarletta@somalivingwell.com" className="hover:text-soma-foreground">
            cjbarletta@somalivingwell.com
          </a>{" "}
          · somalivingwellness.com
        </p>
      </footer>
    </main>
  );
}
