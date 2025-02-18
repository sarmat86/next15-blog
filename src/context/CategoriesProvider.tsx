'use client';

import { createContext, useContext } from 'react';
import { Categories } from '@/types';

const CategoriesContext = createContext<Categories | undefined>(undefined);

export const CategoriesProvider = ({
  children,
  categories,
}: {
  children: React.ReactNode;
  categories: Categories;
}) => {
  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error('useCategories must be used within a CategoriesProvider');
  }
  return context;
};

export const useCategory = (id: string) => {
  const categories = useCategories();
  return categories.find((category) => category.id === id);
};
