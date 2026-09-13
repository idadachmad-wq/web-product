import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OrderPanel } from "@/components/OrderPanel";
import { ProductCard } from "@/components/ProductCard";
import { formatPrice, getProduct, products } from "@/lib/products";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Produk tidak ditemukan" };

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | ${site.name}`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const related = products
    .filter(
      (item) =>
        item.slug !== product.slug && item.category === product.category,
    )
    .slice(0, 4);

  const speedBadge =
    product.category === "Paket Bulanan" ? product.options[0] : null;

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <Link
        href="/produk"
        className="text-sm text-muted transition-colors hover:text-accent-deep"
      >
        ← Kembali ke katalog
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-[#043522] to-[#0a6b45] shadow-[0_20px_50px_rgba(4,53,34,0.25)] ring-1 ring-lime-300/20 animate-fade-in">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#043522]/50 via-transparent to-transparent" />
          {speedBadge ? (
            <div className="absolute right-4 top-4 rounded-xl bg-lime-300/95 px-3 py-2 text-center shadow-[0_0_20px_rgba(190,242,100,0.5)]">
              <p className="text-lg font-black leading-none text-[#043522]">
                {speedBadge.replace(" Mbps", "")}
              </p>
              <p className="mt-0.5 text-[9px] font-bold tracking-[0.14em] text-[#043522]">
                MBPS
              </p>
            </div>
          ) : null}
        </div>

        <div className="animate-fade-up space-y-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-deep">
              {product.category}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-muted">{product.usage}</p>
            <div className="mt-4 flex flex-wrap items-baseline gap-3">
              {product.compareAtPrice ? (
                <span className="text-lg text-muted line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              ) : null}
              <p className="text-2xl font-bold text-accent-deep">
                {formatPrice(product.price)}
                {product.category === "Paket Bulanan" ? (
                  <span className="text-base font-normal text-muted">
                    {" "}
                    /bulan
                  </span>
                ) : null}
              </p>
            </div>
          </div>

          <p className="leading-relaxed text-muted">{product.description}</p>

          <OrderPanel
            productName={product.name}
            price={product.price}
            category={product.category}
            options={product.options}
            optionLabel={product.optionLabel}
            variants={product.variants}
            variantLabel={product.variantLabel}
            features={product.features}
          />
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Produk terkait
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6">
            {related.map((item, index) => (
              <ProductCard key={item.slug} product={item} index={index} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
