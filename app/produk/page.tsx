import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductCatalog } from "@/components/ProductCatalog";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Paket bulanan SaGa-Net (HEMAT–ULTRA), voucher internet, dan promo instalasi Rp150.000.",
};

export default function ProdukPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="mb-10 max-w-2xl animate-fade-up">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-deep">
          Katalog
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-wide sm:text-5xl">
          Semua produk
        </h1>
        <p className="mt-3 text-muted">
          Pilih paket bulanan, voucher, atau instalasi — lalu pesan langsung via
          WhatsApp.
        </p>
      </div>

      <Suspense
        fallback={<p className="text-muted">Memuat katalog produk...</p>}
      >
        <ProductCatalog />
      </Suspense>
    </div>
  );
}
