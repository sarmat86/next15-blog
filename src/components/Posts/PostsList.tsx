import { getPosts } from '@/server/actions';
import PostTile from './PostTile';
import Filters from './Filters';

export async function PostsList({ categories }: { categories: string[] }) {
  const posts = await getPosts(categories);

  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <Filters />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 ">
          {posts.map((post) => (
            <PostTile key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
