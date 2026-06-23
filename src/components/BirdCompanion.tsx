"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface BirdState {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  facingRight: boolean;
  isScrolling: boolean;
  rotation: number;
}

export default function BirdCompanion() {
  const birdRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<BirdState>({
    x: typeof window !== "undefined" ? window.innerWidth - 100 : 800,
    y: 200,
    targetX: typeof window !== "undefined" ? window.innerWidth - 100 : 800,
    targetY: 200,
    facingRight: true,
    isScrolling: false,
    rotation: 0,
  });
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationRef = useRef<number>(0);
  const lastScrollYRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  // Generate a new random roaming target near viewport edges
  const generateRoamTarget = useCallback(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const padding = 80;
    const edgeZone = 200;

    // Prefer edges of the viewport
    const side = Math.floor(Math.random() * 4);
    let x: number, y: number;

    switch (side) {
      case 0: // Right edge
        x = w - padding - Math.random() * edgeZone;
        y = padding + Math.random() * (h - padding * 2);
        break;
      case 1: // Left edge
        x = padding + Math.random() * edgeZone;
        y = padding + Math.random() * (h - padding * 2);
        break;
      case 2: // Top edge
        x = padding + Math.random() * (w - padding * 2);
        y = padding + Math.random() * edgeZone;
        break;
      default: // Bottom edge
        x = padding + Math.random() * (w - padding * 2);
        y = h - padding - Math.random() * edgeZone;
        break;
    }

    return { x, y };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Delay appearance
    const showTimer = setTimeout(() => setIsVisible(true), 2000);

    const state = stateRef.current;
    let roamInterval: ReturnType<typeof setInterval>;

    // Handle scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollYRef.current;
      lastScrollYRef.current = scrollY;

      state.isScrolling = true;

      // Bird moves in scroll direction
      const w = window.innerWidth;
      state.targetX = w - 80 + Math.sin(scrollY * 0.01) * 30;
      state.targetY = Math.min(
        Math.max(100, window.innerHeight * 0.3 - scrollDelta * 2),
        window.innerHeight - 100
      );
      state.facingRight = scrollDelta < 0;
      state.rotation = Math.max(-15, Math.min(15, -scrollDelta * 0.5));

      // Reset idle timer
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        state.isScrolling = false;
        state.rotation = 0;
      }, 2000);
    };

    // Roaming behavior when idle
    roamInterval = setInterval(() => {
      if (!state.isScrolling) {
        const target = generateRoamTarget();
        state.targetX = target.x;
        state.targetY = target.y;
        state.facingRight = target.x > state.x;
      }
    }, 3000);

    // Animation loop
    const animate = () => {
      const bird = birdRef.current;
      if (!bird) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Smooth interpolation
      const easing = state.isScrolling ? 0.06 : 0.02;
      state.x += (state.targetX - state.x) * easing;
      state.y += (state.targetY - state.y) * easing;

      // Bobbing effect
      const bob = Math.sin(Date.now() * 0.003) * 5;

      // Apply transform
      const scaleX = state.facingRight ? 1 : -1;
      const currentRotation = state.rotation * (state.isScrolling ? 1 : 0);
      bird.style.transform = `translate3d(${state.x}px, ${
        state.y + bob
      }px, 0) scaleX(${scaleX}) rotate(${currentRotation}deg)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animate();

    return () => {
      clearTimeout(showTimer);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationRef.current);
      clearInterval(roamInterval);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [generateRoamTarget]);

  if (!isVisible) return null;

  return (
    <div
      ref={birdRef}
      className="bird-companion"
      style={{
        width: 50,
        height: 50,
        opacity: 0.85,
        willChange: "transform",
      }}
      aria-hidden="true"
    >
      <Image
        src="/bird_transparent.png"
        alt=""
        width={50}
        height={50}
        className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(245,197,24,0.4)]"
        priority
      />
    </div>
  );
}
