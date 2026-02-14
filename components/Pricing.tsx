"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap, Crown } from "lucide-react";

const packages = [
  {
    name: "Starter",
    icon: <Zap size={20} />,
    price: "499",
    monthly: "20",
    description: "Perfekt für den einfachen Einstieg ins Web.",
    features: [
      "1-Seiten Website (Onepager)",
      "Responsives Design",
      "Kontaktformular",
      "Google Maps Integration",
      "SSL-Zertifikat",
      "1 Korrektur-Runde",
    ],
    highlighted: false,
  },
  {
    name: "Profi",
    icon: <Star size={20} />,
    price: "999",
    monthly: "35",
    description: "Die beliebteste Wahl für wachsende Unternehmen.",
    features: [
      "Bis zu 5 Seiten",
      "Premium Design & Animationen",
      "SEO Grundoptimierung",
      "WhatsApp Integration",
      "Cookie-Banner (DSGVO)",
      "3 Korrektur-Runden",
      "Social Media Einbindung",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    icon: <Crown size={20} />,
    price: "1.999",
    monthly: "50",
    description: "Die Komplettlösung für maximale Sichtbarkeit.",
    features: [
      "Unbegrenzte Seiten",
      "Individuelles Design",
      "Buchungssystem / Shop",
      "Mehrsprachigkeit",
      "Blog / News-Bereich",
      "Google My Business Setup",
      "Laufende SEO Betreuung",
      "Priority Support",
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
            20 – 50 €<span className="text-base font-normal text-foreground/50">/Monat</span>
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
                  Beliebteste Wahl
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
                <span className="text-4xl font-bold">{pkg.price}€</span>
                <span className="text-foreground/50 ml-1">einmalig</span>
                <p className="text-sm text-foreground/50 mt-1">
                  + {pkg.monthly}€/Monat Wartung
                </p>
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
      </div>
    </section>
  );
}
