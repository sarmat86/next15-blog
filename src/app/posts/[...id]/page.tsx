import { getPost } from '@/server/actions';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { AddToFavorite } from '@/components';

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
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-start lg:items-center py-[60px] justify-between">
        <Link
          href="/"
          className="text-4xl font-bold flex items-center mb-4 lg:mb-0 hover:text-gray-500 gap-2"
        >
          <ArrowLeft className="w-6 h-6" />
          Blog edukacyjny
        </Link>
        <AddToFavorite id={post.id} />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-4">{post.shortDescription}</p>
        <div className="flex flex-col gap-4 mb-4">
          <p className="text-gray-500">{post.content}</p>
          <Image
            src={post.image}
            alt={post.title}
            width={1000}
            height={1000}
            className="rounded-lg max-full mb-4"
          />
        </div>
      </div>
    </div>
  );
}
