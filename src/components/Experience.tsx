"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, MapPin, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gold/[0.02] blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="EXPERIENCE &"
          highlight="EDUCATION"
          subtitle="My professional journey and leadership roles"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gold/40 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-5 md:left-1/2 w-4 h-4 rounded-full bg-gold border-4 border-background md:-translate-x-1/2 z-10 gold-glow" />

              {/* Card */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-40px)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="glass-card rounded-2xl p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gold/10 text-gold shrink-0">
                      {exp.type === "work" ? (
                        <Briefcase size={24} />
                      ) : (
                        <Users size={24} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-[family-name:var(--font-outfit)]">
                        {exp.role}
                      </h3>
                      <p className="text-gold font-medium text-sm mt-1">
                        {exp.organization}
                      </p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-5 text-text-muted text-sm">
                    {exp.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    )}
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.08 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-text-secondary text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
