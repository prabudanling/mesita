// ============================================================
// NusaParadise.id — Video Hero Configuration
// Single YouTube video, autoplay, loop, muted
// ============================================================

/** Konfigurasi video hero */
export interface VideoHeroConfig {
  /** YouTube Video ID */
  videoId: string;
  /** Judul yang tampil di overlay */
  title: string;
  /** Subjudul */
  subtitle: string;
  /** Badge lokasi */
  locationBadge?: string;
}

// ============================================================
// VIDEO HERO — Ganti videoId dengan ID YouTube Anda!
// ============================================================

export const VIDEO_HERO: VideoHeroConfig = {
  videoId: "8YBMRQAa6RE",
  title: "Indonesia True Paradise In The World",
  subtitle: "17.504 pulau • 714 suku bangsa • surga dunia yang nyata dari Sabang sampai Merauke",
  locationBadge: "Nusantara",
};

// ============================================================
// HELPER: Build YouTube embed URL
// ============================================================

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
    playlist: videoId,
    loop: "1",
    playsinline: "1",
    enablejsapi: "0",
  });

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

export function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}
