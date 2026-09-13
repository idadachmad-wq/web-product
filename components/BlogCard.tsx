import Image from "next/image";
import Link from "next/link";
import { formatBlogDate, type BlogPost } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPost;
  index?: number;
};

const delayClass = ["delay-1", "delay-2", "delay-3", "delay-4"] as const;

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  const delay = delayClass[Math.min(index, 3)];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block animate-fade-up ${delay}`}
    >
      <article className="overflow-hidden rounded-2xl border border-accent/15 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
        <div className="relative aspect-[16/10] overflow-hidden bg-mist">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-deep">
            {post.category}
          </span>
        </div>
        <div className="space-y-2 p-4 sm:p-5">
          <p className="text-[11px] text-muted">
            {formatBlogDate(post.date)} · {post.readTime}
          </p>
          <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent-deep sm:text-xl">
            {post.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
          <span className="inline-block pt-1 text-xs font-semibold uppercase tracking-wider text-accent-deep">
            Baca selengkapnya →
          </span>
        </div>
      </article>
    </Link>
  );
}
