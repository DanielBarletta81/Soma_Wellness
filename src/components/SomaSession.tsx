'use client';

import { useEffect, useRef, useState } from "react";

type Props = {
  src?: string;
  poster?: string;
  onSessionEnd?: (minutes: number) => void;
  demo?: boolean;
};

export function SomaSession({ src, poster, onSessionEnd, demo = false }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isFlowState, setIsFlowState] = useState(false);

  useEffect(() => {
    return () => setIsFlowState(false);
  }, []);

  const handlePlay = () => {
    if (!startTime) setStartTime(Date.now());
    setIsFlowState(true);
  };

  const handlePause = () => setIsFlowState(false);

  const handleEnded = () => {
    setIsFlowState(false);
    if (!startTime) return;
    const minutes = Math.max(1, Math.floor((Date.now() - startTime) / 60000));
    onSessionEnd?.(minutes);
    setStartTime(null);
  };

  if (demo && !src) {
    return (
      <div className="glass rounded-2xl p-6 shadow-glow space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-soma-muted">Soma Session</p>
            <h3 className="font-heading text-2xl text-soma-foreground">Signed HLS Player</h3>
          </div>
          <span className="rounded-full bg-soma-accent px-3 py-1 text-xs font-semibold text-black">
            Placeholder
          </span>
        </div>
        <p className="text-sm text-soma-muted">
          Wire in your signed HLS URL here. When the video ends, minutes practiced are pushed to the Eternal
          Bloom engine. UI enters Flow State to minimize distractions.
        </p>
        <div className="rounded-xl border border-white/10 bg-black/30 p-6 text-sm text-soma-muted">
          • Protect content with CloudFront signed URLs
          <br />• Add `controlsList=&quot;nodownload&quot;` to video tag
          <br />• Push practice minutes to backend on `onSessionEnd`
        </div>
      </div>
    );
  }

  return (
    <div
      className={`glass rounded-2xl p-4 shadow-glow space-y-3 ${
        isFlowState ? "ring-2 ring-soma-accent ring-offset-4 ring-offset-soma-surface" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-soma-muted">Soma Session</p>
          <h3 className="font-heading text-xl text-soma-foreground">Flow State Player</h3>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-soma-muted">
          HLS Secure
        </span>
      </div>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-black/50">
        <video
          ref={videoRef}
          poster={poster}
          controls
          controlsList="nodownload"
          className="h-56 w-full bg-black object-cover"
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
        >
          {src ? <source src={src} type="application/x-mpegURL" /> : null}
          Your browser does not support secure HLS playback.
        </video>
      </div>
      <div className="flex items-center justify-between text-xs text-soma-muted">
        <span>{isFlowState ? "Flow State: UI dimmed" : "Ready"}</span>
        <span>{startTime ? "Tracking Prana minutes…" : "Awaiting session"}</span>
      </div>
    </div>
  );
}
