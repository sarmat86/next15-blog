import { Categories, PostsList } from '@/components';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await searchParams;

  return (
    <div>
      <Categories />
      <PostsList categoryId={categoryId} />
    </div>
  );
}
