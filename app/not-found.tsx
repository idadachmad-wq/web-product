import Link from "next/link";

export default function NotFound() {
  return (
    <div className="brand-atmosphere mx-auto flex min-h-[60vh] max-w-xl flex-col items-start justify-center gap-5 px-5 py-24 sm:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-deep">
        404
      </p>
      <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Halaman tidak ditemukan
      </h1>
      <p className="text-muted">
        Produk atau halaman yang Anda cari tidak tersedia. Kembali ke beranda
        atau lihat katalog paket SaGa-Net.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
        >
          Ke beranda
        </Link>
        <Link
          href="/produk"
          className="rounded-full border border-accent/30 bg-white px-6 py-3 text-sm font-bold text-foreground transition-opacity hover:opacity-90"
        >
          Lihat produk
        </Link>
      </div>
    </div>
  );
}
