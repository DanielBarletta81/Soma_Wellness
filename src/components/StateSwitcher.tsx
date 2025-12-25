'use client';

import { SomaState, stateMeta } from "@/hooks/useSomaAura";

type Props = {
  value: SomaState;
  onChange: (next: SomaState) => void;
};

const options: SomaState[] = ["scattered", "lethargic", "balanced"];

export default function StateSwitcher({ value, onChange }: Props) {
  return (
    <div className="glass gradient-ring rounded-2xl px-4 py-3 flex items-center gap-3 shadow-glow">
      <div className="flex-1">
        <p className="text-xs uppercase tracking-[0.2em] text-soma-muted">State-of-Being</p>
        <p className="text-sm font-semibold text-soma-foreground">{stateMeta[value].label}</p>
        <p className="text-xs text-soma-muted">{stateMeta[value].palette}</p>
      </div>
      <div className="flex gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
              value === option
                ? "bg-soma-accent text-black shadow-glow"
                : "text-soma-muted hover:text-soma-foreground"
            }`}
            aria-pressed={value === option}
          >
            {stateMeta[option].label.split(" ")[0]}
          </button>
        ))}
      </div>
    </div>
  );
}
