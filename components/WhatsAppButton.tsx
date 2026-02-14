"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/4917XXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-pulse fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] transition-colors"
      aria-label="WhatsApp kontaktieren"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  );
}
