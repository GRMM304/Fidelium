# FIDELIUM — sitio web

Sitio de FIDELIUM (Next.js sobre [vinext](https://github.com/cloudflare/vinext)), desplegado como Cloudflare Worker.

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # compila a dist/
npm run deploy   # compila y publica con wrangler
```

## Despliegue

Cloudflare Workers Builds conectado a este repositorio: cada push a `main` compila (`npm run build`) y publica (`npx wrangler deploy`).
