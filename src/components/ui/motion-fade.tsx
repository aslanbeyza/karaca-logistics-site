"use client";

import { motion, type Variants } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

type FadeProps = React.HTMLAttributes<HTMLDivElement> & {
  delay?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "header" | "article";
};

export function FadeUp({
  className,
  children,
  delay = 0,
  once = true,
  amount = 0.2,
  ...props
}: FadeProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={fadeUp}
      transition={{ delay }}
      className={cn(className)}
      {...(props as Record<string, unknown>)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  className,
  children,
  once = true,
  amount = 0.15,
}: {
  className?: string;
  children: React.ReactNode;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={stagger}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={fadeUp} className={cn(className)}>
      {children}
    </motion.div>
  );
}
