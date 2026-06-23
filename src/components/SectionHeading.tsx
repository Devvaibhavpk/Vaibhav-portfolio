"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  highlight: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  highlight,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">
        {title}{" "}
        <span className="gradient-text-gold">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
    </motion.div>
  );
}
