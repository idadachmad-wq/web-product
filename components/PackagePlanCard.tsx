import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/products";
import { site } from "@/lib/site";

type PackagePlanCardProps = {
  product: Product;
  index?: number;
};

const delayClass = ["delay-1", "delay-2", "delay-3", "delay-4"] as const;

function shortPrice(price: number): string {
  if (price >= 1000) {
    const ribu = Math.round(price / 1000);
    return `Rp${ribu}ribu`;
  }
  return formatPrice(price);
}

export function PackagePlanCard({ product, index = 0 }: PackagePlanCardProps) {
  const delay = delayClass[Math.min(index, 3)];
  const speed = product.options[0] ?? "";

  return (
    <article
      className={`group animate-fade-up ${delay} relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#043522] via-[#0a6b45] to-[#12a06a] shadow-[0_20px_50px_rgba(4,53,34,0.35)] ring-1 ring-lime-300/25 transition-transform hover:-translate-y-1`}
    >
      <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-lime-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-8 bottom-20 h-32 w-32 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="relative z-10 flex flex-1 flex-col px-5 pb-4 pt-5 sm:px-6 sm:pt-6">
        <div className="flex items-center gap-2.5">
          <Image
            src={site.logo}
            alt=""
            width={36}
            height={32}
            className="h-8 w-auto drop-shadow-[0_0_12px_rgba(0,255,180,0.45)]"
          />
          <span className="text-hologram font-display text-base font-bold tracking-tight sm:text-lg">
            {site.name}
          </span>
        </div>

        <h3 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm font-semibold text-lime-200/95">
          {speed}
        </p>
        <p className="mt-2 max-w-[18rem] text-xs leading-relaxed text-white/75 sm:text-sm">
          {product.usage}
        </p>

        <Link
          href={`/produk/${product.slug}`}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#ff6a1a] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(255,106,26,0.45)] transition-transform group-hover:scale-[1.03]"
        >
          Dapatkan Sekarang
          <span aria-hidden className="text-base leading-none">
            →
          </span>
        </Link>
      </div>

      <div className="relative mx-3 mb-3 aspect-[16/10] overflow-hidden rounded-2xl sm:mx-4 sm:mb-4">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-[8s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#043522]/50 via-transparent to-transparent" />
        <div className="absolute inset-0 ring-1 ring-inset ring-lime-200/30" />

        <div className="absolute right-3 top-3 rounded-xl bg-lime-300/95 px-3 py-2 text-center shadow-[0_0_20px_rgba(190,242,100,0.55)]">
          <p className="text-lg font-black leading-none text-[#043522]">
            {speed.replace(" Mbps", "")}
          </p>
          <p className="mt-0.5 text-[9px] font-bold tracking-[0.14em] text-[#043522]">
            MBPS
          </p>
        </div>
      </div>

      <div className="relative z-10 flex items-end justify-between gap-3 border-t border-white/15 px-5 py-4 sm:px-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
            Harga
          </p>
          <p className="mt-0.5 text-lg font-black text-white">
            {shortPrice(product.price)}
            <span className="ml-1 text-sm font-semibold text-lime-200">
              /bulan
            </span>
          </p>
        </div>
        <p className="pb-1 text-[10px] text-white/40">S&amp;K Berlaku</p>
      </div>
    </article>
  );
}
