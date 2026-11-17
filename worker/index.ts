/** Cloudflare Worker entry point for the FIDELIUM site. */
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Páginas antiguas fusionadas en la portada (secciones con ancla).
    const fusionadas: Record<string, string> = { "/fidelium": "fidelium", "/servicios": "servicios", "/experiencia": "experiencia", "/contacto": "contacto" };
    const ancla = fusionadas[url.pathname.replace(/\/$/, "")];
    if (ancla) return Response.redirect(`${url.origin}/#${ancla}`, 301);

    // next/image points at /_vinext/image. Image transformations are not enabled
    // on this Cloudflare account, so serve the original static file instead.
    if (url.pathname === "/_vinext/image") {
      const src = url.searchParams.get("url") ?? "";
      if (!src.startsWith("/") || src.startsWith("//")) {
        return new Response("Bad image url", { status: 400 });
      }
      const asset = await env.ASSETS.fetch(new Request(new URL(src, url.origin)));
      const headers = new Headers(asset.headers);
      if (asset.ok) headers.set("Cache-Control", "public, max-age=31536000, immutable");
      return new Response(asset.body, { status: asset.status, headers });
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
