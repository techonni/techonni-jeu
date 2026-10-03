import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    updated: z.coerce.date(),
    order: z.number(),
    sources: z.array(z.object({ name: z.string(), url: z.string().url() })),
  }),
});

export const collections = { guides };
