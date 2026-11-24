import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import ClientEffects from "./ClientEffects";
import AmazonAffiliateBox from "./AmazonAffiliateBox";
import {
  getContextualAmazonProducts,
  AMAZON_TAG_US,
  AMAZON_TAG_ES,
} from "@/lib/amazon";
import {
  LEGAL_OWNER,
  LEGAL_LOCATION,
  LEGAL_EMAIL,
  LOCKS_DISCLAIMER,
} from "@/lib/content";

export default function SimplePage({
  title,
  crumb,
  href,
  intro,
  showAmazonShowcase = true,
  children,
}: {
  title: string;
  crumb: string;
  href: string;
  intro?: string;
  showAmazonShowcase?: boolean;
  children: React.ReactNode;
}) {
  const amz = getContextualAmazonProducts(href, "legal", title);
  return (
    <>
      <Header />
      <main className="pt-[68px]">
        <section className="relative overflow-hidden bg-gradient-to-b from-fxsky to-white">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-fxblue/10 blur-3xl" />
          <div className="wrap relative max-w-3xl pb-8 pt-10">
            <Breadcrumbs items={[{ name: crumb, href }]} />
            <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              {title}
            </h1>
            {intro && (
              <p className="mt-4 text-lg text-[var(--muted)]">{intro}</p>
            )}
          </div>
        </section>
        <div className="wrap max-w-3xl pb-10">
          <div className="prose-fx">{children}</div>
          <div className="mt-8 rounded-2xl border border-[var(--line)] bg-fxsky/70 p-5 text-xs text-[var(--muted)]">
            <p className="font-bold text-fxink">
              Titular responsable: {LEGAL_OWNER}, domiciliado en{" "}
              {LEGAL_LOCATION} · Email: {LEGAL_EMAIL}
            </p>
            <p className="mt-1">
              En calidad de Afiliado de Amazon ({AMAZON_TAG_US} en Amazon.com y{" "}
              {AMAZON_TAG_ES} en Amazon.es), este portal obtiene ingresos por
              las compras adscritas que cumplen los requisitos aplicables. En
              este sitio {LOCKS_DISCLAIMER}.
            </p>
          </div>
        </div>
        {showAmazonShowcase && (
          <div className="wrap pb-8">
            <AmazonAffiliateBox
              variant="showcase"
              sectionTitle={amz.sectionTitle}
              sectionSubtitle={amz.sectionSubtitle}
              products={amz.products}
              source={`simple-${crumb}`}
            />
          </div>
        )}
      </main>
      <Footer />
      <ClientEffects stickyBar={false} />
    </>
  );
}
