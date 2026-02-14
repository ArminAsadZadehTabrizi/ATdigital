"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  industry: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    id: "fahrschule",
    title: "Fahrschule Express",
    industry: "Fahrschule",
    icon: <Car size={28} />,
    color: "from-blue-500 to-blue-600",
    description:
      "Moderne Website für eine Fahrschule mit Online-Anmeldeformular, Kursübersicht und Kontaktmöglichkeiten. Optimiert für mobile Nutzer, die unterwegs nach einer Fahrschule suchen.",
    url: "https://example.com/fahrschule",
  },
  {
    id: "tattoo",
    title: "Ink & Art Studio",
    industry: "Tattoo Studio",
    icon: <Paintbrush size={28} />,
    color: "from-purple-500 to-purple-600",
    description:
      "Stilvolle Portfolio-Website für ein Tattoo-Studio mit Galerie, Artist-Profilen und einem Buchungssystem für Termine. Dunkles, anspruchsvolles Design.",
    url: "https://example.com/tattoo",
  },
  {
    id: "barber",
    title: "Gentleman's Cut",
    industry: "Barbershop",
    icon: <Scissors size={28} />,
    color: "from-amber-500 to-amber-600",
    description:
      "Elegante Website für einen Barbershop mit Online-Terminbuchung, Preisliste und Team-Vorstellung. Vintage-Ästhetik trifft auf moderne Funktionalität.",
    url: "https://example.com/barber",
  },
  {
    id: "pizzeria",
    title: "Bella Napoli",
    industry: "Pizzeria",
    icon: <Pizza size={28} />,
    color: "from-red-500 to-red-600",
    description:
      "Appetitliche Website für eine Pizzeria mit digitaler Speisekarte, Bestellmöglichkeit und Standort-Integration. Perfekt für Laufkundschaft und Stammgäste.",
    url: "https://example.com/pizzeria",
  },
  {
    id: "handwerker",
    title: "Meister Schmidt",
    industry: "Handwerker",
    icon: <Wrench size={28} />,
    color: "from-orange-500 to-orange-600",
    description:
      "Professionelle Website für einen Handwerksbetrieb mit Leistungsübersicht, Referenzen und Anfrage-Formular. Vertrauenswürdig und seriös.",
    url: "https://example.com/handwerker",
  },
  {
    id: "solar",
    title: "SunPower Solutions",
    industry: "Solar",
    icon: <Sun size={28} />,
    color: "from-yellow-500 to-green-500",
    description:
      "Informative Website für ein Solarunternehmen mit Produktübersicht, Kostenrechner und Referenzprojekten. Nachhaltig und zukunftsweisend.",
    url: "https://example.com/solar",
  },
  {
    id: "sportverein",
    title: "FC Düsseldorf 09",
    industry: "Sportverein",
    icon: <Trophy size={28} />,
    color: "from-green-500 to-emerald-600",
    description:
      "Dynamische Vereins-Website mit Spielplan, Ergebnissen, News und Mitgliedschafts-Informationen. Teamgeist digital erlebbar.",
    url: "https://example.com/sportverein",
  },
  {
    id: "kneipe",
    title: "Zum Goldenen Fass",
    industry: "Kneipe / Bar",
    icon: <Beer size={28} />,
    color: "from-teal-500 to-cyan-600",
    description:
      "Gemütliche Website für eine Kneipe mit Getränkekarte, Events-Kalender und Reservierungsmöglichkeit. Einladend und stimmungsvoll.",
    url: "https://example.com/kneipe",
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

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
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-gray-900 shadow-2xl"
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
          {/* Left: iframe preview */}
          <div className="flex-1 p-6">
            {/* Device toggle */}
            <div className="mb-4 flex items-center justify-center gap-2">
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

            {/* iframe container */}
            <div className="flex justify-center">
              <div
                className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white transition-all duration-500 ease-in-out"
                style={{
                  width: viewMode === "desktop" ? "100%" : "375px",
                  height: "500px",
                }}
              >
                <div className="flex h-8 items-center gap-1.5 bg-gray-100 dark:bg-gray-800 px-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs text-foreground/40 truncate">
                    {project.url}
                  </span>
                </div>
                <iframe
                  src={project.url}
                  title={project.title}
                  className="h-[calc(100%-2rem)] w-full"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            </div>
          </div>

          {/* Right: info */}
          <div className="w-full lg:w-80 p-6 lg:border-l border-gray-200 dark:border-gray-800">
            <div
              className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.color} text-white mb-4`}
            >
              {project.icon}
            </div>
            <span className="block text-xs font-medium text-foreground/50 uppercase tracking-wider mb-1">
              {project.industry}
            </span>
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="text-sm text-foreground/60 leading-relaxed mb-6">
              {project.description}
            </p>
            <a
              href={project.url}
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

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);

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
            Unsere Demo-Projekte
          </h2>
          <p className="mt-4 text-foreground/60 max-w-xl mx-auto">
            Klicke auf ein Projekt, um eine Live-Vorschau zu sehen und zwischen
            Desktop- und Mobilansicht zu wechseln.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelected(project)}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 text-left transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.color} text-white mb-4 transition-transform group-hover:scale-110`}
              >
                {project.icon}
              </div>
              <h3 className="font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-foreground/50">{project.industry}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
