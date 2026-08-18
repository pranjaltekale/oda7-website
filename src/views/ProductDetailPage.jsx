import React from 'react';
import { productPages } from '../data/marketingPages';
import { MarketingDetailTemplate } from '../components/marketing/MarketingDetailTemplate';

export const ProductDetailPage = ({ slug }) => {
  const page = productPages[slug];
  return <MarketingDetailTemplate type="Product" slug={slug} page={page} />;
};
