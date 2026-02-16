"use client";

import { motion } from "framer-motion";
import { Check, Zap, Star, Crown, ShoppingCart } from "lucide-react";

const packages = [
  {
    name: "Starter-Paket",
    icon: <Zap size={20} />,
    price: "399",
    description: "Perfekt für den einfachen Einstieg ins Web.",
    features: [
      "One-Pager Website",
      "Modernes, responsives Design",
      "Kontaktformular",
      "Basis SEO (Technisch)",
    ],
    highlighted: false,
  },
  {
    name: "Profi-Paket",
    icon: <Star size={20} />,
    price: "799",
    description: "Die beliebteste Wahl für wachsende Unternehmen.",
    features: [
      "Bis zu 5 Unterseiten",
      "Alles aus Starter",
      "WhatsApp & Buchungssystem",
      "Mehrsprachigkeit inklusive",
    ],
    highlighted: true,
  },
  {
    name: "King-Paket",
    icon: <Crown size={20} />,
    price: "999",
    description: "Die Komplettlösung für maximale Sichtbarkeit.",
    features: [
      "Unbegrenzte Seiten (Fair-Use)",
      "Alles aus Profi",
      "Lokales SEO Setup (Google Maps)",
      "Premium Tracking (Analytics & Pixel)",
      "Blog / News-Bereich",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-4">
            Preise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Transparente Preise
          </h2>
          <p className="mt-4 text-foreground/60 max-w-xl mx-auto">
            Einmalige Einrichtung + monatliches All-inclusive Wartungspaket mit
            Hosting, Updates und Support.
          </p>
        </motion.div>

        {/* Monthly care package highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center"
        >
          <p className="text-sm font-semibold text-primary mb-1">
            All-inclusive Monatliches Wartungspaket
          </p>
          <p className="text-2xl font-bold">
            29 – 50 €<span className="text-base font-normal text-foreground/50">/Monat</span>
          </p>
          <p className="text-sm text-foreground/60 mt-2">
            Hosting, SSL, regelmäßige Backups, Updates, technischer Support &
            kleine Textänderungen inklusive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-6 sm:p-8 ${
                pkg.highlighted
                  ? "border-primary bg-primary/5 dark:bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50"
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                  Beliebtestes
                </span>
              )}

              <div
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl mb-4 ${
                  pkg.highlighted
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-foreground/60"
                }`}
              >
                {pkg.icon}
              </div>

              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <p className="text-sm text-foreground/50 mt-1 mb-4">
                {pkg.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{pkg.price} €</span>
                <span className="text-foreground/50 ml-1">einmalig</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm"
                  >
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        pkg.highlighted ? "text-primary" : "text-green-500"
                      }`}
                    />
                    <span className="text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full rounded-xl py-3 text-center text-sm font-semibold transition-colors ${
                  pkg.highlighted
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-gray-100 dark:bg-gray-800 text-foreground hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Jetzt anfragen
              </a>
            </motion.div>
          ))}
        </div>

        {/* E-Commerce Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 mx-auto max-w-3xl rounded-2xl border border-amber-400/30 bg-amber-50 dark:bg-amber-900/10 p-6 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShoppingCart size={20} className="text-amber-600 dark:text-amber-400" />
            <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">
              E-Commerce / Online-Shop
            </p>
          </div>
          <p className="text-sm text-amber-800 dark:text-amber-300/80">
            E-Commerce / Online-Shop System: Preise auf Anfrage nach individuellem Aufwand.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
