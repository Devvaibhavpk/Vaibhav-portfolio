"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import BeyondTech from "@/components/BeyondTech";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Dynamic imports for heavy animation components (no SSR)
const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false }
);
const BirdCompanion = dynamic(() => import("@/components/BirdCompanion"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* Background Effects */}
      <ParticleBackground />
      <BirdCompanion />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />

        <div className="section-divider" />
        <About />

        <div className="section-divider" />
        <Experience />

        <div className="section-divider" />
        <Projects />

        <div className="section-divider" />
        <Skills />

        <div className="section-divider" />
        <Achievements />

        <div className="section-divider" />
        <BeyondTech />

        <div className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
