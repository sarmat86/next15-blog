'use server';

import {
  PostsSchema,
  PostSchema,
  CategoriesSchema,
  CategorySchema,
} from '@/types';

export async function getPosts() {
  const response = await fetch(`${process.env.ENDPOINT_URL}/posts`);
  const data = await response.json();
  const posts = PostsSchema.safeParse(data);

  if (!posts.success) {
    throw new Error('Failed to parse posts');
  }

  return posts.data;
}

export async function getPost(id: string) {
  const response = await fetch(`${process.env.ENDPOINT_URL}/posts/${id}`);
  const data = await response.json();
  const post = PostSchema.safeParse(data);

  if (!post.success) {
    throw new Error('Failed to parse post');
  }

  return post.data;
}

export async function getCategories() {
  const response = await fetch(`${process.env.ENDPOINT_URL}/categories`);
  const data = await response.json();
  const categories = CategoriesSchema.safeParse(data);

  if (!categories.success) {
    throw new Error('Failed to parse categories');
  }

  return categories.data;
}

export async function getCategory(id: string) {
  const response = await fetch(`${process.env.ENDPOINT_URL}/categories/${id}`);
  const data = await response.json();
  const category = CategorySchema.safeParse(data);

  if (!category.success) {
    throw new Error('Failed to parse category');
  }

  return category.data;
}

export async function getPostsByCategory(id: string) {
  const response = await fetch(
    `${process.env.ENDPOINT_URL}/posts?categoryId=${id}`
  );
  const data = await response.json();
  const posts = PostsSchema.safeParse(data);

  if (!posts.success) {
    throw new Error('Failed to parse posts');
  }

  return posts.data;
}
