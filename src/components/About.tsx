"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { aboutData } from "@/lib/data";

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const step = duration / numericValue;
      const timer = setInterval(() => {
        start++;
        setCount(start);
        if (start >= numericValue) clearInterval(timer);
      }, step);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-bold gradient-text-gold font-[family-name:var(--font-outfit)]">
        {isInView ? count : 0}
        {suffix}
      </div>
      <div className="text-text-secondary text-sm mt-1">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="ABOUT"
          highlight="ME"
          subtitle="Get to know me better"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Photo & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Photo */}
            <div className="relative mx-auto lg:mx-0 w-fit">
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden border border-gold/20">
                <Image
                  src="/vaibhav.jpg"
                  alt="Vaibhav P K"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 256px, 288px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              {/* Gold corner accent */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gold/50 rounded-tl-xl" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gold/50 rounded-br-xl" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {aboutData.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-4"
                >
                  <AnimatedCounter value={stat.value} label={stat.label} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Bio & Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {aboutData.bio.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-text-secondary leading-relaxed text-base sm:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Personal Info Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-gold mb-4 font-[family-name:var(--font-outfit)]">
                Personal Info
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutData.details.map((detail) => (
                  <div key={detail.label} className="flex gap-3">
                    <span className="text-text-muted text-sm min-w-[80px]">
                      {detail.label}:
                    </span>
                    <span className="text-white text-sm font-medium">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
