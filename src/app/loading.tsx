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
      <section className="py-12 bg-[#F4F4F4]">
        <div className="container mx-auto px-4">
          <h2 className="hidden xl:block text-2xl font-bold mb-8">Kategorie</h2>
          <CategoriesSkeleton />
        </div>
      </section>
      <section className="py-12">
        <PostsListSkeleton />
      </section>
    </div>
  );
}
