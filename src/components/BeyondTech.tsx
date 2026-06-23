"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { beyondTech } from "@/lib/data";

export default function BeyondTech() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.02] blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="BEYOND"
          highlight="TECHNOLOGY"
          subtitle="The passions that shape who I am"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beyondTech.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full text-center relative overflow-hidden">
                {/* Background emoji */}
                <div className="absolute top-4 right-4 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">
                  {item.emoji}
                </div>

                {/* Emoji */}
                <motion.div
                  className="text-5xl mb-5"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {item.emoji}
                </motion.div>

                <h3 className="text-xl font-bold text-white font-[family-name:var(--font-outfit)] mb-3 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>

                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="w-12 h-0.5 bg-gold/30 mx-auto mb-4" />

                <p className="text-text-muted text-sm italic leading-relaxed">
                  &ldquo;{item.lessons}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
