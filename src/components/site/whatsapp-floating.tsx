"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
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
      className="group fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 hover:bg-[#1ebc59] sm:bottom-7 sm:right-7 sm:size-16"
    >
      <WhatsAppIcon className="size-7 sm:size-8" />
      <span className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
    </motion.a>
  );
}
