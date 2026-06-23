"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
import Image from "next/image";
import { heroData } from "@/lib/data";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typeRole = useCallback(() => {
    const role = heroData.roles[currentRole];
    if (!isDeleting) {
      if (displayText.length < role.length) {
        setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1));
        }, 80);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % heroData.roles.length);
      }
    }
  }, [currentRole, displayText, isDeleting]);

  useEffect(() => {
    const timeout = setTimeout(typeRole, 0);
    return () => clearTimeout(timeout);
  }, [typeRole]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-gold/[0.05] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-gold border border-gold/30 rounded-full bg-gold-dim">
                Available for Opportunities
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-lg mb-2 tracking-wide"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-outfit)] tracking-tight mb-4"
            >
              <span className="text-white">Vaibhav</span>{" "}
              <span className="gradient-text-gold">P K</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl text-text-secondary mb-6 h-10 flex items-center justify-center lg:justify-start"
            >
              <span className="text-gold font-medium">{displayText}</span>
              <span className="typing-cursor" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-base sm:text-lg max-w-xl leading-relaxed mb-8 mx-auto lg:mx-0"
            >
              {heroData.introduction}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3.5 bg-gold text-background font-semibold rounded-full hover:bg-gold-light transition-all duration-300 gold-glow flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowDown size={18} />
                View Projects
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border border-gold/40 text-gold font-semibold rounded-full hover:bg-gold/10 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Resume
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3.5 border border-white/10 text-white font-semibold rounded-full hover:border-white/30 hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} />
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/30 via-gold/10 to-transparent blur-2xl scale-110 animate-pulse-gold" />

              {/* Photo container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-[3px] border-gold/40 gold-glow">
                <Image
                  src="/vaibhav.jpg"
                  alt="Vaibhav P K"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                />
              </div>

              {/* Decorative dots */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gold/20 border border-gold/40"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-2 -left-6 w-5 h-5 rounded-full bg-gold/15 border border-gold/30"
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-text-muted"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
