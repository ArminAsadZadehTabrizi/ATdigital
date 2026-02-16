"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">
              <span className="text-primary">AT</span> Digital
            </span>
            <span className="text-sm text-foreground/40">
              © {new Date().getFullYear()} Alle Rechte vorbehalten.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="text-sm text-foreground/50 hover:text-foreground transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-foreground/50 hover:text-foreground transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
