import React from 'react';
import type { Metadata } from 'next';

import productsData from './products.json';

export const metadata: Metadata = productsData.metadata;

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
