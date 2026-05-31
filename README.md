# EzTrove website

Marketing site for EzTrove — built in Angular 18, served as static files by nginx in Docker.

## Pages

| Route          | Component               |
|----------------|-------------------------|
| `/`            | Home — hero, how-it-works, features, testimonials, FAQ, CTA |
| `/marketplaces`| Per-marketplace breakdown (Amazon, eBay, Walmart, Shopify, AliExpress) |
| `/fulfillment` | Fulfillment service detail + returns workflow |
| `/pricing`     | Four-tier pricing with monthly/annual toggle |
| `/blog`        | Post grid (six example articles) |
| `/contact`     | Contact form + sales/support emails |

Each route has its own page title, its own URL, and its own component tree.

## Run it

```bash
docker compose up -d --build
open http://localhost:12090
```

Health check: `GET /healthz` returns `ok`.

To stop: `docker compose down`.

## Local dev (without Docker)

```bash
npm install
npm start          # ng serve on http://localhost:4200
npm run build      # production bundle in dist/eztrove/browser
```

## Architecture notes

- **Angular 18.2** with the new `:application` builder and standalone components throughout.
- **Tailwind CSS** for styling. The brand palette lives in `tailwind.config.js` under `theme.extend.colors.brand`.
- **Multi-page feel** — each route is a distinct URL with its own title and its own route component. The site is bundled as a single JS app (Angular SPA under the hood) and nginx falls back to `index.html` for any unknown path, letting the router pick up. Initial paint is the SPA shell; the route's content renders on bootstrap. For true server-rendered HTML per route (Angular SSR / prerender) see the *Prerender* section below.
- **Docker image** is a multi-stage build: `node:20-alpine` compiles, `nginx:1.27-alpine` serves the `dist/eztrove/browser` output. Final image is small and stateless.
- **nginx config** ships gzip, long-cache headers for hashed assets, and SPA fallback.

## Prerender (future improvement)

If SEO and first-paint matter more than build simplicity, switch to Angular's prerender mode. The hooks are still in place:

1. Add back `@angular/ssr`, `@angular/platform-server`, `express` to `package.json`.
2. Restore `src/main.server.ts`, `src/server.ts`, and `src/app/app.config.server.ts`.
3. In `angular.json` add:
   ```json
   "server": "src/main.server.ts",
   "ssr": { "entry": "src/server.ts" },
   "prerender": { "routesFile": "routes.txt", "discoverRoutes": false }
   ```
4. Create `routes.txt` listing every route, one per line.

The known gotcha on Angular 18.2 is a `document is not defined` failure in the post-bundle stage of certain configurations. If you hit it, disable `optimization.styles.inlineCritical` and `optimization.fonts`, drop `withInMemoryScrolling` from `provideRouter`, and drop `provideClientHydration` until prerender succeeds — then add them back one at a time.

## File map

```
_src/
├── Dockerfile              # multi-stage node→nginx
├── docker-compose.yml      # single web service, port 12090:80
├── nginx.conf              # SPA fallback + asset caching
├── angular.json            # Angular 18 application builder
├── package.json
├── tsconfig*.json
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── index.html
    ├── main.ts
    ├── styles.css
    └── app/
        ├── app.component.ts        # shell: <header> <router-outlet> <footer>
        ├── app.config.ts           # bootstrap providers
        ├── app.routes.ts           # 6 routes
        ├── components/
        │   ├── header/header.component.ts
        │   └── footer/footer.component.ts
        └── pages/
            ├── home/home.component.ts
            ├── marketplaces/marketplaces.component.ts
            ├── fulfillment/fulfillment.component.ts
            ├── pricing/pricing.component.ts
            ├── blog/blog.component.ts
            └── contact/contact.component.ts
```

## Content

All copy in this site is original to EzTrove. Section structure (hero, social proof, how-it-works, features, pricing, testimonials, FAQ) follows standard SaaS marketing-site conventions.
