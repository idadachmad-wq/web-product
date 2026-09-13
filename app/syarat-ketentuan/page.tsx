import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: `Syarat dan ketentuan berlangganan layanan internet ${site.name}.`,
};

const sections = [
  {
    title: "1. Layanan",
    body: `${site.name} menyediakan layanan internet fiber optic (paket bulanan, voucher, dan instalasi) sesuai coverage area yang tersedia. Ketersediaan layanan bergantung pada hasil pengecekan lokasi.`,
  },
  {
    title: "2. Pendaftaran",
    body: "Pendaftaran dilakukan melalui WhatsApp admin resmi. Pelanggan wajib memberikan data yang benar: nama, alamat lengkap, dan nomor yang bisa dihubungi.",
  },
  {
    title: "3. Biaya & Pembayaran",
    body: "Biaya berlangganan mengikuti paket yang dipilih. Biaya instalasi dan promo mengikuti ketentuan yang berlaku pada saat pendaftaran. Keterlambatan pembayaran dapat memengaruhi kelangsungan layanan.",
  },
  {
    title: "4. Perangkat",
    body: "Modem/router yang disewakan tetap menjadi milik penyedia layanan kecuali diperjanjikan lain. Pelanggan wajib merawat perangkat dan mengembalikannya jika berhenti berlangganan sesuai ketentuan.",
  },
  {
    title: "5. Gangguan & Dukungan",
    body: `Laporan gangguan dilayani melalui WhatsApp pada jam operasional: ${site.csHours}. Penanganan dilakukan secepatnya sesuai antrean dan kondisi lapangan.`,
  },
  {
    title: "6. Penggunaan Wajar",
    body: "Pelanggan dilarang menggunakan layanan untuk aktivitas ilegal atau yang merugikan jaringan bersama. Penyalahgunaan dapat berakibat pada pembatasan atau pemutusan layanan.",
  },
  {
    title: "7. Perubahan Ketentuan",
    body: `${site.name} dapat memperbarui syarat & ketentuan ini. Versi terbaru akan ditampilkan di website. Dengan tetap berlangganan, pelanggan dianggap memahami ketentuan yang berlaku.`,
  },
];

export default function SyaratKetentuanPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="animate-fade-up space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-deep">
          Legal
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Syarat &amp; Ketentuan
        </h1>
        <p className="text-muted">
          Ringkasan ketentuan berlangganan layanan {site.name}. Untuk detail
          kasus tertentu, hubungi admin.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        {sections.map((section) => (
          <section key={section.title} className="rounded-2xl border border-accent/15 bg-white p-5 shadow-sm">
            <h2 className="font-display text-xl font-bold tracking-tight">
              {section.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/bantuan"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white"
        >
          Hubungi Bantuan
        </Link>
        <Link
          href="/produk"
          className="rounded-full border border-accent/25 bg-white px-5 py-2.5 text-sm font-bold text-accent-deep"
        >
          Lihat Produk
        </Link>
      </div>
    </div>
  );
}
