import Link from 'next/link';
import { CategoriesSkeleton, PostsListSkeleton } from '@/components';
export default function loading() {
  return (
    <div>
      <div className="container mx-auto px-4 flex items-center py-[60px]">
        <Link href="/" className="text-4xl font-bold">
          Blog edukacyjny
        </Link>
      </div>
      <CategoriesSkeleton />
      <PostsListSkeleton />
    </div>
  );
}
