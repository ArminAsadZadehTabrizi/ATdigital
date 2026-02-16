"use client";

import { motion } from "framer-motion";
import { GraduationCap, Heart, Code2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-gray-50/50 dark:bg-gray-900/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="motion-desktop flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="h-72 w-72 sm:h-80 sm:w-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                {/* Placeholder avatar */}
                <div className="h-64 w-64 sm:h-72 sm:w-72 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary/40">
                    AT
                  </span>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-primary/10 -z-10" />
              <div className="absolute -top-4 -left-4 h-16 w-16 rounded-xl bg-accent/10 -z-10" />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="motion-desktop"
          >
            <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-4">
              Über mich
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Hey, ich bin Armin Tabrizi
            </h2>
            <p className="text-foreground/60 leading-relaxed mb-6">
              Als Masterstudent der Informatik an der{" "}
              <span className="font-medium text-foreground/80">
                Heinrich-Heine-Universität Düsseldorf
              </span>{" "}
              verbinde ich akademisches Wissen mit praktischer Erfahrung in der
              Webentwicklung. Meine Mission: Lokale Unternehmen mit
              bezahlbaren, hochwertigen Websites unterstützen – und dabei selbst
              wertvolle Praxiserfahrung sammeln.
            </p>
            <p className="text-foreground/60 leading-relaxed mb-8 italic border-l-2 border-primary/30 pl-4">
              &ldquo;Lass uns einen fairen Preis finden, der beide Seiten
              glücklich macht.&rdquo;
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 rounded-xl bg-white dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-800">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">Master Informatik</p>
                  <p className="text-xs text-foreground/50">HHU Düsseldorf</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-800">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Code2 size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">Full-Stack</p>
                  <p className="text-xs text-foreground/50">Next.js, React</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white dark:bg-gray-800/50 p-4 border border-gray-200 dark:border-gray-800">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Heart size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">Faire Preise</p>
                  <p className="text-xs text-foreground/50">Win-Win</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
