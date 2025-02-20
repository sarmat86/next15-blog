import { Categories, PostsList } from '@/components';
import { getPosts } from '@/server/actions';
import Link from 'next/link';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ categories: string; favourite: string }>;
}) {
  const { categories, favourite } = await searchParams;
  const categoriesArray = categories ? categories.split(',') : [];
  const posts = await getPosts(categoriesArray);

  return (
    <div>
      <div className="container mx-auto px-4 flex items-center py-[60px]">
        <Link href="/" className="text-4xl font-bold">
          Blog edukacyjny
        </Link>
      </div>
      <Categories />
      <PostsList posts={posts} isFavourite={favourite === 'true'} />
    </div>
  );
}
