"use client";

import { motion } from "framer-motion";
import { VIDEO_HERO } from "@/data/video-hero";

// ============================================================
// VIDEO HERO — Premium Spectrum8 Edition
// Aurora blobs · Word-by-word title reveal · Glow-ring badge
// Premium scroll indicator · Radial gradients · Shimmer line
// ============================================================

/** Split a string into words, preserving spaces as separate items */
function splitWords(text: string): string[] {
  return text.split(" ");
}

/** Container variants for staggered word reveal */
const titleContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.6,
    },
  },
};

/** Each word's reveal animation */
const wordVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: -40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

/** Subtitle reveal — slides up with blur dissolve */
const subtitleVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: 1.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

/** Badge reveal */
const badgeVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function VideoHeroSlider() {
  const embedUrl = `https://www.youtube.com/embed/${VIDEO_HERO.videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&playlist=${VIDEO_HERO.videoId}&loop=1&playsinline=1`;
  const line1Words = splitWords(VIDEO_HERO.titleLine1);
  const line2Words = splitWords(VIDEO_HERO.titleLine2);

  return (
    <section className="relative w-full h-[100vh] min-h-[500px] sm:min-h-[600px] overflow-hidden bg-black">
      {/* ─── YouTube iframe — pure CSS cover ─── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <iframe
          src={embedUrl}
          title="NusaParadise Video"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[100vh] min-w-full min-h-full border-0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          playsInline
        />
      </div>

      {/* ─── Aurora blobs — flowing color mesh behind overlays ─── */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Primary aurora — blue */}
        <div
          className="aurora-blob absolute -top-32 -left-32 w-[60vw] h-[60vh] rounded-full bg-blue-400/10"
          aria-hidden
        />
        {/* Secondary aurora — cyan */}
        <div
          className="aurora-blob-2 absolute top-1/3 right-[-10%] w-[50vw] h-[50vh] rounded-full bg-cyan-400/8"
          aria-hidden
        />
        {/* Tertiary aurora — blue-light */}
        <div
          className="aurora-blob-3 absolute bottom-[-5%] left-[20%] w-[55vw] h-[45vh] rounded-full bg-blue-300/6"
          aria-hidden
        />
      </div>

      {/* ─── Vignette + radial gradient overlays ─── */}
      {/* Radial gradient from center — premium depth */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 30%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.45) 100%)",
        }}
      />
      {/* Classic vignette */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 via-black/25 to-transparent z-20 pointer-events-none" />
      {/* Bottom gradient — stronger for text legibility */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20 pointer-events-none" />
      {/* Subtle center radial glow for premium feel */}
      <div
        className="absolute inset-0 z-[21] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 70%, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ─── Title overlay ─── */}
      <div className="absolute inset-0 z-[23] pointer-events-none flex items-end">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-20 sm:pb-24 lg:pb-28">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
          >
            {/* Location badge with glow-ring */}
            {VIDEO_HERO.locationBadge && (
              <motion.span
                variants={badgeVariants}
                className="glow-ring inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-medium text-white/80 mb-4 sm:mb-5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-glow" />
                {VIDEO_HERO.locationBadge}
              </motion.span>
            )}

            {/* Title — two-line word-by-word reveal with stagger */}
            <div className="mb-2 sm:mb-3 [perspective:600px]">
              {/* Line 1 — smaller, elegant */}
              <motion.p
                variants={titleContainerVariants}
                className="inline-flex flex-wrap text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-white/70 tracking-wide mb-1"
              >
                {line1Words.map((word, i) => (
                  <motion.span
                    key={`l1-${i}`}
                    variants={wordVariants}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
              <br />
              {/* Line 2 — bold, impactful */}
              <motion.span
                variants={titleContainerVariants}
                className="inline-flex flex-wrap text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white drop-shadow-lg leading-tight"
              >
                {line2Words.map((word, i) => (
                  <motion.span
                    key={`l2-${i}`}
                    variants={wordVariants}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            </div>

            {/* Subtitle — blur dissolve reveal */}
            <motion.p
              variants={subtitleVariants}
              className="text-xs sm:text-sm lg:text-base text-white/50 leading-relaxed max-w-lg"
            >
              {VIDEO_HERO.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ─── Premium shimmer line ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] z-[24] pointer-events-none overflow-hidden">
        <div className="relative w-full h-full bg-white/5">
          <div className="animate-shimmer-line absolute inset-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>
      </div>

      {/* ─── Premium scroll indicator ─── */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-[25] pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          {/* Pulsing circle with chevron */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/25 flex items-center justify-center backdrop-blur-sm bg-white/5"
          >
            {/* Chevron down */}
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/60"
              animate={{ y: [0, 2, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
