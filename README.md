# arjunrsharma.com

Redesigned personal brand site for Arjun R Sharma — built with
[Astro](https://astro.build) + Tailwind CSS v4, deployed on GitHub Pages via
GitHub Actions. The blog is a "backend" in the sense of structured content:
posts are Markdown files with typed frontmatter, no database or server
required.

## Stack

- **Astro** — static site generator, zero client-side JS by default
- **Tailwind CSS v4** — utility styling, configured via `@theme` in
  `src/styles/global.css`
- **Astro Content Collections** — the blog "backend": typed Markdown posts in
  `src/content/blog/`
- **@astrojs/sitemap** — auto-generated `sitemap-index.xml`
- **@astrojs/rss** — auto-generated `/rss.xml`

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, brands, services preview, recent posts, CTA |
| `/about` | Bio, differentiators, experience timeline |
| `/services` | All 7 services in detail |
| `/blog` | Blog index |
| `/blog/[slug]` | Individual post |
| `/contact` | Email CTA + what to include |
| `/rss.xml` | RSS feed of published posts |

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

Requires Node 18.20.8+ or 20.3.0+ (works on Node 20/22).

## Writing a new blog post

1. Add a new Markdown file to `src/content/blog/`, e.g.
   `src/content/blog/my-new-post.md`. The filename becomes the URL slug.
2. Add frontmatter at the top:

   ```md
   ---
   title: "Your post title"
   description: "One or two sentences — used for previews, RSS, and SEO."
   pubDate: 2026-09-20
   tags: ["seo", "case study"]
   draft: false
   # optional:
   cover: "/blog/my-new-post/cover.jpg"
   coverAlt: "Description of the cover image"
   ---

   Your post content in Markdown goes here.
   ```

3. If you're using a cover image, drop the image file under
   `public/blog/my-new-post/cover.jpg` (any path under `public/` works — just
   match it in the `cover` frontmatter field).
4. Set `draft: true` to keep a post out of the build while you're still
   writing it; flip it to `false` (or remove it) to publish.
5. Commit and push to `main` — GitHub Actions rebuilds and redeploys the site
   automatically. That's the entire publishing workflow: no CMS login, no
   database, no separate backend to keep running.

You can also just edit/add Markdown files directly on GitHub.com (the pencil
icon on any file, or "Add file" in `src/content/blog/`) if you don't want to
touch git locally — a push to `main` from the web editor triggers the same
deploy.

## Deploying to GitHub Pages (one-time setup)

1. Push this repo to GitHub (replacing whatever is currently in your
   `arjunrsharma.com` repo, or as a new repo).
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Since this site uses the custom domain `arjunrsharma.com`
   (see `public/CNAME`), go to **Settings → Pages → Custom domain**, confirm
   it shows `arjunrsharma.com`, and make sure your DNS still points at GitHub
   Pages (this shouldn't need to change if the domain already worked before —
   GitHub Pages reads `public/CNAME`, which is committed in this repo).
4. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the
   site and deploys it automatically. Check the **Actions** tab for build
   status.

No secrets or tokens need to be configured — `actions/deploy-pages` uses the
repo's built-in permissions.

## Things to double-check / personalize before launch

- **LinkedIn URL** in `src/consts.ts` (`SOCIAL_LINKS`) is a placeholder
  (`linkedin.com/in/arjunrsharma`) — update it to your real profile URL, or
  remove the line if you'd rather not link it.
- **`public/og-default.png`** is a generated placeholder social-share image.
  Swap it for a real photo/design if you want something more personal — same
  filename, same 1200×630 dimensions.
- **Content** on Home/About/Services/Contact was pulled from the previous
  live site (`src/data/profile.ts` and the page files) — it's your real bio,
  experience, and client list, but worth a read-through in case anything's
  changed since.
- The first blog post (`src/content/blog/why-traffic-that-lasts-beats-traffic-you-rent.md`)
  is a sample post written to match your voice/positioning — edit it, replace
  it, or delete it.
- **Contact page** is email-only (`mailto:`) since this is a fully static
  site with no server to process form submissions. If you'd rather have an
  actual form, the simplest no-backend option is a service like
  [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) —
  they give you a POST endpoint you can point a plain HTML `<form>` at, no
  server code needed on your end. Happy to wire that in if you want it.

## Project structure

```
src/
  components/     Header, Footer, SEO meta component
  content/
    blog/         Blog posts (Markdown, this is the "backend")
    config.ts     Frontmatter schema for blog posts
  data/
    profile.ts    Services, experience, brands, differentiators
  layouts/
    BaseLayout.astro
  pages/
    index.astro, about.astro, services.astro, contact.astro
    blog/index.astro, blog/[...slug].astro, rss.xml.js
  styles/
    global.css    Tailwind + design tokens + blog post typography
  consts.ts       Site-wide constants (title, nav, email, social links)
public/
  CNAME           Custom domain for GitHub Pages
  robots.txt, favicon.svg, og-default.png
.github/workflows/deploy.yml   Build + deploy to GitHub Pages on push to main
```
