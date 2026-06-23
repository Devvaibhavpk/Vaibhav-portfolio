"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/[0.02] blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="FEATURED"
          highlight="PROJECTS"
          subtitle="A showcase of what I've built across AI, Blockchain, IoT, and more"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`group ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`glass-card rounded-2xl p-8 h-full relative overflow-hidden ${
                    index === 0 ? "md:grid md:grid-cols-2 md:gap-8" : ""
                  }`}
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                          <Icon size={24} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-outfit)]">
                            {project.title}
                          </h3>
                          <p className="text-gold text-sm font-medium">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="text-text-muted hover:text-gold transition-colors cursor-pointer"
                      >
                        <ExternalLink size={20} />
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed mb-6 text-sm sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Right side for featured project, bottom for others */}
                  <div className="relative z-10">
                    {/* Technologies */}
                    <div className="mb-5">
                      <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="skill-badge text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                        Highlights
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 text-xs font-medium text-gold bg-gold/10 rounded-full border border-gold/20"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
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
