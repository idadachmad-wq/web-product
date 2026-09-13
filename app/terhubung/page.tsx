import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Berhasil terhubung",
  description: `Login voucher berhasil. Internet ${site.name} sudah aktif.`,
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
          Berhasil terhubung ke {site.name}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Internet sudah aktif. Silakan lanjut browsing lewat menu di atas —
          halaman ini tetap terbuka sampai Anda pindah sendiri.
        </p>
      </div>
    </div>
  );
}
