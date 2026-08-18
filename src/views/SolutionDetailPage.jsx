import React from 'react';
import { solutionPages } from '../data/marketingPages';
import { MarketingDetailTemplate } from '../components/marketing/MarketingDetailTemplate';

export const SolutionDetailPage = ({ slug }) => {
  const page = solutionPages[slug];
  return <MarketingDetailTemplate type="Solutions" slug={slug} page={page} />;
};
