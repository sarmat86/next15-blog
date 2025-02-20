'use server';

import {
  PostsSchema,
  PostSchema,
  CategoriesSchema,
  CategorySchema,
} from '@/types';

export async function getPosts(categories?: string[]) {
  try {
    const url =
      categories && categories.length > 0
        ? `${process.env.ENDPOINT_URL}/posts?categoryId=[${categories.join(
            ','
          )}]`
        : `${process.env.ENDPOINT_URL}/posts`;

    const response = await fetch(url);
    const data = await response.json();
    const posts = PostsSchema.safeParse(data);

    if (!posts.success) {
      return [];
    }

    return posts.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getPost(id: string) {
  try {
    const response = await fetch(`${process.env.ENDPOINT_URL}/posts/${id}`);
    const data = await response.json();
    const post = PostSchema.safeParse(data);

    if (!post.success) {
      return null;
    }

    return post.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getCategories() {
  try {
    const response = await fetch(`${process.env.ENDPOINT_URL}/categories`);
    const data = await response.json();
    const categories = CategoriesSchema.safeParse(data);

    if (!categories.success) {
      return [];
    }

    return categories.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getCategory(id: string) {
  const response = await fetch(`${process.env.ENDPOINT_URL}/categories/${id}`);
  const data = await response.json();
  const category = CategorySchema.safeParse(data);

  if (!category.success) {
    return null;
  }

  return category.data;
}
