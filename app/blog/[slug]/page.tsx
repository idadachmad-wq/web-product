import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/BlogCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  blogPosts,
  formatBlogDate,
  getLatestPosts,
  getPost,
} from "@/lib/blog";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artikel tidak ditemukan" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${site.name}`,
      description: post.excerpt,
      images: [{ url: post.cover }],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const related = getLatestPosts(4).filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <Link
        href="/blog"
        className="text-sm text-muted transition-colors hover:text-accent-deep"
      >
        ← Kembali ke blog
      </Link>

      <div className="mt-8 animate-fade-up">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep">
          {post.category}
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-muted">
          {formatBlogDate(post.date)} · {post.readTime} baca
        </p>
      </div>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl bg-mist shadow-[0_18px_40px_rgba(4,53,34,0.15)]">
        <Image
          src={post.cover}
          alt={post.coverAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#043522] via-[#0a6b45] to-[#12a06a] p-6 text-white sm:p-8">
        <p className="text-hologram text-sm font-bold">{site.name}</p>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight">
          Butuh internet cepat &amp; hemat?
        </h2>
        <p className="mt-2 text-sm text-white/75">
          Chat admin untuk cek coverage dan pilih paket yang cocok.
        </p>
        <div className="mt-5">
          <WhatsAppButton
            label="Chat WhatsApp"
            className="rounded-full bg-[#ff6a1a] text-white"
          />
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Artikel terkait
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <BlogCard key={item.slug} post={item} index={index} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
