import { Categories, PostsList } from '@/components';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Categories />
      <PostsList />
    </div>
  );
}
