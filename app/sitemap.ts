import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/compraventa-protegida", "/remates-judiciales"];
  return routes.map((route, index) => ({
    url: `https://fidelium.cl${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : .8,
  }));
}
