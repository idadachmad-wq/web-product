"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { PackagePlanCard } from "./PackagePlanCard";
import { ProductCard } from "./ProductCard";
import { categories, getProductsByCategory } from "@/lib/products";

export function ProductCatalog() {
  const searchParams = useSearchParams();
  const selected = searchParams.get("kategori") ?? "Semua";

  const filtered = useMemo(
    () => getProductsByCategory(selected === "Semua" ? undefined : selected),
    [selected],
  );

  const filters = ["Semua", ...categories];

  const monthly = filtered.filter((item) => item.category === "Paket Bulanan");
  const others = filtered.filter((item) => item.category !== "Paket Bulanan");

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const href =
            filter === "Semua"
              ? "/produk"
              : `/produk?kategori=${encodeURIComponent(filter)}`;
          const active = selected === filter;

          return (
            <Link
              key={filter}
              href={href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? "bg-accent text-white shadow-[0_8px_18px_rgba(0,168,107,0.3)]"
                  : "border border-accent/20 bg-white text-muted hover:border-accent/40 hover:text-accent-deep"
              }`}
            >
              {filter}
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted">Belum ada produk di kategori ini.</p>
      ) : (
        <div className="space-y-10">
          {monthly.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {monthly.map((product, index) => (
                <PackagePlanCard
                  key={product.slug}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          ) : null}

          {others.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 md:gap-x-6">
              {others.map((product, index) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
