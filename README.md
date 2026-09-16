# Delhi Fight Against Electricity Bills Society — homepage

An editable, image-led homepage preview. Scope is the homepage only. Navigation links target sections on this page; information dialogs hold supporting copy. There are no live forms, uploads, case records or CMS connections. Search engines are asked not to index this preview.

## Run locally

```sh
npm run dev
```

The preview uses port 5173. The project uses React, TypeScript, App Router conventions, Tailwind, Radix primitives and the Sites Vinext runtime.

## Edit the homepage

- `app/page.tsx`: sections, short visible copy and image placement.
- `app/globals.css`: colours, typography, spacing and responsive layouts.
- `content/home.ts`: identity, registration facts, navigation and detail-dialog copy.
- `components/site/`: shared header, footer and information dialog.
- `public/images/`: local responsive images.
- `docs/image-assets.md`: image provenance, prompts and replacement guidance.

## Validate

```sh
npx tsc --noEmit
npm run lint
npm run build
```

The original frontend specification remains the reference for later pages. Registration facts, governance caption, source files and editorial copy require approval before public launch. Images are illustrative AI-generated scenes, not records of Society activities.
