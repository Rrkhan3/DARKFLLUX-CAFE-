import { useState } from "react";
import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

export function RateUs() {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [reviews, setReviews] = useState(248);
  const [avg, setAvg] = useState(4.8);

  const submit = () => {
    if (!rating) return;
    const newAvg = (avg * reviews + rating) / (reviews + 1);
    setAvg(Number(newAvg.toFixed(2)));
    setReviews(reviews + 1);
    setSubmitted(true);
  };

  return (
    <section id="rate" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.35em] text-gold/80 mb-4">
            — RATE US —
          </p>
          <h2 className="font-display text-4xl md:text-5xl">
            How was your <span className="gold-gradient italic">experience?</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 card-elev rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="text-left">
                <div className="font-display text-5xl gold-gradient">{avg}</div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-foreground/50 mt-1">
                  {reviews.toLocaleString()} reviews
                </div>
              </div>
              <div className="h-14 w-px bg-border" />
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={22}
                    className={
                      s <= Math.round(avg)
                        ? "fill-gold text-gold"
                        : "text-foreground/30"
                    }
                  />
                ))}
              </div>
            </div>

            <div className="hairline h-px my-8" />

            <p className="text-foreground/70 mb-5">
              {submitted ? "Thank you for your rating ✨" : "Tap to rate your visit"}
            </p>
            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  onMouseEnter={() => setHover(s)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(s)}
                  className="p-1 transition-transform hover:scale-110"
                  aria-label={`Rate ${s} stars`}
                >
                  <Star
                    size={36}
                    className={`transition-colors ${
                      (hover || rating) >= s
                        ? "fill-gold text-gold drop-shadow-[0_0_12px_rgba(212,175,55,0.45)]"
                        : "text-foreground/25"
                    }`}
                  />
                </button>
              ))}
            </div>
            <button
              onClick={submit}
              disabled={!rating || submitted}
              className="btn-gold rounded-full px-8 py-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitted ? "Submitted" : "Submit Rating"}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
