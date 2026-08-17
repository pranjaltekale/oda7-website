import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { solutionPages } from '../data/marketingPages';
import { MarketingDetailTemplate } from '../components/marketing/MarketingDetailTemplate';

export const SolutionDetailPage = ({ onOpenDemo }) => {
  const { slug } = useParams();
  const page = solutionPages[slug];
  if (!page) return <Navigate to="/solutions" replace />;
  return <MarketingDetailTemplate type="Solutions" slug={slug} page={page} onOpenDemo={onOpenDemo} />;
};
