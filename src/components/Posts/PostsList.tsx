import { getPosts } from '@/server/actions';
import PostTile from './PostTile';
import Filters from './Filters';
export async function PostsList({ categoryId }: { categoryId: string }) {
  const posts = await getPosts(categoryId);

  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Wpisy</h2>
          <Filters />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 ">
          {posts.map((post) => (
            <PostTile key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
