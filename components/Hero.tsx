import { ArrowDown, Calculator } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes heroBounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(8px); }
        }
        .hero-anim-1 { animation: heroFadeUp 0.7s ease-out both; }
        .hero-anim-2 { animation: heroFadeUp 0.7s ease-out 0.1s both; }
        .hero-anim-3 { animation: heroFadeUp 0.7s ease-out 0.2s both; }
        .hero-anim-4 { animation: heroFadeUp 0.7s ease-out 0.35s both; }
        .hero-anim-5 { animation: heroFadeIn 1s ease-out 1.2s both; }
        .hero-bounce  { animation: heroBounce 2s ease-in-out infinite; }
      `}} />

      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[250px] w-[250px] blur-[60px] md:h-[600px] md:w-[600px] md:blur-[120px] rounded-full bg-primary/10" />
        <div className="absolute bottom-1/4 right-1/4 h-[200px] w-[200px] blur-[50px] md:h-[400px] md:w-[400px] md:blur-[100px] rounded-full bg-accent/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="hero-anim-1">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-6">
            Webdesign für lokale Unternehmen
          </span>
        </div>

        <h1 className="hero-anim-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-balance">
          Moderne Websites für
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            dein lokales Business
          </span>
        </h1>

        <p className="hero-anim-3 mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-foreground/60 text-balance">
          Stressfrei zum professionellen Webauftritt. Alles aus einer Hand –
          Design, Entwicklung, Hosting & Wartung. Faire Preise, die beide Seiten
          glücklich machen.
        </p>

        <div className="hero-anim-4 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="group flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/30"
          >
            Beispiele ansehen
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#calculator"
            className="group flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-3.5 text-sm font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all"
          >
            <Calculator size={16} />
            Preis berechnen
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="hero-anim-5 mt-20">
          <div className="hero-bounce mx-auto h-10 w-6 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1.5">
            <div className="h-2 w-1 rounded-full bg-foreground/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
