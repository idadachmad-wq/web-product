import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Selamat terhubung",
  description: `Login voucher berhasil. Internet ${site.name} sudah aktif — lanjut ke beranda, produk, atau hubungi admin.`,
  robots: { index: false, follow: true },
};

export default function TerhubungPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,168,107,0.18),_transparent_55%)]" />
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-lime-300/25 blur-3xl" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 py-16 text-center sm:px-8 sm:py-24">
        <Image
          src={site.logo}
          alt=""
          width={72}
          height={64}
          className="mb-6 h-14 w-auto drop-shadow-[0_0_18px_rgba(0,232,160,0.4)] sm:h-16"
          priority
        />

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep">
          Login voucher berhasil
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Selamat terhubung ke {site.name}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Internet sudah aktif. Halaman ini tetap terbuka sampai Anda pindah
          sendiri. Silakan browsing, streaming, atau lihat paket & voucher —
          butuh bantuan? Chat admin kapan saja.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Ke beranda
          </Link>
          <Link
            href="/produk"
            className="rounded-md border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-mist/60"
          >
            Lihat paket & voucher
          </Link>
          <WhatsAppButton
            label="Chat admin"
            message={`Halo ${site.name}! Saya baru saja login voucher dan butuh bantuan.`}
            variant="secondary"
          />
        </div>

        <p className="mt-10 max-w-md text-xs leading-relaxed text-muted">
          Tip: jendela status sesi hotspot (jika terbuka) bisa dipakai untuk
          cek sisa waktu atau logout. Jangan ditutup jika Anda ingin memantau
          sesi.
        </p>
      </div>
    </div>
  );
}
