import { useMemo, useState } from "react";
import { categories, menu, type Category } from "@/lib/menu-data";
import { Reveal } from "./Reveal";

export function MenuSection() {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? menu : menu.filter((m) => m.category === active)),
    [active]
  );

  return (
    <section id="menu" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs tracking-[0.35em] text-gold/80 mb-4">
              — THE MENU —
            </p>
            <h2 className="font-display text-4xl md:text-6xl">
              Crafted <span className="gold-gradient italic">with intent</span>
            </h2>
            <p className="mt-5 text-foreground/65">
              Six chapters of flavor, each plate a quiet story between fire,
              spice and patience.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14">
            {(["All", ...categories] as const).map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm tracking-wide transition-all border ${
                  active === c
                    ? "btn-gold border-transparent"
                    : "border-border text-foreground/70 hover:border-gold/60 hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <article className="card-elev rounded-2xl overflow-hidden h-full flex flex-col group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase text-gold/90 bg-background/60 backdrop-blur px-2.5 py-1 rounded-full border border-gold/30">
                    {item.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl text-foreground">
                      {item.name}
                    </h3>
                    <span className="font-display text-lg gold-gradient whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  {item.desc && (
                    <p className="text-sm text-foreground/60 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                  <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="text-[11px] tracking-[0.2em] uppercase text-foreground/50">
                      Chef's choice
                    </span>
                    <button className="text-xs text-gold hover:text-gold-soft transition">
                      Order →
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
