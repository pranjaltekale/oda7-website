import { notFound } from 'next/navigation';
import { productPages } from '../../../../src/data/marketingPages';
import { ProductDetailPage } from '../../../../src/views/ProductDetailPage';

export function generateStaticParams() {
  return Object.keys(productPages).map((slug) => ({ slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!productPages[slug]) notFound();
  return <ProductDetailPage slug={slug} />;
}
