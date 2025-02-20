'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCategories } from '@/context/CategoriesProvider';
import { X } from 'lucide-react';
import { cn } from '@/utils/utils';

export default function Filters() {
  const router = useRouter();
  const categories = useCategories();
  const searchParams = useSearchParams();

  const categoriesParam = searchParams.get('categories')?.split(',') || [];
  const favouriteParam = searchParams.get('favourite') === 'true';
  const filters = categories.filter((category) => {
    return categoriesParam.includes(category.id);
  });

  const handleRemoveFilter = (categoryId: string) => {
    const newCategories = categoriesParam.filter((id) => id !== categoryId);
    router.push(`/?categories=${newCategories.join(',')}`, { scroll: false });
  };

  const handleClearFilters = () => {
    router.push('/', { scroll: false });
  };

  const handleToggleFavouritePosts = (isFavourite: boolean) => {
    router.push(`/?favourite=${isFavourite}`, { scroll: false });
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-8">
      <h2 className="text-2xl font-bold">Wpisy</h2>

      <div className="order-2 lg:order-1">
        <div className="flex flex-wrap gap-4">
          {filters.map((filter) => {
            return (
              <button
                key={filter.id}
                onClick={() => handleRemoveFilter(filter.id)}
                className="text-red-800 underline bold flex items-center gap-2"
              >
                {filter.name.toUpperCase()}
                <X className="w-4 h-4 text-black" strokeWidth={3} />
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-4 lg:ml-auto order-1 lg:order-2 mb-4 lg:mb-0">
        <button className="font-bold" onClick={handleClearFilters}>
          WSZYSTKIE
        </button>
        <span className="text-gray-400">|</span>
        <button
          className={cn(
            'text-gray-400 flex items-center gap-2',
            favouriteParam && 'text-red-800 underline'
          )}
          onClick={() => handleToggleFavouritePosts(!favouriteParam)}
        >
          ULUBIONE
          {favouriteParam && (
            <X className="w-4 h-4 text-black" strokeWidth={3} />
          )}
        </button>
      </div>
    </div>
  );
}
