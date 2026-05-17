"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function WhatsAppFloating() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6, type: "spring", stiffness: 200 }}
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp'tan yaz"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-4 pr-5 text-sm font-semibold text-white shadow-[0_20px_50px_-15px_rgba(37,211,102,0.6)] transition-all hover:scale-[1.03] hover:bg-[#1ebc59] sm:bottom-7 sm:right-7"
    >
      <span className="relative grid size-7 place-items-center rounded-full bg-white/15">
        <MessageCircle className="size-4" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-white/20" />
      </span>
      <span className="hidden xs:inline">WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </motion.a>
  );
}
