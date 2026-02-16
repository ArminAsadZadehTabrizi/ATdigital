"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send, Instagram } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch {
      // Fallback: allow native form submission
      form.submit();
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-gray-50/50 dark:bg-gray-900/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="motion-desktop text-center mb-16"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-4">
            Kontakt
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Lass uns sprechen
          </h2>
          <p className="mt-4 text-foreground/60 max-w-xl mx-auto">
            Der einfachste Weg mich zu erreichen ist jederzeit über WhatsApp.
            Oder nutze das Kontaktformular – ich melde mich schnellstmöglich.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="motion-desktop space-y-6"
          >
            <a
              href="https://wa.me/491776124793"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-5 hover:bg-[#25D366]/10 transition-colors group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white">
                <MessageCircle size={22} />
              </div>
              <div>
                <p className="font-semibold group-hover:text-[#25D366] transition-colors">
                  WhatsApp
                </p>
                <p className="text-sm text-foreground/50">
                  Am schnellsten erreichbar – jederzeit schreiben!
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail size={22} />
              </div>
              <div>
                <p className="font-semibold">E-Mail</p>
                <a
                  href="mailto:Armin.Tabrizi@atdigital-design.de"
                  className="text-sm text-foreground/50 hover:text-primary transition-colors"
                >
                  Armin.Tabrizi@atdigital-design.de
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone size={22} />
              </div>
              <div>
                <p className="font-semibold">Telefon</p>
                <a
                  href="tel:+491776124793"
                  className="text-sm text-foreground/50 hover:text-primary transition-colors"
                >
                  0177 612 4793
                </a>
              </div>
            </div>

            <a
              href="https://instagram.com/at_digital_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-[#E1306C]/30 bg-[#E1306C]/5 p-5 hover:bg-[#E1306C]/10 transition-colors group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white">
                <Instagram size={22} />
              </div>
              <div>
                <p className="font-semibold group-hover:text-[#E1306C] transition-colors">
                  Instagram
                </p>
                <p className="text-sm text-foreground/50">
                  @at_digital_
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin size={22} />
              </div>
              <div>
                <p className="font-semibold">Standort</p>
                <p className="text-sm text-foreground/50">
                  Düsseldorf, NRW, Deutschland
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="motion-desktop"
          >
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 sm:p-8"
            >
              <input
                type="hidden"
                name="access_key"
                value="0c504bc4-00e1-4c76-9818-8acb6063a505"
              />

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Dein Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="deine@email.de"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Erzähl mir von deinem Projekt..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  {submitted ? (
                    "Nachricht gesendet! ✓"
                  ) : (
                    <>
                      <Send size={16} />
                      Nachricht senden
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
