# Editing website content

The page components live in `app/` and the shared copy is stored in `site-content.json`.

Use these page modules to find the content used by each route:

- `content/pages/home.ts` → `app/page.tsx`
- `content/pages/about.ts` → `app/about/page.tsx`
- `content/pages/our-work.ts` → `app/our-work/page.tsx`
- `content/pages/bill-help.ts` → `app/bill-help/page.tsx`
- `content/pages/contact.ts` → `app/contact/page.tsx`
- `content/pages/news-media.ts` → `app/news-media/page.tsx`

To change wording, edit the matching page key in `content/site-content.json`. The page files contain layout and structure; the JSON contains editable copy, lists and page data.
