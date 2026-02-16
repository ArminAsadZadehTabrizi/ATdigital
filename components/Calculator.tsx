"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator as CalcIcon, Check } from "lucide-react";

const basePackages = [
  { label: "One-Pager", price: 399 },
  { label: "Standard (bis 5 Seiten)", price: 799 },
  { label: "King-Paket (Komplett) - 999 €", price: 999 },
];

interface Addon {
  id: string;
  label: string;
  price: number;
  includedFrom: number;
}

const addons: Addon[] = [
  { id: "whatsapp", label: "WhatsApp Button", price: 50, includedFrom: 799 },
  { id: "booking", label: "Buchungssystem", price: 100, includedFrom: 799 },
  { id: "multilang", label: "Mehrsprachigkeit", price: 50, includedFrom: 799 },
  { id: "seo", label: "Lokales SEO Setup", price: 150, includedFrom: 999 },
  { id: "tracking", label: "Premium Tracking (Analytics)", price: 100, includedFrom: 999 },
  { id: "blog", label: "Blog / News Bereich", price: 200, includedFrom: 999 },
];

export default function Calculator() {
  const [selectedBase, setSelectedBase] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const basePrice = basePackages[selectedBase].price;

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const setupTotal = useMemo(() => {
    let total = basePrice;
    for (const addon of addons) {
      if (selectedAddons.includes(addon.id)) {
        if (basePrice < addon.includedFrom) {
          total += addon.price;
        }
      }
    }
    return total;
  }, [selectedBase, selectedAddons, basePrice]);

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
          {/* Base package selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-3">
              Basis-Paket wählen
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {basePackages.map((pkg, i) => (
                <button
                  key={pkg.label}
                  onClick={() => setSelectedBase(i)}
                  className={`rounded-xl border px-4 py-3 text-left transition-all ${
                    selectedBase === i
                      ? "border-primary bg-primary/10 ring-1 ring-primary"
                      : "border-gray-200 dark:border-gray-700 hover:border-primary/40"
                  }`}
                >
                  <span className={`block text-sm font-medium ${selectedBase === i ? "text-primary" : ""}`}>
                    {pkg.label}
                  </span>
                  <span className={`block text-xs mt-0.5 ${selectedBase === i ? "text-primary/70" : "text-foreground/50"}`}>
                    {pkg.price} €
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Add-on features */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-3">
              Zusätzliche Features
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {addons.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                const isIncluded = basePrice >= addon.includedFrom;
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm transition-all ${
                      isIncluded
                        ? "border-green-400/40 bg-green-50 dark:bg-green-900/10 cursor-default"
                        : isSelected
                        ? "border-primary bg-primary/10"
                        : "border-gray-200 dark:border-gray-700 hover:border-primary/40"
                    }`}
                    disabled={isIncluded}
                  >
                    <span
                      className={`font-medium ${
                        isIncluded
                          ? "text-green-700 dark:text-green-400"
                          : isSelected
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      {addon.label}
                    </span>
                    <div className="flex items-center gap-2">
                      {isIncluded ? (
                        <span className="flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
                          <Check size={14} />
                          Inklusive
                        </span>
                      ) : (
                        <>
                          <span className="text-xs text-foreground/50">
                            +{addon.price} €
                          </span>
                          <div
                            className={`flex h-5 w-5 items-center justify-center rounded-md transition-colors ${
                              isSelected
                                ? "bg-primary text-white"
                                : "bg-gray-100 dark:bg-gray-800"
                            }`}
                          >
                            {isSelected && <Check size={12} />}
                          </div>
                        </>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Result */}
          <div className="rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 p-6">
            <p className="text-sm text-foreground/50 mb-2">
              Geschätzte Einrichtungskosten
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <motion.p
                  key={setupTotal}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl sm:text-4xl font-bold"
                >
                  {setupTotal.toLocaleString("de-DE")} €
                  <span className="text-base font-normal text-foreground/50 ml-2">
                    einmalig
                  </span>
                </motion.p>
                <p className="text-sm text-foreground/50 mt-2">
                  Zzgl. 29 € – 50 € / Monat (Hosting, Wartung &amp; Updates im Rundum-Sorglos-Paket)
                </p>
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
