'use client';

import { useRouter } from 'next/navigation';

export default function Filters() {
  const router = useRouter();

  const handleClearFilters = () => {
    router.push('/', { scroll: false });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <button className="font-bold" onClick={handleClearFilters}>
          WSZYSTKIE
        </button>
        <span className="text-gray-400">|</span>
        <button className="text-gray-400">ULUBIONE</button>
      </div>
    </div>
  );
}
