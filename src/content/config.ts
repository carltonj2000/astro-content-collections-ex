import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string().max(60, "For SEO make sure this is < 60 ch"),
    description: z.string().max(160, "For SEO make sure this is < 160 ch"),
    date: z.date(),
    draft: z.boolean(),
    author: z.enum(["John Doe", "Jane Doe"]),
  }),
});

export const collections = { blog };
