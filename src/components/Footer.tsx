import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gold/40 text-gold font-display text-lg">
              D
            </span>
            <span className="font-display tracking-widest">
              <span className="gold-gradient font-semibold">DARKFLUX</span>
              <span className="ml-1 text-foreground/80">CAFE</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-foreground/60 leading-relaxed max-w-xs">
            A candlelit sanctuary where slow-cooked tradition meets modern
            craft.
          </p>
        </div>

        <div>
          <div className="text-[11px] tracking-[0.25em] uppercase text-gold/80 mb-4">
            Explore
          </div>
          <ul className="space-y-2 text-sm">
            {["Menu", "About", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-foreground/70 hover:text-gold transition"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] tracking-[0.25em] uppercase text-gold/80 mb-4">
            Follow
          </div>
          <div className="flex gap-3">
            {[
              { Icon: Instagram, href: "https://instagram.com" },
              { Icon: Facebook, href: "https://facebook.com" },
              { Icon: Twitter, href: "https://twitter.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-border hover:border-gold hover:text-gold text-foreground/70 flex items-center justify-center transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-foreground/50">
            ramitbc0942@gmail.com · +977 9707136887
          </p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-foreground/50">
          <span>© {new Date().getFullYear()} DARKFLUX CAFE. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">
            Crafted with <span className="text-gold">★</span> in Kathmandu
          </span>
        </div>
      </div>
    </footer>
  );
}
