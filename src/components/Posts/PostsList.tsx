import { getPosts } from '@/server/actions';

export async function PostsList() {
  const posts = await getPosts();
  return (
    <section>
      <div className="container">
        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </section>
  );
}
