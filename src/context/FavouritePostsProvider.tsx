'use client';

import { getLocalStorage, setLocalStorage } from '@/utils/ls';
import { createContext, useContext, useEffect, useState } from 'react';

export type FavouritePosts = string[];

type FavouritePostsContextType = {
  favouritePosts: FavouritePosts;
  toggleFavourite: (id: string) => void;
  isFavourite: (id: string) => boolean;
};

const FavouritePostsContext = createContext<
  FavouritePostsContextType | undefined
>(undefined);

export const FavouritePostsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favouritePosts, setFavouritePosts] = useState<FavouritePosts>(
    getLocalStorage('favouritePosts', [])
  );

  const toggleFavourite = (id: string) => {
    if (favouritePosts.includes(id)) {
      setFavouritePosts(favouritePosts.filter((postId) => postId !== id));
    } else {
      setFavouritePosts([...favouritePosts, id]);
    }
  };

  useEffect(() => {
    setLocalStorage('favouritePosts', favouritePosts);
  }, [favouritePosts]);

  const isFavourite = (id: string) => {
    return favouritePosts.includes(id);
  };

  return (
    <FavouritePostsContext.Provider
      value={{
        favouritePosts,
        toggleFavourite,
        isFavourite,
      }}
    >
      {children}
    </FavouritePostsContext.Provider>
  );
};

export const useFavouritePosts = () => {
  const context = useContext(FavouritePostsContext);
  if (context === undefined) {
    throw new Error(
      'useFavouritePosts must be used within a FavouritePostsProvider'
    );
  }
  return context;
};
