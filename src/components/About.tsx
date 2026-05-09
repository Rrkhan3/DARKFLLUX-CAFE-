import { Mail, Phone, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 -z-10" />
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-gold/20">
              <img
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80"
                alt="Darkflux interior"
                loading="lazy"
                className="w-full h-full object-cover img-zoom"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block w-44 h-44 rounded-full border border-gold/30 grid-lines" />
            <div className="absolute -top-4 -left-4 hidden md:flex w-24 h-24 rounded-full glass items-center justify-center font-display text-gold text-3xl">
              ★
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <p className="text-xs tracking-[0.35em] text-gold/80 mb-4">
              — ABOUT US —
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              A quiet rebellion of <span className="gold-gradient italic">flavor</span>,
              served by candlelight.
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              DARKFLUX CAFE is a modern sanctuary for the slow, the spiced and
              the soulful. Born from a love of Nepali tradition and global
              craft, we plate every dish to be felt — not just eaten.
              Cozy interiors, premium produce, an unhurried evening.
            </p>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              From smoky biryanis to wood-fired pizzas and the nostalgic warmth
              of a Thakali set — every visit is a small ritual.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <a
                href="mailto:ramitbc0942@gmail.com"
                className="card-elev rounded-xl p-5 flex items-start gap-4"
              >
                <Mail className="text-gold mt-0.5" size={20} />
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-foreground/50">
                    Email
                  </div>
                  <div className="text-sm text-foreground mt-1 break-all">
                    ramitbc0942@gmail.com
                  </div>
                </div>
              </a>
              <a
                href="tel:9707136887"
                className="card-elev rounded-xl p-5 flex items-start gap-4"
              >
                <Phone className="text-gold mt-0.5" size={20} />
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-foreground/50">
                    Phone
                  </div>
                  <div className="text-sm text-foreground mt-1">
                    +977 9707136887
                  </div>
                </div>
              </a>
              <div className="card-elev rounded-xl p-5 flex items-start gap-4 sm:col-span-2">
                <MapPin className="text-gold mt-0.5" size={20} />
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-foreground/50">
                    Visit
                  </div>
                  <div className="text-sm text-foreground mt-1">
                    Open daily · 8:00 AM – 10:30 PM · Kathmandu, Nepal
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
