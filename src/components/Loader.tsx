import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border border-gold/20" />
          <div
            className="absolute inset-0 rounded-full border-t border-gold"
            style={{ animation: "spin-slow 1.2s linear infinite" }}
          />
          <div className="absolute inset-0 flex items-center justify-center font-display text-gold text-2xl">
            D
          </div>
        </div>
        <div className="text-[11px] tracking-[0.4em] text-foreground/60">
          DARKFLUX CAFE
        </div>
      </div>
    </div>
  );
}
