'use client';

import { Category } from '@/types';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/utils/utils';
import { RefObject } from 'react';

export function CategoryTile({
  category,
  ref = null,
}: {
  category: Category;
  ref?: RefObject<HTMLElement | null> | null;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClickCategory = (id: string) => {
    if (ref) {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const categoriesParam = searchParams.get('categories')?.split(',') || [];

    if (categoriesParam.includes(id)) {
      return;
    }

    categoriesParam.push(id);

    router.push(`/?categories=${categoriesParam.join(',')}`, {
      scroll: false,
    });
  };

  return (
    <button
      onClick={() => handleClickCategory(category.id)}
      key={category.id}
      className={
        'w-full group relative overflow-hidden rounded-br-[60px] rounded-tl-[60px] h-[457px] hover:opacity-80 transition-opacity duration-300'
      }
    >
      <div className="relative h-[50%]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
        />
      </div>
      <div
        className="flex flex-col p-6  h-[50%]  items-center justify-center"
        style={{ backgroundColor: category.color || '#444E8D' }}
      >
        <span className="text-white font-bold uppercase mb-8">
          {category.name}
        </span>
        <CategoryIcon categoryId={category.id} name={category.name} />
      </div>
    </button>
  );
}

function CategoryIcon({
  categoryId,
  name,
}: {
  categoryId: string;
  name: string;
}) {
  const iconsSrc = {
    '1': '/cat1ico.png',
    '2': '/cat2ico.png',
    '3': '/cat3ico.png',
    '4': '/cat4ico.png',
  };

  return (
    <Image
      src={iconsSrc[categoryId as keyof typeof iconsSrc] || iconsSrc['1']}
      alt={name}
      width={48}
      height={48}
    />
  );
}

export function CategoryTileSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'w-full h-[457px] bg-gray-200 animate-pulse overflow-hidden rounded-br-[60px] rounded-tl-[60px]',
        className
      )}
    >
      <div className="relative h-[50%]">
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      </div>
    </div>
  );
}
