import { galleryImages } from "@/lib/menu-data";
import { Reveal } from "./Reveal";

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs tracking-[0.35em] text-gold/80 mb-4">
              — GALLERY —
            </p>
            <h2 className="font-display text-4xl md:text-6xl">
              Moments, <span className="gold-gradient italic">plated.</span>
            </h2>
          </div>
        </Reveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
          {galleryImages.map((src, i) => (
            <Reveal key={src} delay={i * 60}>
              <div className="overflow-hidden rounded-2xl border border-border/60 hover:border-gold/40 transition group">
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  loading="lazy"
                  className={`w-full object-cover img-zoom ${
                    i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-64" : "h-96"
                  }`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
