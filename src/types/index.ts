import { z } from 'zod';

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  icon: z.string(),
});

export const CategoriesSchema = z.array(CategorySchema);

export type Categories = z.infer<typeof CategoriesSchema>;
export type Category = z.infer<typeof CategorySchema>;

export const PostSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  shortDescription: z.string(),
  image: z.string(),
  content: z.string(),
  categoryId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const PostsSchema = z.array(PostSchema);

export type Posts = z.infer<typeof PostsSchema>;
export type Post = z.infer<typeof PostSchema>;

export type AppState = {
  id: string;
  favouriteCategories: string[];
};
