"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award, Clock4, ShieldCheck, Star, ThumbsUp, Truck } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Sigortalı taşıma" },
  { icon: Clock4, label: "Aynı gün ekspertiz" },
  { icon: Truck, label: "Modern araç filosu" },
  { icon: Award, label: "14 yıllık tecrübe" },
  { icon: ThumbsUp, label: "Şeffaf fiyat garantisi" },
  { icon: Star, label: "4.9/5 müşteri memnuniyeti" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-secondary/40 py-8">
      <div className="container">
        <div className="mask-fade-x overflow-hidden">
          <motion.div
            className="flex w-max items-center gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...items, ...items].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.label}-${i}`}
                  className="flex shrink-0 items-center gap-2.5 text-sm font-medium text-muted-foreground"
                >
                  <Icon className="size-4 text-brand-700" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
