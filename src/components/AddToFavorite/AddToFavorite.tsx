'use client';

import { Star } from 'lucide-react';
import { useFavouritePosts } from '@/context/FavouritePostsProvider';

export function AddToFavorite({ id }: { id: string }) {
  const { toggleFavourite, isFavourite } = useFavouritePosts();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => toggleFavourite(id)}
        className="text-gray-500 flex items-center gap-2"
      >
        <Star className="w-6 h-6" fill={isFavourite(id) ? 'black' : 'none'} />
        Dodaj do ulubionych
      </button>
    </div>
  );
}
