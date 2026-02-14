"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator as CalcIcon, Plus, Minus } from "lucide-react";

const pageOptions = [
  { label: "1 Seite (Onepager)", value: 1, setupPrice: 499, monthly: 20 },
  { label: "Bis zu 5 Seiten", value: 5, setupPrice: 999, monthly: 35 },
  { label: "5+ Seiten (individuell)", value: 10, setupPrice: 1999, monthly: 50 },
];

const extras = [
  { id: "booking", label: "Buchungssystem", price: 200, monthly: 5 },
  { id: "whatsapp", label: "WhatsApp Integration", price: 50, monthly: 0 },
  { id: "multilang", label: "Mehrsprachigkeit", price: 300, monthly: 5 },
  { id: "seo", label: "SEO Optimierung", price: 150, monthly: 10 },
  { id: "blog", label: "Blog / News-Bereich", price: 250, monthly: 5 },
  { id: "shop", label: "Online-Shop Anbindung", price: 400, monthly: 10 },
];

export default function Calculator() {
  const [selectedPages, setSelectedPages] = useState(0);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const { setupTotal, monthlyTotal } = useMemo(() => {
    const base = pageOptions[selectedPages];
    const extraSetup = extras
      .filter((e) => selectedExtras.includes(e.id))
      .reduce((sum, e) => sum + e.price, 0);
    const extraMonthly = extras
      .filter((e) => selectedExtras.includes(e.id))
      .reduce((sum, e) => sum + e.monthly, 0);

    return {
      setupTotal: base.setupPrice + extraSetup,
      monthlyTotal: base.monthly + extraMonthly,
    };
  }, [selectedPages, selectedExtras]);

  return (
    <section
      id="calculator"
      className="py-24 sm:py-32 bg-gray-50/50 dark:bg-gray-900/30"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-4">
            <CalcIcon size={12} className="inline mr-1 -mt-0.5" />
            Preisrechner
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Was kostet deine Website?
          </h2>
          <p className="mt-4 text-foreground/60">
            Stelle dir dein Paket zusammen und erhalte sofort eine Schätzung.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 sm:p-8"
        >
          {/* Page selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-3">
              Anzahl der Seiten
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {pageOptions.map((option, i) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedPages(i)}
                  className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                    selectedPages === i
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-gray-200 dark:border-gray-700 hover:border-primary/40"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Extras */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-3">
              Zusätzliche Features
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {extras.map((extra) => {
                const isSelected = selectedExtras.includes(extra.id);
                return (
                  <button
                    key={extra.id}
                    onClick={() => toggleExtra(extra.id)}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm transition-all ${
                      isSelected
                        ? "border-primary bg-primary/10"
                        : "border-gray-200 dark:border-gray-700 hover:border-primary/40"
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        isSelected ? "text-primary" : ""
                      }`}
                    >
                      {extra.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-foreground/50">
                        +{extra.price}€
                      </span>
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-md transition-colors ${
                          isSelected
                            ? "bg-primary text-white"
                            : "bg-gray-100 dark:bg-gray-800"
                        }`}
                      >
                        {isSelected ? (
                          <Minus size={12} />
                        ) : (
                          <Plus size={12} />
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Result */}
          <div className="rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 p-6">
            <p className="text-sm text-foreground/50 mb-2">
              Geschätzte Kosten
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <motion.p
                  key={setupTotal}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl sm:text-4xl font-bold"
                >
                  {setupTotal.toLocaleString("de-DE")}€
                  <span className="text-base font-normal text-foreground/50 ml-2">
                    einmalig
                  </span>
                </motion.p>
                <motion.p
                  key={monthlyTotal}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg text-foreground/60 mt-1"
                >
                  + {monthlyTotal}€
                  <span className="text-sm text-foreground/40 ml-1">
                    /Monat (Hosting & Wartung)
                  </span>
                </motion.p>
              </div>
              <a
                href="#contact"
                className="shrink-0 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors text-center"
              >
                Jetzt anfragen
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
