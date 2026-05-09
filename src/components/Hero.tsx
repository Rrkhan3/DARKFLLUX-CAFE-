import { useEffect, useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ transform: `translateY(${y * 0.25}px) scale(1.08)` }}
      >
        <img
          src={heroImg}
          alt="Darkflux Cafe ambience"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
      </div>

      <div className="absolute inset-0 -z-10 grid-lines opacity-40" />

      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/40 text-xs tracking-[0.25em] text-gold/90 mb-7 animate-fade-in">
            <Star size={12} className="fill-gold text-gold" />
            EST · 2024 · KATHMANDU
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] animate-fade-up">
            Welcome to
            <br />
            <span className="gold-shimmer">DARKFLUX</span>
            <span className="text-foreground/90"> CAFE</span>
          </h1>

          <div className="flex items-center gap-4 my-8 animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="h-px w-16 hairline" />
            <p className="text-lg md:text-xl text-foreground/75 italic font-display">
              Experience taste like never before
            </p>
          </div>

          <p
            className="max-w-xl text-foreground/65 leading-relaxed animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            A candlelit sanctuary where slow-cooked traditions meet modern
            craftsmanship. Sourced locally, plated with intent.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#menu"
              className="btn-gold rounded-full px-7 py-3.5 inline-flex items-center gap-2 font-medium"
            >
              Explore Menu
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="btn-ghost-gold rounded-full px-7 py-3.5 inline-flex items-center gap-2 font-medium"
            >
              Our Story
            </a>
          </div>

          <div
            className="mt-16 grid grid-cols-3 gap-8 max-w-md animate-fade-up"
            style={{ animationDelay: "420ms" }}
          >
            {[
              { v: "4.9", l: "Avg. Rating" },
              { v: "30+", l: "Signatures" },
              { v: "2k+", l: "Guests / mo" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl md:text-3xl gold-gradient">
                  {s.v}
                </div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-foreground/50 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 text-xs tracking-[0.3em] animate-fade-in">
        <div className="flex flex-col items-center gap-2">
          <span>SCROLL</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}
