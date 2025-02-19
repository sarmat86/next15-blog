import { Categories, PostsList } from '@/components';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ categories: string }>;
}) {
  const { categories } = await searchParams;
  const categoriesArray = categories ? categories.split(',') : [];

  return (
    <div>
      <Categories />
      <PostsList categories={categoriesArray} />
    </div>
  );
}
