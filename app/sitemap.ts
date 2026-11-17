import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/fidelium", "/servicios", "/compraventa-protegida", "/remates-judiciales", "/experiencia", "/contacto"];
  return routes.map((route, index) => ({
    url: `https://fidelium.cl${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : .8,
  }));
}
