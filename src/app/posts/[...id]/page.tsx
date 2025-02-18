import { getPost } from '@/server/actions';
import { notFound } from 'next/navigation';
export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) {
    return notFound();
  }
  return <div>{post.title}</div>;
}
