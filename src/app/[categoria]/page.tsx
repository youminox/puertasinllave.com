import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "@/components/ArticleLayout";
import {
  SITE_URL,
  OG_DEFAULT,
  getCategories,
  getPillar,
  trimTitle,
  absolute,
} from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategories().map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const a = getPillar(categoria);
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
      images: [{ url: img, width: 1200, height: 675, alt: a.image.alt }],
    },
  };
}

export default async function PillarPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const a = getPillar(categoria);
  if (!a) notFound();
  return <ArticleLayout a={a} />;
}
