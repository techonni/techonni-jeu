import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const guides = await getCollection("guides");
  const urls = [
    { path: "/", lastmod: undefined },
    { path: "/guides/", lastmod: undefined },
    { path: "/a-propos/", lastmod: undefined },
    ...guides.map((g) => ({ path: `/guides/${g.id}/`, lastmod: g.data.updated.toISOString().slice(0, 10) })),
  ];
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url><loc>${new URL(u.path, site).href}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`,
      )
      .join("\n") +
    `\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
