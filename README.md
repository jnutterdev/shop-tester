# The Shop — Astro + TinaCMS + Snipcart

A barebones e-commerce scaffold for books and board games.

## Stack
- [Astro](https://astro.build) — static site generator
- [TinaCMS](https://tina.io) — Git-backed content management
- [Snipcart](https://snipcart.com) — cart & checkout
- Hosted on Cloudflare Pages

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure your keys** — copy `.env.example` to `.env` and fill in:
   - `TINA_CLIENT_ID` and `TINA_TOKEN` from your Tina Cloud dashboard
   - Update `tina/config.ts` with those same values

3. **Add your Snipcart API key** — in `src/layouts/Layout.astro`, replace:
   ```
   YOUR_SNIPCART_PUBLIC_API_KEY
   ```
   with your public API key from the Snipcart dashboard.

4. **Run locally**
   ```bash
   npm run dev
   ```
   This starts both Astro and TinaCMS. Visit `http://localhost:4321` for the
   store and `http://localhost:4321/admin` for the CMS.

## Adding Products

Products live in `src/content/products/` as Markdown files. You can:
- Edit them directly as `.md` files
- Use the TinaCMS admin at `/admin` (your partner will use this)

Each product has: title, description, price, stock, category, image, featured flag.

## Deploying to Cloudflare Pages

Build command: `npm run build`  
Output directory: `dist`

Make sure to set your env vars (`TINA_CLIENT_ID`, `TINA_TOKEN`) in the
Cloudflare Pages dashboard under Settings → Environment Variables.
