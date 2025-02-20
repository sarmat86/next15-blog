'use client';

import { PostTile, PostTileSkeleton } from './PostTile';
import Filters from './Filters';
import { Post } from '@/types';
import { useFavouritePosts } from '@/context/FavouritePostsProvider';
import { useEffect, useState } from 'react';

export function PostsList({
  posts,
  isFavourite,
}: {
  posts: Post[];
  isFavourite: boolean;
}) {
  const { favouritePosts } = useFavouritePosts();
  console.log(favouritePosts);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  useEffect(() => {
    if (isFavourite) {
      setFilteredPosts(
        posts.filter((post) => favouritePosts.includes(post.id))
      );
    } else {
      setFilteredPosts(posts);
    }
  }, [favouritePosts, isFavourite, posts]);

  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <Filters />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 ">
          {filteredPosts.map((post) => (
            <PostTile key={post.id} post={post} />
          ))}
          {filteredPosts.length === 0 && (
            <div className="col-span-4 text-2xl font-bold text-center text-gray-500">
              Brak postów do wyświetlenia
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function PostsListSkeleton() {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <Filters />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          <PostTileSkeleton />
          <PostTileSkeleton />
          <PostTileSkeleton />
          <PostTileSkeleton />
          <PostTileSkeleton />
          <PostTileSkeleton />
          <PostTileSkeleton />
          <PostTileSkeleton />
        </div>
      </div>
    </section>
  );
}
