"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useInView, type Variant } from "framer-motion";

// ============================================================
// SPECTRUM8 — Premium Scroll Reveal System
// Museum-grade reveal animations with stagger support
// ============================================================

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface PremiumRevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  /** Use scale animation */
  scale?: boolean;
  /** Stagger children by this many ms */
  stagger?: number;
}

const directionMap: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

/** Premium single-element reveal */
export function PremiumReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  scale = false,
}: PremiumRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const { x, y } = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x,
        y,
        scale: scale ? 0.95 : 1,
        filter: "blur(4px)",
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
          : undefined
      }
      transition={{
        duration,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Premium stagger container — reveals children with stagger */
export function PremiumStagger({
  children,
  stagger = 80,
  className,
  delay = 0,
}: PremiumRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger / 1000,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Stagger child item */
export function PremiumStaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
}) {
  const { x, y } = directionMap[direction];

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x,
          y,
          filter: "blur(3px)",
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================================
// PREMIUM SECTION DIVIDER
// ============================================================

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={`relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 ${className || ""}`}>
      <div className="section-divider" />
    </div>
  );
}

// ============================================================
// PREMIUM AURORA BACKGROUND
// ============================================================

export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className || ""}`}>
      <div className="aurora-blob absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-400/8" />
      <div className="aurora-blob-2 absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-cyan-400/6" />
      <div className="aurora-blob-3 absolute top-1/3 left-1/2 w-[400px] h-[400px] rounded-full bg-blue-300/5" />
    </div>
  );
}

// ============================================================
// PREMIUM FLOATING ORB DECORATION
// ============================================================

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="floating-orb absolute top-20 right-[10%] w-64 h-64 rounded-full bg-blue-100/30 blur-[80px]" />
      <div className="floating-orb-2 absolute bottom-20 left-[15%] w-48 h-48 rounded-full bg-cyan-100/25 blur-[60px]" />
      {/* Sparkle dots */}
      <div className="animate-sparkle absolute top-[15%] right-[20%] w-1.5 h-1.5 rounded-full bg-blue-400/40" />
      <div className="animate-sparkle absolute top-[40%] left-[25%] w-1 h-1 rounded-full bg-cyan-400/30" style={{ animationDelay: "0.7s" }} />
      <div className="animate-sparkle absolute bottom-[30%] right-[35%] w-1.5 h-1.5 rounded-full bg-blue-300/35" style={{ animationDelay: "1.4s" }} />
    </div>
  );
}
