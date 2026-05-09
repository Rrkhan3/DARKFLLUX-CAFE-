import { useState } from "react";
import { Send, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs tracking-[0.35em] text-gold/80 mb-4">
              — GET IN TOUCH —
            </p>
            <h2 className="font-display text-4xl md:text-6xl">
              Say <span className="gold-gradient italic">hello</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setForm({ name: "", message: "" });
                setTimeout(() => setSent(false), 3000);
              }}
              className="card-elev rounded-3xl p-8 md:p-10 flex flex-col gap-5"
            >
              <div>
                <label className="text-[11px] tracking-[0.2em] uppercase text-foreground/60">
                  Your Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-foreground/30 transition"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="text-[11px] tracking-[0.2em] uppercase text-foreground/60">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-foreground/30 resize-none transition"
                  placeholder="Tell us about your visit, reservation, or feedback…"
                />
              </div>
              <button
                type="submit"
                className="btn-gold rounded-full px-7 py-3.5 inline-flex items-center justify-center gap-2 font-medium self-start mt-2"
              >
                {sent ? "Sent ✓" : "Send Message"}
                {!sent && <Send size={16} />}
              </button>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-elev rounded-3xl overflow-hidden h-full min-h-[400px] relative">
              <iframe
                title="Darkflux location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=85.30%2C27.69%2C85.34%2C27.73&layer=mapnik"
                className="w-full h-full grayscale contrast-125 brightness-75 opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5 border border-gold/20">
                <div className="flex items-start gap-3">
                  <MapPin className="text-gold mt-0.5" size={18} />
                  <div>
                    <div className="font-display text-lg">DARKFLUX CAFE</div>
                    <div className="text-xs text-foreground/60 mt-1">
                      Kathmandu · Nepal
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
