import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { RateUs } from "@/components/RateUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DARKFLUX CAFE — Experience taste like never before" },
      {
        name: "description",
        content:
          "Premium dark-themed cafe in Kathmandu. Biryani, pizza, burgers, Thakali sets and more — crafted with intent.",
      },
      { property: "og:title", content: "DARKFLUX CAFE" },
      {
        property: "og:description",
        content: "Experience taste like never before — a candlelit sanctuary of flavor.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <About />
        <Gallery />
        <RateUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
