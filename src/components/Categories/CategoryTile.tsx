'use client';

import { Category } from '@/types';
import Image from 'next/image';

export function CategoryTile({ category }: { category: Category }) {
  const handleClickCategory = (id: string) => {
    console.log('clicked category', id);
  };

  return (
    <button
      onClick={() => handleClickCategory(category.id)}
      key={category.id}
      className="group relative overflow-hidden bg-[#444E8D] rounded-br-[60px] rounded-tl-[60px] h-[457px]"
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
        className={`flex flex-col p-6  h-[50%]  items-center justify-center bg-[${
          category.color || '#444E8D'
        }]`}
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
