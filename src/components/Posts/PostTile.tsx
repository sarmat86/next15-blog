'use client';

import { Post } from '@/types';
import Link from 'next/link';
import { useCategory } from '@/context/CategoriesProvider';

export function PostTile({ post }: { post: Post }) {
  const category = useCategory(post.categoryId);

  return (
    <article
      key={post.id}
      className="bg-[#F4F4F4] p-10 h-[579px] rounded-br-[53.09px] rounded-tl-[53.09px]"
    >
      <div
        className={`text-sm font-medium uppercase underline`}
        style={{ color: category?.color || '#444E8D' }}
      >
        {category?.name}
      </div>

      <Link href={`/posts/${post.id}`}>
        <h3 className="mt-4 text-2xl font-serif font-bold mb-8">
          {post.title}
        </h3>
      </Link>

      <time className="block text-lg bold mb-8">
        {new Date(post.createdAt).toLocaleDateString('pl-PL')}
      </time>

      <p className="text-gray-600 mb-4 leading6">{post.shortDescription}</p>

      <Link
        href={`/posts/${post.id}`}
        className="inline-flex items-center text-sm font-medium"
      >
        zobacz więcej
        <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24">
          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
        </svg>
      </Link>
    </article>
  );
}

export function PostTileSkeleton() {
  return (
    <div className="w-full h-[579px] bg-gray-200 animate-pulse rounded-br-[53.09px] rounded-tl-[53.09px]">
      <div className="relative h-[50%]">
        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
      </div>
      <div className="flex flex-col p-6  h-[50%]  items-center justify-center">
        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  );
}
