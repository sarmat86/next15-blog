import { getPosts } from '@/server/actions';
import PostTile from './PostTile';

export async function PostsList() {
  const posts = await getPosts();

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Wpisy</h2>
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-4">
              <button className="font-bold">WSZYSTKIE</button>
              <span className="text-gray-400">|</span>
              <button className="text-gray-400">ULUBIONE</button>
            </div>
            <div className="flex items-center gap-2 text-gray-400 ml-5">
              <span>pokaż:</span>
              <button>Najnowsze wpisy</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {posts.map((post) => (
            <PostTile key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
