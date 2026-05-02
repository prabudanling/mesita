// ============================================================
// NusaParadise.id — Arsitektur Data Inti
// Portal Wisata Peradaban Terbesar di Dunia
// ============================================================

/** Kategori fungsi lantai dalam Menara Peradaban */
export type KategoriLantai =
  | "Ruang Perang"
  | "Medis"
  | "Pendidikan"
  | "Kuliner"
  | "Budaya"
  | "Spiritual"
  | "Riset & Teknologi"
  | "Investasi"
  | "Logistik"
  | "Pemerintahan"
  | "Ekonomi Kreatif"
  | "Konservasi Alam";

/** Representasi satu lantai dalam Menara Peradaban 45 Lantai */
export interface LantaiMenara {
  /** ID unik lantai (1-45) */
  id: string;
  /** Nomor urut lantai */
  nomor: number;
  /** Nama lantai */
  nama: string;
  /** Deskripsi fungsi & peran lantai */
  deskripsi: string;
  /** Kategori fungsi utama */
  kategori: KategoriLantai;
  /** Ikon emoji untuk representasi visual */
  ikon: string;
  /** Apakah lantai ini sudah aktif/beroperasi */
  statusAktif: boolean;
  /** Tingkat prioritas pembangunan (1=highest) */
  prioritas: number;
  /** Estimasi anggaran pembangunan dalam USD */
  estimasiAnggaran: number;
  /** Target penyelesaian */
  targetSelesai: string;
}

/** Tipe jalur investasi NusaInvest */
export type TipeTierInvestasi = "Anchor" | "Pertumbuhan" | "Komunitas";

/** Status proposal investasi */
export type StatusInvestasi =
  | "Draft"
  | "Dalam Review"
  | "Disetujui"
  | "Dana Terkumpul"
  | "Dalam Eksekusi"
  | "Selesai"
  | "Ditolak";

/** Konfigurasi jalur investasi (3 Jalur NusaInvest) */
export interface TierInvestasi {
  /** ID unik tier */
  id: string;
  /** Nama tier */
  nama: string;
  /** Tipe jalur: Anchor, Pertumbuhan, atau Komunitas */
  tipe: TipeTierInvestasi;
  /** Deskripsi target investor */
  deskripsi: string;
  /** Nominal minimum investasi dalam USD */
  nominalMin: number;
  /** Nominal maksimum investasi dalam USD */
  nominalMax: number;
  /** Target IRR (Internal Rate of Return) dalam persentase */
  targetIRR: number;
  /** Periode investasi minimum dalam tahun */
  periodeMinTahun: number;
  /** Periode investasi maksimum dalam tahun */
  periodeMaxTahun: number;
  /** Perkiraan payback period dalam tahun */
  paybackPeriod: number;
  /** Daftar kluster destinasi yang tersedia untuk tier ini */
  klusterTersedia: string[];
  /** Status ketersediaan tier */
  statusAktif: boolean;
}

/** Data arus kas proyeksi per tahun */
export interface ProyeksiArusKas {
  /** Tahun proyeksi (Tahun ke-1, ke-2, dst.) */
  tahun: number;
  /** Label tahun untuk grafik */
  label: string;
  /** Arus kas masuk dalam USD */
  arusKasMasuk: number;
  /** Arus kas keluar dalam USD */
  arusKasKeluar: number;
  /** Arus kas bersih */
  arusKasBersih: number;
  /** Kumulatif arus kas bersih */
  kumulatifBersih: number;
}

/** Status transaksi SHU */
export type StatusSHU = "Pending" | "Diproses" | "Berhasil" | "Gagal" | "Dibatalkan";

/** Transaksi Sisa Hasil Usaha untuk desa wisata */
export interface TransaksiSHU {
  /** ID unik transaksi */
  id: string;
  /** ID desa penerima SHU */
  desaId: string;
  /** Nama desa penerima */
  namaDesa: string;
  /** Provinsi desa */
  provinsi: string;
  /** Nominal SHU dalam Rupiah */
  nominal: number;
  /** Persentase dari total pendapatan platform */
  persentase: number;
  /** Periode distribusi (contoh: "2025-Q1") */
  periode: string;
  /** Timestamp transaksi */
  timestamp: Date;
  /** Status transaksi */
  status: StatusSHU;
  /** Sumber pendapatan (komisi listing, dll.) */
  sumberPendapatan: string;
}

/** Dimensi navigasi portal */
export type DimensiPortal =
  | "fasad-publik"
  | "nusago-turis"
  | "nusainvest"
  | "os-desa";

/** Konfigurasi dimensi portal */
export interface DimensiKonfigurasi {
  id: DimensiPortal;
  nama: string;
  deskripsi: string;
  ikon: string;
  warnaAksen: string;
  tipePengguna: "Publik" | "Turis VVIP" | "Investor" | "Desa";
}

/** Data kluster destinasi untuk simulator ROI */
export interface KlusterDestinasi {
  id: string;
  nama: string;
  deskripsi: string;
  /** Proyeksi IRR dalam persen */
  proyeksiIRR: number;
  /** Perkiraan payback period dalam tahun */
  paybackPeriod: number;
  /** Faktor pertumbuhan arus kas per tahun */
  faktorPertumbuhan: number;
  /** Biaya awal dalam juta USD */
  biayaAwalPerUnit: number;
}

/** Data perbandingan Indonesia vs kompetitor */
export interface DataPerbandinganNegara {
  metrik: string;
  indonesia: string | number;
  indonesiaLabel: string;
  kompetitor: string | number;
  kompetitorLabel: string;
  keunggulan: string;
}

/** Agregat SHU real-time untuk penghitung */
export interface AgregatSHU {
  totalSHU: number;
  desaAktif: number;
  transaksiHariIni: number;
  pertumbuhanPersen: number;
}
