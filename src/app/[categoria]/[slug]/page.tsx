import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "@/components/ArticleLayout";
import {
  SITE_URL,
  OG_DEFAULT,
  getAllContent,
  getArticle,
  trimTitle,
  absolute,
} from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllContent()
    .filter((a) => !a.isPillar)
    .map((a) => ({ categoria: a.pillar, slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string; slug: string }>;
}): Promise<Metadata> {
  const { categoria, slug } = await params;
  const a = getArticle(categoria, slug);
  if (!a) return {};
  const url = `${SITE_URL}${a.path}`;
  const img = a.imageUrl ? absolute(a.imageUrl) : absolute(OG_DEFAULT());
  return {
    title: trimTitle(a.seoTitle),
    description: a.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: a.title,
      description: a.metaDescription,
      publishedTime: a.datePublished,
      modifiedTime: a.dateModified,
      images: [{ url: img, width: 1200, height: 675, alt: a.image.alt }],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ categoria: string; slug: string }>;
}) {
  const { categoria, slug } = await params;
  const a = getArticle(categoria, slug);
  if (!a) notFound();
  return <ArticleLayout a={a} />;
}
