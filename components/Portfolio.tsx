"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Car,
  Paintbrush,
  Scissors,
  Pizza,
  Wrench,
  Sun,
  Trophy,
  Beer,
  Monitor,
  Smartphone,
  ExternalLink,
  X,
  CheckCircle2,
  Star,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Variant {
  label: string;
  title: string;
  industry: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  features: string[];
  highlights: string[];
  url: string;
  preview: string;
}

interface BaseProject {
  id: string;
  title: string;
  industry: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  features: string[];
  highlights: string[];
  url: string;
  preview: string;
}

interface StandardProject extends BaseProject {
  kind: "standard";
}

interface MultiVariantProject extends BaseProject {
  kind: "multi";
  variants: Variant[];
}

type Project = StandardProject | MultiVariantProject;

/** Data passed from a card click into the modal. */
interface ModalData {
  title: string;
  industry: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  features: string[];
  highlights: string[];
  url: string;
  /** Present only for multi-variant projects */
  variants?: Variant[];
  /** Which variant was active when the card was clicked */
  initialVariantIdx?: number;
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const projects: Project[] = [
  {
    kind: "standard",
    id: "fahrschule",
    title: "Fahrschule Express",
    industry: "Fahrschule",
    icon: <Car size={28} />,
    color: "from-blue-500 to-blue-600",
    description:
      "Eine hochmoderne, stressfreie Web-Experience, die mit einem dynamischen Glassmorphismus-Design gezielt eine junge Zielgruppe anspricht.",
    features: [
      "Interaktiver Führerschein-Kostenrechner",
      "Geführter Anmelde-Wizard (Pop-up)",
      "Dynamischer Theorie-Kalender",
    ],
    highlights: [
      "Spotify-Integration ('Kein WDR 4')",
      "Auffällige Trust-Bar mit Google-Bewertungen",
      "Rechtstexte elegant als Modal integriert",
    ],
    url: "https://fahrschulen.vercel.app",
    preview: "/previews/fahrschule.png",
  },
  {
    kind: "standard",
    id: "sportverein",
    title: "FC Düsseldorf 09",
    industry: "Sportverein",
    icon: <Trophy size={28} />,
    color: "from-green-500 to-emerald-600",
    description:
      "Traditionelle Werte in einem modernen Layout. Ein digitales Vereinsheim als zentrale Informationsplattform für Mitglieder und Fans.",
    features: [
      "Echtzeit-News-Ticker (z.B. für Platzsperren)",
      "Intelligente, responsive Trainingspläne",
      "Digitaler Mitgliedschafts- & Probetrainingsantrag",
    ],
    highlights: [
      "Spezifische Unterseiten je Abteilung",
      "Transparente Vorstellung des Vorstands",
      "Integrierte Anfahrtshilfe & Sponsoren-Präsenz",
    ],
    url: "https://sportverein.vercel.app",
    preview: "/previews/sportverein.png",
  },
  {
    kind: "standard",
    id: "solar",
    title: "SunPower Solutions",
    industry: "Solaranlagen",
    icon: <Sun size={28} />,
    color: "from-yellow-500 to-green-500",
    description:
      "Digitale Kompetenz für die Energiewende. Konzipiert, um Vertrauen aufzubauen und komplexe technische Leistungen einfach zu erklären.",
    features: [
      "Interaktiver Solar-Rechner (20 Jahre Ersparnis)",
      "Dynamisches Portfolio mit technischen Daten",
      "Strukturierter 4-Schritte Ablauf-Guide",
    ],
    highlights: [
      "Integrierte KfW-Fördermittel-Beratung",
      "Direkter WhatsApp-Kontaktbutton",
      "Klare Farbpsychologie (Tech-Blue & Eco-Green)",
    ],
    url: "https://solaranlagen.vercel.app",
    preview: "/previews/solaranlagen.png",
  },
  {
    kind: "standard",
    id: "handwerker",
    title: "Meister Schmidt",
    industry: "Handwerker",
    icon: <Wrench size={28} />,
    color: "from-orange-500 to-orange-600",
    description:
      "Eine vertrauenserweckende, conversion-starke Plattform, die traditionelles Handwerk mit interaktiven digitalen Tools verbindet.",
    features: [
      "Interaktiver 3-Stufen-Projektkalkulator",
      "Echtzeit-PLZ-Checker für das Einsatzgebiet",
      "Vorher/Nachher-Galerie mit Swipe-Funktion",
    ],
    highlights: [
      "Immer sichtbare Notfall-Buttons (WhatsApp/Telefon)",
      "Smarte Hover-Effekte & fließende Animationen",
      "Mobile-First Design mit seitlichem Menü",
    ],
    url: "https://handwerker-rose.vercel.app",
    preview: "/previews/handwerker.png",
  },
  {
    kind: "standard",
    id: "restaurant",
    title: "Bella Napoli",
    industry: "Restaurants",
    icon: <Pizza size={28} />,
    color: "from-red-500 to-red-600",
    description:
      "Moderne mediterrane Eleganz. Ein emotionales digitales Erlebnis, das die Essenz authentischer italienischer Tradition einfängt.",
    features: [
      "Interaktive Speisekarte mit Zoom-Effekten",
      "Detailverliebtes Nährwert- & Allergen-Modal",
      "Nahtloses Tisch-Reservierungssystem",
    ],
    highlights: [
      "Vollständige Mehrsprachigkeit (i18n)",
      "Warme, erdige Farbpalette",
      "Scroll-Animationen & visuelles Storytelling",
    ],
    url: "https://pizzaria-pi-seven.vercel.app",
    preview: "/previews/restaurant.png",
  },
  {
    kind: "standard",
    id: "kneipe",
    title: "Zum Goldenen Fass",
    industry: "Kneipen / Bars",
    icon: <Beer size={28} />,
    color: "from-teal-500 to-cyan-600",
    description:
      "Urige Brauhaustradition trifft auf digitale Exzellenz. Ein immersives Dark-Theme mit elegantem Glasmorphismus und goldenen Akzenten.",
    features: [
      "Smarte, digitale Speisekarte (kein PDF!)",
      "Integriertes Pop-up für Tischreservierungen",
      "Zweisprachigkeit (DE/EN) ohne Neuladen",
    ],
    highlights: [
      "Mobile Sticky Action Bar für Schnellzugriff",
      "Sanfter 'Ken Burns'-Zoom im Hintergrund",
      "Eingebettete Lightbox-Bildergalerie",
    ],
    url: "https://bar-sigma-three.vercel.app",
    preview: "/previews/kneipe.png",
  },
  {
    kind: "multi",
    id: "barber-tattoo",
    title: "Gentleman's Cut",
    industry: "Friseur & Tattoo Studio",
    icon: <Scissors size={28} />,
    color: "from-amber-500 to-amber-600",
    description:
      "Brutalistischer Minimalismus in Schwarz-Weiß. Ein präzises, charakterstarkes Design, das das Handwerk in den Fokus rückt.",
    features: [
      "Intelligentes Termin-Buchungssystem",
      "Immersive Full-Screen Lightbox-Galerie",
      "Scroll-Reveal-Technik für Inhalte",
    ],
    highlights: [
      "Kino-Feeling durch Parallax-Scrolling",
      "Native Lazy Loading für extreme Performance",
      "Perfektes Mobile-Responsive Layout",
    ],
    url: "https://friseur-rho.vercel.app",
    preview: "/previews/barber.png",
    variants: [
      {
        label: "Friseur (Classic)",
        title: "Gentleman's Cut",
        industry: "Friseur / Barbershop",
        icon: <Scissors size={28} />,
        color: "from-amber-500 to-amber-600",
        description:
          "Brutalistischer Minimalismus in Schwarz-Weiß. Ein präzises, charakterstarkes Design, das das Handwerk in den Fokus rückt.",
        features: [
          "Intelligentes Termin-Buchungssystem",
          "Immersive Full-Screen Lightbox-Galerie",
          "Scroll-Reveal-Technik für Inhalte",
        ],
        highlights: [
          "Kino-Feeling durch Parallax-Scrolling",
          "Native Lazy Loading für extreme Performance",
          "Perfektes Mobile-Responsive Layout",
        ],
        url: "https://friseur-rho.vercel.app",
        preview: "/previews/barber.png",
      },
      {
        label: "Tattoo (Modern)",
        title: "Ink & Art Studio",
        industry: "Tattoo Studio",
        icon: <Paintbrush size={28} />,
        color: "from-purple-500 to-purple-600",
        description:
          "Industrial Aesthetic meets Precision Artistry. Eine immersive Dark-Mode Experience mit authentischem Underground-Vibe.",
        features: [
          "Integriertes Buchungssystem nach Artist",
          "Nahtlose Zweisprachigkeit (DE/EN)",
          "Animierter Pflege-Guide (Aftercare)",
        ],
        highlights: [
          "Benutzerdefinierter Custom Cursor",
          "Subtiler Film-Grain-Effekt (Rauschen)",
          "Interaktive Filter für das Portfolio",
        ],
        url: "https://tattoo-blond.vercel.app",
        preview: "/previews/tattoo.png",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Device Mockup Components                                           */
/* ------------------------------------------------------------------ */

const IFRAME_DESKTOP_W = 1440;
const IFRAME_DESKTOP_H = 900;
const BEZEL_PX = 12;

function MacbookMockup({ url, title }: { url: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      setScale(Math.min((w - BEZEL_PX * 2) / IFRAME_DESKTOP_W, 1));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="w-full mx-auto" ref={containerRef}>
      {/* Screen bezel */}
      <div className="relative rounded-t-xl border-[12px] border-[#1a1a1a] bg-[#1a1a1a]">
        {/* Camera notch */}
        <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#2a2a2a] border border-[#333] z-10 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0d4a1e]" />
        </div>
        {/* Browser chrome */}
        <div className="flex h-8 items-center gap-1.5 bg-[#2a2a2a] px-3 rounded-t-sm">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex-1 flex justify-center">
            <div className="max-w-sm w-full bg-[#1a1a1a] rounded-md px-3 py-0.5 text-[10px] text-gray-400 text-center truncate">
              {url}
            </div>
          </div>
        </div>
        {/* Scaled iframe — always renders at 1440px so the site shows its desktop layout */}
        <div
          className="overflow-hidden"
          style={{ height: `${IFRAME_DESKTOP_H * scale}px` }}
        >
          <iframe
            src={url}
            title={title}
            className="bg-white origin-top-left"
            style={{
              width: `${IFRAME_DESKTOP_W}px`,
              height: `${IFRAME_DESKTOP_H}px`,
              transform: `scale(${scale})`,
            }}
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
      {/* Bottom chin / hinge */}
      <div className="relative mx-auto">
        <div className="h-4 bg-gradient-to-b from-[#c0c0c0] to-[#a8a8a8] rounded-b-md" />
        <div className="mx-auto h-1 w-24 bg-[#b0b0b0] rounded-b-lg" />
      </div>
    </div>
  );
}

function IPhoneMockup({ url, title }: { url: string; title: string }) {
  return (
    <div className="mx-auto w-[375px]">
      <div className="relative rounded-[3rem] border-[14px] border-black bg-black shadow-2xl">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="overflow-hidden rounded-[2.2rem] bg-white">
          <iframe
            src={url}
            title={title}
            className="w-full"
            style={{ height: "750px" }}
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-1 bg-gray-600 rounded-full" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Style Toggle Pill (shared between cards & modal)                   */
/* ------------------------------------------------------------------ */

function StyleToggle({
  variants,
  activeIndex,
  onChange,
}: {
  variants: Variant[];
  activeIndex: number;
  onChange: (idx: number) => void;
}) {
  return (
    <div className="flex rounded-full bg-gray-100 dark:bg-gray-800 p-0.5">
      {variants.map((v, idx) => (
        <button
          key={v.label}
          onClick={(e) => {
            e.stopPropagation();
            onChange(idx);
          }}
          className={`flex-1 relative rounded-full px-3 py-1 text-xs font-medium text-center transition-all duration-200 ${
            idx === activeIndex
              ? "bg-white dark:bg-gray-700 text-foreground shadow-sm"
              : "text-foreground/50 hover:text-foreground/70"
          }`}
        >
          {v.label}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Modal                                                              */
/* ------------------------------------------------------------------ */

function ProjectModal({
  data,
  onClose,
}: {
  data: ModalData;
  onClose: () => void;
}) {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [variantIdx, setVariantIdx] = useState(data.initialVariantIdx ?? 0);

  const hasVariants = !!data.variants && data.variants.length > 0;
  const active = hasVariants ? data.variants![variantIdx] : data;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-[95vw] max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-gray-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Left: device mockup preview */}
          <div className="flex-1 min-w-0 p-6">
            {/* Controls row: device toggle + optional variant toggle */}
            <div className="mb-4 flex items-center justify-center gap-4 flex-wrap">
              {/* Desktop / Mobile toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("desktop")}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    viewMode === "desktop"
                      ? "bg-primary text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-foreground/60 hover:text-foreground"
                  }`}
                >
                  <Monitor size={16} />
                  Desktop
                </button>
                <button
                  onClick={() => setViewMode("mobile")}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    viewMode === "mobile"
                      ? "bg-primary text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-foreground/60 hover:text-foreground"
                  }`}
                >
                  <Smartphone size={16} />
                  Mobil
                </button>
              </div>

              {/* Variant toggle (only for multi-variant projects) */}
              {hasVariants && (
                <>
                  <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />
                  <StyleToggle
                    variants={data.variants!}
                    activeIndex={variantIdx}
                    onChange={setVariantIdx}
                  />
                </>
              )}
            </div>

            {/* Device mockups with transition */}
            <div className="flex justify-center">
              <AnimatePresence mode="wait">
                {viewMode === "desktop" ? (
                  <motion.div
                    key={`desktop-${active.url}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <MacbookMockup url={active.url} title={active.title} />
                  </motion.div>
                ) : (
                  <motion.div
                    key={`mobile-${active.url}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IPhoneMockup url={active.url} title={active.title} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: info panel */}
          <div className="w-full lg:w-80 shrink-0 p-6 lg:border-l border-gray-200 dark:border-gray-800">
            <div
              className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${active.color} text-white mb-4`}
            >
              {active.icon}
            </div>
            <h3 className="text-2xl font-bold mb-1">{active.industry}</h3>
            <p className="text-sm text-foreground/50 mb-3">{active.title}</p>
            <p className="text-sm text-foreground/60 leading-relaxed mb-6">
              {active.description}
            </p>

            <div className="space-y-4 mb-6">
              {/* Features list */}
              {active.features && active.features.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/40 mb-2">
                    Hauptfunktionen:
                  </h4>
                  <ul className="space-y-2">
                    {active.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-foreground/70"
                      >
                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-primary mt-0.5"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Highlights list */}
              {active.highlights && active.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/40 mb-2">
                    Highlights &amp; UX:
                  </h4>
                  <ul className="space-y-2">
                    {active.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-foreground/70"
                      >
                        <Star
                          size={16}
                          className="shrink-0 text-amber-500 mt-0.5"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors w-full"
            >
              <ExternalLink size={16} />
              Live-Website besuchen
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Portfolio Card                                                     */
/* ------------------------------------------------------------------ */

function PortfolioCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (data: ModalData) => void;
}) {
  const [variantIdx, setVariantIdx] = useState(0);

  const isMulti = project.kind === "multi";
  const active = isMulti ? project.variants[variantIdx] : project;

  const handleClick = () => {
    if (isMulti) {
      onSelect({
        title: active.title,
        industry: active.industry,
        icon: active.icon,
        color: active.color,
        description: active.description,
        features: active.features,
        highlights: active.highlights,
        url: active.url,
        variants: project.variants,
        initialVariantIdx: variantIdx,
      });
    } else {
      onSelect({
        title: project.title,
        industry: project.industry,
        icon: project.icon,
        color: project.color,
        description: project.description,
        features: project.features,
        highlights: project.highlights,
        url: project.url,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      onClick={handleClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 text-left transition-shadow hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Preview image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={active.preview}
          alt={active.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${active.color} text-white transition-transform group-hover:scale-110`}
              >
                {active.icon}
              </div>
              <div className="min-w-0">
                {/* Always show the project-level industry as the primary heading */}
                <h3 className="text-2xl font-bold leading-tight truncate">
                  {project.industry}
                </h3>
                <p className="text-sm text-foreground/50 truncate">
                  {active.title}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Style toggle for multi-variant cards */}
        {isMulti && (
          <div className="mt-3">
            <StyleToggle
              variants={project.variants}
              activeIndex={variantIdx}
              onChange={setVariantIdx}
            />
          </div>
        )}
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Section                                                       */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  const [selected, setSelected] = useState<ModalData | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selected]);

  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Meine Demo-Projekte
          </h2>
          <p className="mt-4 text-foreground/60 max-w-xl mx-auto">
            Klicke auf ein Projekt, um eine Live-Vorschau zu sehen und zwischen
            Desktop- und Mobilansicht zu wechseln.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <PortfolioCard
              key={project.id}
              project={project}
              index={i}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            data={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
