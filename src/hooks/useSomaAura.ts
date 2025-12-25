'use client';

import { useCallback, useEffect, useState } from "react";

export type SomaState = "scattered" | "lethargic" | "balanced";

export const stateMeta: Record<
  SomaState,
  { label: string; note: string; palette: string }
> = {
  scattered: {
    label: "Scattered (Vata)",
    note: "Stabilize with grounding breath, slow flow, and warm nourishment.",
    palette: "Oceanic blues to soften and steady the mind."
  },
  lethargic: {
    label: "Lethargic (Kapha)",
    note: "Energize with light activation, dynamic flows, and crisp citrus notes.",
    palette: "Lavender and amethyst to gently lift energy."
  },
  balanced: {
    label: "Balanced (Sattva)",
    note: "Maintain the calm: balanced pranayama, steady rhythm, and clean greens.",
    palette: "Deep forest greens to hold equilibrium."
  }
};

export function useSomaAura(defaultState: SomaState = "balanced") {
  const [state, setState] = useState<SomaState>(defaultState);

  useEffect(() => {
    document.documentElement.dataset.state = state;
  }, [state]);

  const cycle = useCallback(() => {
    setState((current) =>
      current === "scattered" ? "lethargic" : current === "lethargic" ? "balanced" : "scattered"
    );
  }, []);

  return { state, setState, cycle, meta: stateMeta[state] };
}
