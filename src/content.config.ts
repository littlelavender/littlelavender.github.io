import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogs = defineCollection({ 
  loader: glob({ pattern: "**/*.md", base: "./src/blogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    author: z.string().optional(),
    avatar: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()),
    pubDate: z.string(),
    updateDate: z.string().optional(),
  }),
 });

export const collections = { blogs };