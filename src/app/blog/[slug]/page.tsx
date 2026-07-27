import { redirect, notFound } from "next/navigation";
import { getSubstackPosts } from "@/utils/substack";

export const revalidate = 21600;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getSubstackPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getSubstackPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Redirect directly to the original Substack article
  redirect(post.url);
}
