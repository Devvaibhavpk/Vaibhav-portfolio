"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="MY"
          highlight="ACHIEVEMENTS"
          subtitle="Milestones and recognitions along the way"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-6 h-full gradient-border">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-background transition-all duration-300 shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-[family-name:var(--font-outfit)] mb-1.5 group-hover:text-gold transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
