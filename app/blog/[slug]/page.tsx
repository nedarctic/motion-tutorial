// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ClientPost from "./ClientPost";
import { blogPosts } from "@/app/data/lib";

type Props = {
  params: Promise<{ slug: string }>;
};

const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Curated by Ray`,
    description: post.excerpt,
    openGraph: {
      images: post.image,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  // Pass only the data needed — no async, no motion here
  return <ClientPost post={post} />;
}