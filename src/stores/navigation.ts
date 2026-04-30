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
  // Ekosistem MESITA
  | "gabung-anggota"
  | "dompet-digital"
  | "marketplace-b2b"
  | "kenapa-koperasi"
  | "kenapa-ai"
  | "kenapa-blockchain"
  | "kenapa-metaverse"
  | "kenapa-nft"
  | "kenapa-carbon"
  // Sertifikasi & Akademi
  | "chse-halal"
  | "perijinan"
  | "bintang-5"
  | "akademi-sertifikasi"
  | "akademi-scaleup"
  | "akademi-skill"
  | "akademi-perusahaan"
  // Media & Kontak
  | "laporan-tahunan"
  | "esg-karbon"
  | "pusat-media"
  | "bantuan-247"
  | "kemitraan"
  // Pimpinan
  | "dpp-mesita"
  | "dpw-mesita"
  | "dpc-mesita"
  | "pac-mesita"
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
