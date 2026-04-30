"use client";

import { motion } from "framer-motion";
import { VIDEO_HERO } from "@/data/video-hero";

// ============================================================
// VIDEO HERO — Simple & Reliable
// Pure CSS responsive, no JS sizing, no API scripts
// ============================================================
export default function VideoHeroSlider() {
  const embedUrl = `https://www.youtube.com/embed/${VIDEO_HERO.videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&playlist=${VIDEO_HERO.videoId}&loop=1&playsinline=1`;

  return (
    <section className="relative w-full h-[100vh] min-h-[500px] sm:min-h-[600px] overflow-hidden bg-black">
      {/* YouTube iframe — pure CSS cover */}
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

      {/* Vignette overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 50%, rgba(0,0,0,0.4) 100%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/50 via-black/20 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-20 pointer-events-none" />

      {/* Title overlay */}
      <div className="absolute inset-0 z-[23] pointer-events-none flex items-end">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {VIDEO_HERO.locationBadge && (
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[10px] sm:text-[11px] font-medium text-white/70 mb-3"
              >
                {VIDEO_HERO.locationBadge}
              </motion.span>
            )}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white drop-shadow-lg leading-tight mb-2 sm:mb-3">
              {VIDEO_HERO.title}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-white/50 leading-relaxed max-w-lg">
              {VIDEO_HERO.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[24] pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 5, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-5 sm:h-6 bg-white/40"
          />
        </motion.div>
      </div>
    </section>
  );
}
