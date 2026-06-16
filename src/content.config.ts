import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const products = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/products",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    stock: z.number(),
    category: z.enum(["Books", "Board Games", "Accessories", "Other"]),
    image: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { products };
