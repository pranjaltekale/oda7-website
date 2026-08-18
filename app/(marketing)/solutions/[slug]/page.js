import { notFound } from 'next/navigation';
import { solutionPages } from '../../../../src/data/marketingPages';
import { SolutionDetailPage } from '../../../../src/views/SolutionDetailPage';

export function generateStaticParams() {
  return Object.keys(solutionPages).map((slug) => ({ slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!solutionPages[slug]) notFound();
  return <SolutionDetailPage slug={slug} />;
}
