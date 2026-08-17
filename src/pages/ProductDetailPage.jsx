import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { productPages } from '../data/marketingPages';
import { MarketingDetailTemplate } from '../components/marketing/MarketingDetailTemplate';

export const ProductDetailPage = ({ onOpenDemo }) => {
  const { slug } = useParams();
  const page = productPages[slug];
  if (!page) return <Navigate to="/product" replace />;
  return <MarketingDetailTemplate type="Product" slug={slug} page={page} onOpenDemo={onOpenDemo} />;
};
