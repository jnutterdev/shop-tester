import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    stock: z.number(),
    category: z.enum(['Books', 'Board Games', 'Accessories', 'Other']),
    image: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { products };
