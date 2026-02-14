"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Gehört die Domain mir?",
    answer:
      "Ja, selbstverständlich! Die Domain wird auf deinen Namen registriert und gehört zu 100% dir. Auch wenn unsere Zusammenarbeit endet, bleibt die Domain bei dir.",
  },
  {
    question: "Wie lange dauert die Erstellung meiner Website?",
    answer:
      "In der Regel ist deine Website innerhalb von 1–2 Wochen fertig. Das hängt natürlich vom Umfang ab. Eine einfache Onepage-Seite kann sogar in wenigen Tagen online sein.",
  },
  {
    question: "Was, wenn ich Textänderungen brauche?",
    answer:
      "Kleine Änderungen wie Textkorrekturen, neue Öffnungszeiten oder Telefonnummern sind im monatlichen Wartungspaket enthalten. Größere Umbauten besprechen wir individuell.",
  },
  {
    question: "Muss ich technisches Wissen mitbringen?",
    answer:
      "Nein, überhaupt nicht! Ich kümmere mich um alles Technische – von der Einrichtung über das Hosting bis zur Wartung. Du musst nur sagen, was du dir vorstellst.",
  },
  {
    question: "Kann ich die Website später erweitern?",
    answer:
      "Absolut! Deine Website ist flexibel und kann jederzeit um neue Seiten, Features wie ein Buchungssystem oder einen Blog erweitert werden. So wächst deine Website mit deinem Business.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-sm sm:text-base font-medium pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-foreground/40"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-foreground/60 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Häufige Fragen
          </h2>
          <p className="mt-4 text-foreground/60">
            Die wichtigsten Antworten auf einen Blick.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
