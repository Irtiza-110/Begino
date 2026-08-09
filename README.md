# BEGINO — Premium Essentials Store

A monochrome, Apple-inspired storefront built with TanStack Start, React 19, TypeScript, and Tailwind CSS v4. Features a full product catalog, cart drawer, collection pages, product detail pages, and a suite of info pages (about, FAQ, shipping, returns, terms, privacy, etc.).

![BEGINO](https://fonts.googleapis.com/css2?family=Archivo:wght@800)

## Tech Stack

- **Framework:** TanStack Start v1 (full-stack React 19, SSR/SSG ready)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (native `@import` + `@theme` tokens)
- **UI:** shadcn/ui (New York style) + Radix primitives
- **Icons:** lucide-react
- **Build:** Vite 8
- **Package Manager:** Bun (or npm/pnpm/yarn — your choice)

## Project Structure

```
begino-store/
├── public/                 # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/             # Product & hero images (bundled)
│   ├── components/
│   │   ├── site/           # Store-specific UI (Header, Footer, Cart, Cards…)
│   │   └── ui/             # shadcn/ui primitive components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities, product data, cart context
│   ├── routes/             # File-based routes (TanStack Router)
│   │   ├── __root.tsx      # App shell — layout, providers, global meta
│   │   ├── index.tsx       # Home page
│   │   ├── men.tsx         # Collection pages…
│   │   ├── product.$slug.tsx  # Dynamic product pages
│   │   └── ...
│   ├── router.tsx          # Router instance
│   ├── routeTree.gen.ts    # Auto-generated route tree (do not edit)
│   ├── server.ts           # SSR entry point
│   ├── start.ts           # Client/server bootstrap
│   └── styles.css         # Tailwind v4 + design tokens
├── components.json         # shadcn/ui config
├── eslint.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+ (install via [nvm](https://github.com/nvm-sh/nvm) recommended)
- [Bun](https://bun.sh) (optional, but recommended for speed)

### Install & Run

```sh
# Using bun (recommended)
bun install
bun run dev

# Or using npm
npm install
npm run dev
```

The dev server starts at `http://localhost:8080`.

### Build for Production

```sh
bun run build     # or: npm run build
bun run preview   # preview the production build
```

## Available Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `dev`             | Start the dev server (HMR)           |
| `build`           | Production build                     |
| `build:dev`       | Build in development mode            |
| `preview`         | Preview the production build locally |
| `lint`            | Run ESLint                           |
| `format`          | Format code with Prettier            |

## Deployment

This project targets edge/serverless runtimes (e.g. Cloudflare Workers) via Nitro.
Run `bun run build` and deploy the output directory per your hosting provider's
instructions. It also works on Node-based hosts with `bun run preview`.

## Customization

- **Products & catalog:** Edit `src/lib/products.ts`
- **Colors & design tokens:** Edit `src/styles.css` (`:root` variables)
- **Layout & navigation:** Edit `src/routes/__root.tsx` and `src/components/site/`
- **Add a route:** Create a new `.tsx` file under `src/routes/`

## License

This project is yours to use, modify, and deploy.
