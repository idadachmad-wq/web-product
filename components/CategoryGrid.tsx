import Link from "next/link";
import { categories } from "@/lib/products";

const categoryHints: Record<string, string> = {
  "Paket Bulanan": "Internet unlimited bulanan",
  Voucher: "Paket voucher fleksibel",
  Instalasi: "Pasang tinggal pakai",
};

const delayClass = ["delay-1", "delay-2", "delay-3", "delay-4"] as const;

export function CategoryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {categories.map((category, index) => (
        <Link
          key={category}
          href={`/produk?kategori=${encodeURIComponent(category)}`}
          className={`group animate-fade-up ${delayClass[Math.min(index, 3)]} relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#043522] via-[#0a6b45] to-[#12a06a] p-5 text-white shadow-[0_14px_36px_rgba(4,53,34,0.22)] ring-1 ring-lime-300/20 transition-transform hover:-translate-y-1`}
        >
          <div className="pointer-events-none absolute -right-6 top-0 h-24 w-24 rounded-full bg-lime-300/20 blur-2xl" />
          <p className="font-display text-2xl font-bold tracking-tight">
            {category}
          </p>
          <p className="mt-2 text-sm text-white/70">{categoryHints[category]}</p>
          <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-lime-200 transition-transform group-hover:translate-x-1">
            Lihat produk →
          </span>
        </Link>
      ))}
    </div>
  );
}
