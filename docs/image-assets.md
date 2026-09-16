# Homepage imagery

Generated with the built-in image_gen tool for the homepage revision. These are fictional illustrative scenes, not evidence of Society activities. The footer discloses this. Files are stored locally and served without third-party image requests.

## Final files

- `public/images/neighbourhood-hero.webp` — desktop hero background, 1672 × 941.
- `public/images/neighbourhood-hero-mobile.webp` — smaller hero source, 900px wide.
- `public/images/bill-review.webp` and `bill-review-640.webp` — bill-awareness section.
- `public/images/community.webp` and `community-640.webp` — About section.

WebP derivatives preserve the source composition. CSS handles display cropping. The hero loads eagerly; supporting images load lazily with responsive sources.

## Prompt set

### Neighbourhood hero
Photorealistic editorial wide 16:9 rooftop view of a fictional Delhi-inspired residential neighbourhood at blue hour, everyday brick and plaster apartment buildings, warm lit windows and subtle electricity infrastructure. Main architectural details on right, quieter dark left for headline. Navy dusk and restrained warm lights. No accurate landmarks, signs, logos, emblems, text, protests or identifiable people.

### Bill awareness
Photorealistic editorial 3:2 landscape close-up of anonymous Indian adult hands examining a generic electricity statement on a light table with calculator and pen, subtle household background. Natural daylight, navy and warm neutral details. No legible bill numbers, names, logos or text; no faces. Illustrative scene, never evidence of actual Society activities.

### Community collaboration
Photorealistic editorial 3:2 landscape of anonymous Indian adults seated around a table discussing paperwork, chiefly hands, notebooks and gestures, cropped below faces. Inviting daylight; navy, white and muted colors. No faces, official emblems, logos or readable text. Illustrative community collaboration, not a real Society meeting.

## Replacing images
Use the same filenames or update `app/page.tsx`. Replace both large and small sources together. Update alt text and remove or revise the AI-imagery disclosure if authentic approved photographs replace all generated imagery. Do not identify people or describe a Society event without verified context and permission.
