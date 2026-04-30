import { create } from "zustand";

/** Semua ID modal yang tersedia */
export type ModalId =
  // Wisata
  | "syurga-biru"
  | "syurga-ketinggian"
  | "syurga-waktu"
  | "syurga-edukasi"
  // Investasi
  | "invest-infra"
  | "invest-hospitality"
  | "invest-fnb"
  | "dashboard-roi"
  // Ekosistem
  | "gabung-anggota"
  | "dompet-digital"
  | "marketplace-b2b"
  // Sertifikasi
  | "chse-halal"
  | "perijinan"
  | "bintang-5"
  // Media
  | "laporan-tahunan"
  | "esg-karbon"
  | "pusat-media"
  // Kontak
  | "bantuan-247"
  | "kemitraan"
  // Destinasi Detail
  | "destinasi-detail"
  // CTA dari hero
  | "gabung-ekosistem-cta"
  | "video-vision"
  // CTA MESITA
  | "daftar-asosiasi"
  // NusaGo
  | "nusago-gerbang"
  | "nusago-ai"
  | "nusago-kode"
  | "nusago-arvr"
  | "nusago-nft"
  | "nusago-investasi"
  // Mengapa MESITA
  | "kenapa-koperasi"
  | "kenapa-ai"
  | "kenapa-blockchain"
  | "kenapa-metaverse"
  | "kenapa-nft"
  | "kenapa-carbon"
  // Akademi Peradaban
  | "akademi-sertifikasi"
  | "akademi-scaleup"
  | "akademi-skill"
  | "akademi-perusahaan"
  // Pimpinan
  | "dpp-mesita"
  | "dpw-mesita"
  | "dpc-mesita"
  | "pac-mesita"
  // Lainnya
  | "semua-berita"
  | "laporan-lengkap"
  | "laporan-esg"
  | "null";

interface NavigationState {
  activeModal: ModalId;
  destinasiDetailId: string | null;
  openModal: (id: ModalId) => void;
  closeModal: () => void;
  openDestinasi: (nama: string) => void;
}

export const useNavigation = create<NavigationState>((set) => ({
  activeModal: "null",
  destinasiDetailId: null,
  openModal: (id) => set({ activeModal: id, destinasiDetailId: null }),
  closeModal: () => set({ activeModal: "null", destinasiDetailId: null }),
  openDestinasi: (nama) =>
    set({ activeModal: "destinasi-detail", destinasiDetailId: nama }),
}));
