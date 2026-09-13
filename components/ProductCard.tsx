import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/products";
import { site } from "@/lib/site";

type ProductCardProps = {
  product: Product;
  index?: number;
};

const delayClass = ["delay-1", "delay-2", "delay-3", "delay-4"] as const;

function shortPrice(price: number): string {
  if (price >= 1000 && price % 1000 === 0) {
    return `Rp${price / 1000}rb`;
  }
  return formatPrice(price);
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const delay = delayClass[Math.min(index, 3)];
  const badge = product.options[0] ?? null;
  const isVoucher = product.category === "Voucher";

  return (
    <Link
      href={`/produk/${product.slug}`}
      className={`group block animate-fade-up ${delay}`}
    >
      <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#043522] via-[#0a6b45] to-[#12a06a] shadow-[0_14px_36px_rgba(4,53,34,0.28)] ring-1 ring-lime-300/20 transition-transform hover:-translate-y-1">
        <div className="pointer-events-none absolute -right-6 top-0 h-24 w-24 rounded-full bg-lime-300/20 blur-2xl" />

        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#043522] via-[#043522]/30 to-transparent" />

          <span className="absolute left-2.5 top-2.5 rounded-md bg-black/40 px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-lime-100 backdrop-blur-sm">
            {product.category}
          </span>
          {badge ? (
            <span className="absolute bottom-2.5 right-2.5 rounded-md bg-lime-300 px-2 py-1 text-[10px] font-bold text-[#043522] shadow-[0_0_14px_rgba(190,242,100,0.5)]">
              {badge}
            </span>
          ) : null}
        </div>

        <div className="space-y-1.5 px-3.5 pb-4 pt-3">
          {isVoucher ? (
            <p className="text-hologram text-[11px] font-bold tracking-wide">
              {site.name}
            </p>
          ) : null}
          <h3 className="font-display text-base font-bold tracking-tight text-white sm:text-lg">
            {product.name}
          </h3>
          <p className="text-[11px] text-white/65">{product.usage}</p>
          <div className="flex flex-wrap items-baseline gap-2 pt-1">
            {product.compareAtPrice ? (
              <span className="text-xs text-white/40 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            ) : null}
            <p className="text-sm font-bold text-lime-200">
              {isVoucher ? shortPrice(product.price) : formatPrice(product.price)}
              {product.category === "Paket Bulanan" ? (
                <span className="font-normal text-white/50"> /bulan</span>
              ) : null}
            </p>
          </div>
          <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#ff6a1a] px-3 py-1.5 text-[10px] font-bold text-white">
            Dapatkan →
          </span>
        </div>
      </article>
    </Link>
  );
}
