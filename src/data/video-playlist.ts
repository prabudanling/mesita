// ============================================================
// NusaParadise.id — Video Playlist Configuration
// Mendukung: YouTube URL & Direct MP4 URL
// ============================================================

/** Tipe sumber video */
export type VideoSourceType = "youtube" | "mp4";

/** Konfigurasi satu slide video */
export interface VideoSlide {
  /** ID unik slide */
  id: string;
  /** Judul destinasi / video */
  title: string;
  /** Subjudul deskripsi singkat */
  subtitle: string;
  /** Tipe sumber video */
  type: VideoSourceType;
  /**
   * URL video — mendukung format:
   * - YouTube: https://www.youtube.com/watch?v=XXXXX atau https://youtu.be/XXXXX
   * - MP4: https://example.com/video.mp4 (direct URL)
   */
  url: string;
  /** Label lokasi badge */
  locationBadge?: string;
  /** Gradient overlay color (default: blue) */
  overlayGradient?: string;
}

// ============================================================
// PLAYLIST VIDEO WISATA INDONESIA
// Ganti URL di bawah ini dengan video Anda sendiri!
// ============================================================

export const VIDEO_PLAYLIST: VideoSlide[] = [
  {
    id: "raja-ampat",
    title: "Raja Ampat",
    subtitle: "Biodiversitas laut #1 planet — 1.500+ spesies ikan, 600+ spesies karang",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=8YBMRQAa6RE",
    locationBadge: "Papua Barat Daya",
    overlayGradient: "from-blue-950/80 via-blue-900/50 to-transparent",
  },
  {
    id: "bali",
    title: "Pulau Dewata Bali",
    subtitle: "Warisan budaya, sawah terasering, pantai ikonik — keajaiban Nusantara",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=8YBMRQAa6RE",
    locationBadge: "Bali",
    overlayGradient: "from-slate-950/80 via-slate-900/50 to-transparent",
  },
  {
    id: "borobudur",
    title: "Candi Borobudur",
    subtitle: "Candi Buddha terbesar di dunia — warisan UNESCO, magnet spiritual global",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=8YBMRQAa6RE",
    locationBadge: "Jawa Tengah",
    overlayGradient: "from-amber-950/80 via-amber-900/50 to-transparent",
  },
  {
    id: "komodo",
    title: "Pulau Komodo & Labuan Bajo",
    subtitle: "Habitat asli komodo — destinasi super prioritas dengan resort premium",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=8YBMRQAa6RE",
    locationBadge: "Nusa Tenggara Timur",
    overlayGradient: "from-emerald-950/80 via-emerald-900/50 to-transparent",
  },
  {
    id: "danau-toba",
    title: "Danau Toba",
    subtitle: "Danau vulkanik terbesar di dunia — kekayaan budaya Batak yang memukau",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=8YBMRQAa6RE",
    locationBadge: "Sumatera Utara",
    overlayGradient: "from-teal-950/80 via-teal-900/50 to-transparent",
  },
];

// ============================================================
// PENGATURAN SLIDER
// ============================================================

export const SLIDER_CONFIG = {
  /** Durasi tampil per slide dalam detik */
  slideDuration: 12,
  /** Durasi transisi crossfade dalam milidetik */
  transitionDuration: 1200,
  /** Apakah auto-play aktif */
  autoPlay: true,
  /** Apakah suara dimute (WAJIB untuk autoplay di browser) */
  muted: true,
  /** Tampilkan navigasi dots */
  showDots: true,
  /** Tampilkan tombol prev/next */
  showArrows: true,
};

// ============================================================
// HELPER: Extract YouTube Video ID dari URL
// ============================================================

/**
 * Extract video ID dari berbagai format YouTube URL:
 * - https://www.youtube.com/watch?v=XXXXX
 * - https://youtu.be/XXXXX
 * - https://www.youtube.com/embed/XXXXX
 * - https://m.youtube.com/watch?v=XXXXX
 */
export function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return null;
}

/**
 * Build YouTube embed URL dengan parameter optimal
 */
export function buildYouTubeEmbedUrl(videoId: string): string {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    controls: "0",
    showinfo: "0",
    rel: "0",
    modestbranding: "1",
    iv_load_policy: "3",
    fs: "0",
    disablekb: "1",
    playlist: videoId, // Untuk loop
    loop: "1",
    playsinline: "1",
    enablejsapi: "0",
    // Quality hints — request highest resolution from YouTube
    hd: "1",           // Enable HD playback by default
    vq: "hd2160",      // Prefer 4K, falls back to highest available
    // origin removed — causes hydration mismatch between server & client
  });

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}
