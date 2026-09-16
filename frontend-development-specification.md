# Delhi Fight Against Electricity Bills Society
## React Frontend Development Specification

Version 1.0 • 16 September 2026 • Implementation handoff

**Recommended platform:** React + Next.js App Router + TypeScript + Tailwind CSS. React + Vite + React Router is an alternative where static hosting is mandatory. No WordPress, PHP theme, page builder or WordPress plugin dependency is required.

**Document status:** Build specification with source-derived organisational details and explicitly proposed product decisions. Backend services, editorial approvals and production credentials are dependencies, not existing capabilities.

## Contents

1. Source basis and factual boundaries
2. Project overview and goals
3. Scope and priority
4. Architecture and technology choices
5. Information architecture and route map
6. Design system
7. Global layout and responsive behaviour
8. Page-by-page UI specifications
9. Shared interaction and content patterns
10. React component architecture
11. Content and data models
12. API integration contracts
13. Forms and validation
14. Accessibility
15. SEO and discoverability
16. Performance
17. Security and privacy
18. Folder structure and engineering conventions
19. Content preparation and publishing
20. Implementation phases
21. Testing checklist
22. Acceptance criteria
23. Decisions and dependencies before launch
24. Technical references

## 1. Source basis and factual boundaries

The referenced conversation, “Website structure creation”, was reviewed alongside ten retrieved image attachments. Several attachments are duplicates; one is a tiny, unusable crop. The original message mentions twelve images, so the retrieved set is not assumed to be complete. The local `sources/` folder contained no files when this document was prepared. All source files are reference-only.

### 1.1 Source register

| ID | Retrieved material | Observation | Intended use and limits |
|---|---|---|---|
| S1 | WhatsApp Image 2026-09-16 at 10.21.57 (3).jpeg | Registration certificate bearing the Society name, number, address and date | Registration page and approved trust information; visual transcription is not independent registry verification |
| S2 | WhatsApp Image 2026-09-16 at 10.21.56 (3).jpeg; duplicate 10.21.56.jpeg | Patparganj F.I.E. Entrepreneurs Association (Regd.) letter, reference MMM/2024/286, dated 24 July 2024; refers to a meeting on 18 July 2024 | Historical initiative/support archive; predates the registered Society |
| S3 | WhatsApp Image 2026-09-16 at 10.21.57 (2).jpeg; duplicate (1).jpeg | Hindi newspaper clipping labelled Navbharat Times, New Delhi, 14 July 2026, page 5; discusses PPAC | Historical media item; source claims must not become unqualified current tariff guidance |
| S4 | WhatsApp Image 2026-09-16 at 10.21.56 (5).jpeg; duplicate (2).jpeg | Another Hindi clipping concerning monthly PPAC review; complete publication date not visible | Hold publication date as unknown until verified; do not infer it from the WhatsApp filename |
| S5 | WhatsApp Image 2026-09-16 at 10.21.56 (4).jpeg; duplicate (1).jpeg | Group photograph outside a sign reading Public Grievances Commission, M-Block Vikas Bhawan, IP Estate, New Delhi–110110 | Gallery/journey after publication clearance; does not establish a filing, hearing, ruling or event date |
| S6 | WhatsApp Image 2026-09-16 at 10.21.57.jpeg | Tiny crop without usable substantive content | Exclude from public assets |

No person in a photograph has been identified. Do not infer names, positions, affiliations or participation in a particular proceeding from appearance. The earlier conversation also described placard photographs; those were not present in the retrievable set and must not be treated as reviewed assets.

### 1.2 Organisational facts transcribed from S1

| Field | Source-derived value |
|---|---|
| Registered name | DELHI FIGHT AGAINST ELECTRICITY BILLS SOCIETY |
| Registration number | ROS/OUTER NORTH/2026/52 |
| Certificate date | 20 July 2026 |
| Registration wording | Under Societies Registration Act XXI of 1860 |
| Working area | Delhi |
| Registered address | Plot No. 86, Pocket-C, Sector-2, DSIIDC Bawana, Delhi–110039 |
| Issuing authority shown | Registrar of Societies, District Outer North, Govt. of NCT of Delhi |

The certificate includes conditions about the registered name and indicating private governance. Preserve the full registered name in the identity lockup and footer, avoid a public-facing acronym or translated organisation name, and include a governance caption beneath the identity. Proposed caption: “Governed by a private body/society.” Have the Society confirm final wording against the original certificate. Do not reuse the government emblem as the Society logo or imply government ownership.

### 1.3 Editorial boundaries

- Mission, vision and objectives in the prior discussion are proposed website language. They are not verified registered objects; check them against the Memorandum/Rules before publication.
- The 2024 letter is evidence of earlier initiative support. Do not label it a 2024 endorsement of a Society registered in 2026. Preserve the letter’s wording in an approved source copy; describe disputed charges as the letter’s position.
- The photograph supports a location description only. Suggested alt text: “Group standing outside the Public Grievances Commission building.” Record event purpose/date only when separately confirmed.
- Newspaper articles are media reporting. Keep publisher, date, rights and source reference separate from the Society’s commentary. Do not hard-code reported percentages as current rates.
- No verified Society telephone, email, logo, office hours, governing-body roster or membership rules were supplied. Never reuse association letterhead contact details as Society contact details.
- This specification defines how to display regulatory information; it does not establish current rates, legal deadlines, outcomes or legal advice. Any such production content requires a current primary source and editorial review.

## 2. Project overview and goals

Build the Society’s public website as a credible consumer-awareness, documentation and participation platform for Delhi electricity consumers. Visitors should quickly understand the organisation, learn about their bills, inspect source documents, follow documented activities and submit a private issue or participation enquiry.

Proposed positioning: “Working for awareness, transparency and representation in electricity billing.” Keep this as editable, approval-required copy. Submissions go to the Society; they are not automatically complaints filed with a DISCOM, regulator or public authority.

| Audience | Main need | Primary journey |
|---|---|---|
| Domestic consumers | Understand charges and describe a concern | Home → Bill Help → Submit Your Issue |
| Commercial/industrial consumers | Find relevant records and raise billing concerns | Search/Documents → Representation → Issue form |
| Associations and businesses | Explore collaboration | About → Earlier support records → Join Us |
| Media and researchers | Find dated, attributable evidence | News → Document detail → Original source |
| Society editors | Maintain accurate public information | Separate CMS → Review → Publish |

Product goals are: establish identity; educate consumers; collect usable private submissions; preserve representations and activities; publish attributable updates; enable participation. Proposed measurement events include successful submission, document download and navigation to bill-help articles. Measure aggregate completion/error rates; never include form text or identifying information in analytics. Establish numerical conversion targets after a baseline period rather than inventing success statistics.

## 3. Scope and priority

**Launch scope (P0):** public identity and registration; cause and bill-help content; document library; representations archive; news/media; gallery; issue intake; participation and contact forms; privacy/disclaimer/terms/accessibility pages; search; responsive accessible UI; editorial workflow integration.

**Conditional content:** governing body, detailed journey, contact channels, regulatory explainers and individual archive entries only go live with approved source material. Build templates now, omit unavailable links and empty homepage modules in production.

**Later scope (P1):** reviewed Hindi translations, additional educational articles, richer search and approved email subscriptions. English launch content must support Unicode and Hindi source titles.

**Separate future projects:** authenticated case tracking, membership approval/payment, donations, tariff calculators, automatic bill OCR, chatbots, public grievance maps and a custom administration application. Do not expose decorative controls for these features at launch.

## 4. Architecture and technology choices

### 4.1 Recommended implementation

Choose Next.js because most routes contain public articles and documents that benefit from initial HTML, share metadata and route-level rendering. Use React Server Components for public content and small client components for filters, forms, navigation and the lightbox. These boundaries are supported by the [Next.js component documentation](https://nextjs.org/docs/app/getting-started/server-and-client-components).

| Layer | Decision | Implementation guidance |
|---|---|---|
| UI | React with TypeScript strict mode | Typed props, runtime validation at API boundaries; no implicit `any` |
| Framework | Next.js App Router | Built-in routing; do not install React Router in this implementation |
| Styling | Tailwind CSS with CSS custom-property tokens | Central variants for controls; CSS Modules reserved for complex viewer/print styles |
| Forms | React Hook Form + Zod | Client feedback and matching server-side validation; backend remains authoritative |
| Server content | Typed fetch adapter | CMS reads remain server-side; project-defined cache/revalidation policy |
| Browser remote state | TanStack Query only where needed | Useful for interactive result sets; avoid duplicating server-content caches |
| Local state | React state/reducer | Drawer, lightbox and form wizard state; Context only for truly shared settings |
| Content backend | CMS-neutral headless API | Structured content and restricted editor access; vendor selection remains open |
| Intake backend | Same-origin service/BFF | Private records, upload checks, consent evidence, notification queue |
| Assets | Public CDN + separate private object store | Approved public documents versus private consumer uploads |
| Tests | Vitest, React Testing Library, Playwright, axe | Contract, interaction, browser and accessibility verification |
| Quality | ESLint, formatter, TypeScript, CI | Lock dependency versions and use a supported Node runtime at implementation |

Tailwind supports composing interfaces with utility classes; keep project tokens and reusable variants consistent ([Tailwind documentation](https://tailwindcss.com/docs/styling-with-utility-classes)). Zod provides runtime schema validation and type inference; its documentation also lists the React Hook Form integration ([Zod documentation](https://zod.dev/)). TanStack Query is suitable for asynchronous server-state handling, not ordinary UI toggles ([TanStack Query overview](https://tanstack.com/query/latest/docs/framework/react/overview)). These are design choices; version numbers should be pinned when development starts.

### 4.2 Vite alternative

Choose React + Vite + TypeScript + React Router only if the deployment requires a static SPA or the delivery team already has a reliable prerendering pipeline. Vite provides the development/build tooling; React Router provides client routing ([Vite guide](https://vite.dev/guide/), [React Router routing](https://reactrouter.com/start/declarative/routing)).

Keep the same route map, domain models, form schemas and components. Replace `app/` route files with `routes/` and an application router. Use TanStack Query for remote lists/details. Configure deep-link rewrites, true missing-page handling at the host where possible, and prerender every published public detail URL. A client-only title update is not a substitute for shareable metadata in initial HTML. If reliable prerendering, sitemap updates and HTTP status behaviour cannot be provided, retain the recommended Next.js approach.

### 4.3 Rendering and integration boundaries

Public content may be cached; proposed revalidation is five minutes plus a signed CMS publish/unpublish webhook. Unpublishing sensitive material must purge both page and asset caches promptly. Preview and intake responses use `no-store`. Server secrets never appear in browser bundles. Local fixtures mirror contracts for UI development, but production forms require a working service and must never simulate success.

## 5. Information architecture and route map

Group the navigation into six destinations to accommodate the long Society name: About, Bill Help, Our Work, Resources, Join Us, Contact. The logo links home; “Submit Your Issue” is the persistent primary CTA. About includes Our Cause; Our Work includes Representations and Journey; Resources includes News, Documents and Gallery. All destinations also appear in the footer.

| Route | Template and purpose | Publication requirement |
|---|---|---|
| `/` | Home | Approved identity and primary links |
| `/about` | Society overview | Approved introduction |
| `/about/mission` | Mission and objectives | MOA-aligned approved wording |
| `/about/registration` | Registration facts and certificate | Reviewed public certificate copy |
| `/about/governing-body` | Named role cards | Explicit roster, biographies and permissions |
| `/about/journey` | Dated history and activity timeline | Evidence-backed milestones |
| `/our-cause` | Issues, Society position and approach | Approved advocacy copy |
| `/bill-help` | Education hub | Published guides |
| `/bill-help/understand-your-bill` | Annotated bill guide | Synthetic/redacted example |
| `/bill-help/bill-components` | Component glossary | Reviewed explanatory copy |
| `/bill-help/ppac-fppas` | Sourced explainer | Primary sources and review date |
| `/bill-help/grievance-process` | External process guidance | Verified official links and review date |
| `/submit-issue` | Private issue intake | Operational API and privacy notice |
| `/submit-issue/confirmation` | Receipt | Transient successful-session data; noindex |
| `/representations` | Searchable archive | Published representation records |
| `/representations/[slug]` | Narrative, chronology and evidence | Approved record with sources |
| `/news` | Updates and media listing | Published posts |
| `/news/[slug]` | Article/media detail | Attribution and source review |
| `/documents` | Document library | Approved public assets |
| `/documents/[slug]` | Document metadata and viewer | Approved asset and readable summary |
| `/gallery` | Album listing | Cleared images and captions |
| `/gallery/[slug]` | Album and accessible lightbox | Ordered assets |
| `/join` | Participation options | Approved enquiry wording |
| `/join/individual` | Individual interest form | Operational API |
| `/join/association` | Organisation collaboration form | Operational API |
| `/join/volunteer` | Volunteer interest form | Operational API |
| `/contact` | Verified contacts and enquiry form | At least one operational contact path |
| `/search` | Cross-content search | Public search index |
| `/privacy` | Privacy notice | Approved actual data practices |
| `/disclaimer` | Role and information boundaries | Approved copy |
| `/terms` | Website-use terms | Approved copy |
| `/accessibility` | Accessibility statement/contact | Tested status and contact path |
| unmatched route | 404 with search and home link | Always available |

Archive categories use URL parameters, e.g. `/documents?category=registration&year=2026&page=1`. Do not create duplicate category routes unless they become curated landing pages. Redirect any implemented legacy `/our-cause/ppac-fppas` URL to the canonical `/bill-help/ppac-fppas` route. Use lowercase kebab-case slugs and permanent redirects when a published slug changes.

## 6. Design system

The visual direction is calm, institutional and citizen-focused. Use a white base, navy typography and modest orange accents. Avoid unsupported “victory” graphics, political-party branding, dramatic bill-saving claims and decorative government symbols. Use a full-name typographic lockup until an approved logo exists.

### 6.1 Tokens

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#123B67` | Primary buttons, headings, links |
| `--color-primary-hover` | `#0B2B4D` | Hover/dark sections |
| `--color-accent` | `#F28C28` | Highlights with dark text; not white body text |
| `--color-text` | `#1B2430` | Body text |
| `--color-muted` | `#475467` | Metadata and help text |
| `--color-surface` | `#FFFFFF` | Main surfaces |
| `--color-surface-alt` | `#F6F7F9` | Alternating sections |
| `--color-tint` | `#EAF3FA` | Educational callouts |
| `--color-border` | `#DDE2E8` | Decorative separators |
| `--color-control-border` | `#667085` | Form-control boundaries |
| `--color-success` | `#166534` | Success text with icon |
| `--color-error` | `#B42318` | Error text and borders |
| `--color-focus` | `#005FCC` | Visible focus outline with contrasting offset |

Check actual foreground/background combinations in every state. Decorative border colour must not be relied upon as the only visible input boundary.

Typography: self-host Inter or a system sans-serif stack; add Noto Sans Devanagari for Hindi text. Body 16px/1.6; lead 20px/1.5; small 14px/1.5. Desktop H1 48–56px, H2 36–40px, H3 26–28px; mobile H1 32–36px, H2 28px, H3 22px. Use fluid sizing with a bounded `clamp()`. Keep reading width around 68 characters and avoid uppercase long paragraphs.

Spacing scale: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96px. Radius: 8px controls, 12px cards. Shadows: one restrained card shadow and one overlay shadow. Section padding: 80px desktop, 48px mobile. Button minimum height: 48px; touch targets at least 44×44px as the project standard. Input minimum height: 48px; textarea at least 160px.

Primary button: navy/white; secondary: navy border/text on white; accent: orange/dark text; destructive: red with explicit action wording. Define default, hover, pressed, focus, disabled, loading and error variants. Disabled controls must retain readable labels; loading buttons include text such as “Submitting…” and reserve width. Navigation uses links, actions use buttons.

## 7. Global layout and responsive behaviour

| Width | Layout | Navigation and controls |
|---|---|---|
| 320–639px | Single column, 16px gutters | Menu button and full-name stacked identity; full-width form actions |
| 640–1023px | Two-column cards where each remains at least 260px; 24px gutters | Drawer navigation; filters in disclosure panel |
| 1024–1279px | Main/sidebar layouts when content fits | Keep drawer if identity and menu would overlap |
| 1280px and above | Maximum 1280px content, 32px gutters | Full desktop navigation and CTA |

Header height is content-driven; reserve sufficient space for the full name and governance caption. A desktop utility strip may show approved registration details and verified contact links. The main header may be sticky, but must not hide focused elements or consume excessive height on small screens. Use `scroll-margin-top` for anchors. Do not shrink the name into illegibility or truncate it with ellipses.

Mobile menu: labelled dialog/drawer, close control, Escape support, focus trap and restoration, background inertness, explicit submenu buttons with `aria-expanded`. Lock background scrolling without jumping the page. Desktop dropdowns open by click/keyboard; hover is optional enhancement.

Footer: identity/governance caption; navigation groups; verified contact/address; privacy, terms, disclaimer and accessibility links. Do not populate telephone, social or office-hour placeholders. Use current year for copyright without implying all third-party content is owned by the Society.

At 320px and 400% zoom, content must reflow without page-wide horizontal scrolling. Tables may use a labelled local scroll region or stacked records. Images maintain intrinsic aspect ratio; certificate/letter previews use `contain`, never crop source text. No auto-playing carousel. Reading order follows DOM order across breakpoints.

## 8. Page-by-page UI specifications

Every public page uses one H1, breadcrumb navigation except Home, an appropriate title/description and an accessible main landmark. Only render approved records. Detail pages offer related content without overwhelming the main article. All listing/detail requests use the common states in section 9.

### 8.1 Home

Order: header → hero → registration facts → Society introduction → four focus areas → bill-help feature → recent work → important documents → latest updates → issue CTA → participation → small gallery preview → footer.

Hero uses a 55/45 text/image split on wide screens and text-first stacking on mobile. H1 contains the full Society name. Supporting copy explains awareness and representation. CTAs: “Understand Your Bill” and “Submit Your Issue”. Use an approved real image with a neutral caption or a simple non-photographic layout if no suitable hero asset exists. Do not turn the Commission photograph into implied endorsement.

Registration facts: number, working area and certificate date, all linked to Registration. Focus cards: Bill Awareness, Consumer Representation, Regulatory Awareness, Collective Participation. Show up to three work cards, three documents and three news items. Hide optional sections with no published content. The journey process can be an explanatory sequence, but must not imply documented milestones or outcomes. Do not display fabricated counts of members, resolved cases or savings.

Completion: visitor can reach Bill Help and issue intake without opening the menu, and can inspect registration within one link from the trust section.

### 8.2 About the Society

Introduction → mission preview → what the Society does → operating area → registration panel → participation CTA. Use a two-column facts panel on desktop and stack it below the introduction on mobile. Clearly distinguish proposed activities from established achievements. Link to Mission, Registration and Journey; show Governing Body only when approved records exist.

### 8.3 Mission and objectives

Short mission/vision → numbered objectives → practical approach → source/version note. Objectives must be approved against governing documents. Use ordinary text or icon-supported lists, not promotional counters. If approval is pending, keep the page unpublished and omit its navigation link.

### 8.4 Registration

H1 → factual definition list from S1 → governance caption → accessible certificate summary → preview → “Open certificate”/“Download” with file type and size. Show the source date separately from the website’s publication date. Provide text transcription of relevant fields; a scanned image alone is insufficient. Use an approved/redacted derivative where necessary and retain original provenance internally.

### 8.5 Governing body

Role-grouped cards with explicit supplied names, roles, term dates and optional approved biographies/photos. No roster inferred from a letterhead or group photo. Missing biography/photo fields are simply omitted. Do not invent avatars that resemble real people. Until the roster is supplied, do not publish this page as an empty team grid.

### 8.6 Our journey

Intro → vertical timeline → linked evidence → related albums. Each item has a date or “Date not confirmed”, title, neutral summary and source links. Put 2024 background activity in an “Earlier initiative” grouping and 2026 registration in a separate milestone. A process diagram such as “Document → Represent → Follow up” must be labelled “Our approach”, not presented as event history.

### 8.7 Our cause

Intro → issue themes → Society’s stated position → evidence links → approach → Bill Help/issue CTA. Topics include bill understanding, adjustments, transparency and consumer participation. Use labelled blocks for “Society’s position” and “Source documents”. Link PPAC/FPPAS to the single canonical explainer. Avoid unsupported claims that a charge is unlawful or that a refund is available.

### 8.8 Bill Help hub

Question-led cards: Understand Your Bill; Bill Components; PPAC/FPPAS; Raising a Grievance. Add a short glossary preview and “Still need to share a concern?” CTA. Provide reviewed-date metadata. No live rates or bill calculator in launch scope.

### 8.9 Understand your bill

Lead → synthetic/redacted sample bill → numbered callouts → matching text sections → glossary → related guides → issue CTA. The callouts must be operable as buttons and have equivalent textual explanations; do not require hovering. Explain where to find common fields without asserting that every provider uses the same layout. Label the sample as illustrative. On mobile, place the image above a sequential text list.

### 8.10 Bill components

Anchor index → component sections covering consumption/energy, fixed charges, adjustments, applicable taxes/duties and previous balance → source/review note. Each entry has plain-language definition, where it appears and an optional example labelled illustrative. Do not provide formulae or rates without a verified applicability period and source.

### 8.11 PPAC/FPPAS explainer

Plain-language introduction → separately defined terminology → applicable provider/period context → primary-source references → last reviewed date → archive of related updates. Do not assume the terms are interchangeable in every order. Historical percentage examples, if later approved, require provider, consumer category where relevant, effective period and order URL. Newspaper clippings can appear as related reporting, not the controlling source. This page remains unpublished until the substantive explanation has been reviewed.

### 8.12 Grievance process

Explain the distinction between contacting the Society and using formal provider/authority channels. Present verified steps as an ordered list with official links, required information and source review date. Do not infer legal sequencing or response deadlines. Keep “Submit to the Society” as a separately labelled CTA. External form destinations must be named before opening. Show a correction-contact link for outdated instructions.

### 8.13 Submit Your Issue and confirmation

Intro with scope → privacy explanation → three-step form (contact, issue, review/consent) → submitted receipt. Desktop form max-width 800px, with a help panel; mobile is one column. Field requirements are in section 13. Steps remain editable before submission; validate the current step before advancing. Back navigation preserves values only in memory. Warn before leaving an unsent form where supported.

On durable acceptance, show a reference, received timestamp and truthful next-step copy. Do not state “complaint resolved” or promise a response time that has not been operationally agreed. Allow copying the receipt reference; do not place personal details or references in URL parameters. Direct access to the confirmation URL without success state shows “No recent submission to display” and a form link. Receipt alone is not a credential for viewing a case.

### 8.14 Representations archive and detail

Archive: title/intro → search → filters (type, year, authority, historical initiative/Society) → result count → cards → pagination. Card fields: title, recipient institution if verified, submission/event date, record type and evidence-backed status. Types include government, regulatory, association engagement and meetings.

Detail: title → date/recipient/status → summary → issue/background → representation text or synopsis → timeline of documented correspondence → linked documents → related album/news. A visit photo alone cannot set status to “Submitted”. Statuses are “Documented activity”, “Submitted”, “Acknowledged”, “Response received” and “Closed”, with evidence required for each progression. “Closed” does not imply a favourable outcome. Unknown status is displayed as “Status not recorded”.

### 8.15 News and media

Listing categories: Society, Electricity, Regulatory, Media. Cards show category, title, publication date, excerpt and optional approved thumbnail. Filters persist in URL; list 12 records per page. Detail pages show title, publisher/byline where supplied, source/event date, publication/update dates, article body, source references, related documents and correction note if applicable.

Media detail distinguishes a source article from a Society summary. Keep the S3 newspaper date as historical metadata. Obtain rights before republishing full clipping images; use permitted excerpts/links and original summaries where full reproduction is not cleared. Undated S4 content stays draft until adequate attribution is obtained. Do not label all electricity coverage as coverage of the Society.

### 8.16 Documents library and detail

Library categories: Registration, Representations, Government Correspondence, Association Support, Regulatory Orders, Public Notices and Media References. Search title, issuer, subject, reference number and approved summary. Filter by category, issuer, year and language. Show 12 results per page, default date descending, unknown dates last; allow title order. Cards include title, issuer, date/unknown label, format, size and view link.

Detail is the canonical metadata page: title, category, issuer, reference, source date, summary, language, source attribution, version, related records, public preview and explicit download. For unavailable preview show a summary and download/source link, not a blank iframe. The uploaded certificate is a JPEG; do not claim it is a PDF unless an actual derivative has been generated. A replacement document retains version history and a superseded notice where relevant.

### 8.17 Gallery and album

Album cards use one cover, title, category, known event date and photo count. Album detail uses a stable grid, 3 columns desktop, 2 tablet and 1–2 mobile depending on readable image size. Each image has alt text, optional neutral caption and rights metadata in the CMS. Preserve chronology when known. Lightbox supports next/previous, close, Escape, keyboard arrows, focus trapping/restoration and a position label. Provide visible buttons so swipe is never required. No face recognition, face tagging or inferred names.

### 8.18 Join Us and participation forms

Landing page presents Individual Interest, Association Collaboration and Volunteer Interest as three cards. Explain that sending an enquiry does not confer membership. Link to approved eligibility/rules only if supplied; no fee, payment or automatic approval workflow at launch. Each dedicated form has purpose-specific fields, separate consent and an inline acknowledgement from the API. Keep descriptions positive but avoid claiming formal partnerships based solely on historical letters.

### 8.19 Contact

Verified address panel → approved telephone/email if available → enquiry form → location link when verified. Distinguish registered address from a visitor-facing office; do not claim walk-in availability. Avoid loading a tracking map automatically; an ordinary map link is sufficient. Submission success uses the same durable-acceptance rule as issue intake.

### 8.20 Search, policy and system pages

Search uses a labelled query field, content-type filters, result count and 20 results per page. Results include content type, title, short excerpt and date. Search only published public fields; private submissions must never enter the index. No-results copy suggests simpler keywords and offers Bill Help/Documents links.

Privacy, Terms, Disclaimer and Accessibility share a readable article template with contents links, effective/review dates and a verified contact path. Copy must describe actual operations. Accessibility statement reports tested limitations and a support route. The 404 page returns HTTP 404, retains navigation and offers search. A service error offers retry; it must not masquerade as an empty archive. Maintenance state provides a truthful message and a verified alternative contact route when available.

## 9. Shared interaction and content patterns

| State | Required UI behaviour |
|---|---|
| Loading | Stable skeleton matching content shape; announce loading once; avoid layout shift |
| Success | Render validated content and human-readable dates |
| Empty collection | Explain no content has been published; hide empty optional homepage modules |
| No filter matches | Keep filters/query, show reset action and zero count |
| Network/API error | Friendly error with retry; preserve user-entered form values |
| Missing/unpublished detail | True 404 without exposing draft metadata |
| Offline during form submission | Do not report success; retain in-memory values and offer retry |
| Stale public content | Show last-updated metadata where meaningful; never reuse cached private intake responses |

Search submits on Enter/button; live filtering is optional with 300ms debounce and cancellation of older requests. Query limit 120 characters. Changing a filter resets page to 1; Back/Forward restores prior filters and page. Whitelist parameters; use a stable secondary sort by ID. Pagination uses real links, labelled current page and previous/next; preserve scroll/focus sensibly after updates. Do not auto-scroll users while they type.

Dates use `en-IN` display, e.g. 20 July 2026. Store date-only events as `YYYY-MM-DD` and instants as UTC ISO timestamps; render instants in Asia/Kolkata. Never convert a date-only value into a timestamp that could shift the day. Unknown dates are null, not today’s date or upload date.

## 10. React component architecture

| Component group | Components | Responsibility |
|---|---|---|
| Shell | `SiteHeader`, `DesktopNav`, `MobileNav`, `SiteFooter`, `SkipLink` | Identity, navigation and page landmarks |
| Layout | `Container`, `Section`, `PageHeader`, `Breadcrumbs`, `ArticleLayout` | Consistent widths, spacing and semantic hierarchy |
| Primitives | `Button`, `LinkButton`, `Input`, `Select`, `Textarea`, `Checkbox`, `Badge`, `Alert`, `Dialog` | Accessible controls with typed variants |
| Content | `RichText`, `SourceList`, `ReviewMetadata`, `RegistrationFacts`, `Timeline` | Safe structured content rendering |
| Archives | `FilterBar`, `SearchField`, `ResultCount`, `Pagination`, `EmptyState`, `ErrorState` | Shared URL-driven result behaviour |
| Cards | `NewsCard`, `DocumentCard`, `RepresentationCard`, `AlbumCard` | Domain-specific metadata without giant conditional components |
| Media | `ResponsiveImage`, `DocumentPreview`, `GalleryGrid`, `Lightbox` | Accessible media and fallbacks |
| Forms | `FormField`, `ErrorSummary`, `StepIndicator`, `FileUpload`, `ConsentField`, `SubmissionReceipt` | Consistent field and transaction states |
| Features | `IssueForm`, `ParticipationForm`, `ContactForm` | Purpose-specific schemas, workflow and API calls |

Route files compose feature components and fetch public data; they should not contain a large reusable form implementation. Keep domain components independent of CMS payload shape through mapping adapters. Only interactive entry points receive `use client`. Share validated DTO types, not server secrets or database entities, with the browser.

Example component contracts:

```ts
type DocumentCardProps = { document: PublicDocumentSummary };
type PaginationProps = {
  page: number;
  totalPages: number;
  hrefForPage: (page: number) => string;
};
type FileUploadProps = {
  maxFiles: number;
  maxBytesPerFile: number;
  onChange: (files: File[]) => void;
  error?: string;
  disabled?: boolean;
};
```

Do not add Redux/Zustand by default. Form state belongs in React Hook Form, query/filter state in the URL, fetched data in the selected fetch/cache layer and transient UI state locally. No persistent browser store for bill details or uploaded files.

## 11. Content and data models

### 11.1 Shared conventions

All content has a stable internal ID and unique locale/slug pair. CMS records include draft/review/published/archived state, editor audit information and source references; public APIs expose only approved public fields. Editorial state is separate from a representation’s real-world status. Dates may be null when unknown. Use a structured rich-text block schema with allowlisted nodes rather than arbitrary executable HTML/MDX.

```ts
type Locale = "en" | "hi";
type ContentState = "draft" | "review" | "published" | "archived";
type SourceRef = {
  id: string;
  label: string;
  sourceType: "supplied-image" | "official-url" | "media-url";
  url?: string;
  sourceDate: string | null; // ISO date, never inferred from file name
  checkedAt: string | null;
};
type ContentBase = {
  id: string;
  slug: string;
  locale: Locale;
  title: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  reviewedAt: string | null;
  sourceRefs: SourceRef[];
  seo: { title: string; description: string; imageId?: string };
};
type RichBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "sourceLink"; label: string; url: string }
  | { type: "image"; assetId: string; caption?: string };
```

The minimal block schema above is an implementation starting point; add inline links/emphasis through safe structured marks if needed. Do not render heading level 1 from article body content.

### 11.2 Domain records

| Model | Required/domain fields | Relationships and publishing rules |
|---|---|---|
| `SiteSettings` | Full name, governance caption, registration facts, verified address; optional contacts/socials | Single approved configuration; no invented contact defaults |
| `Page` | Base + body blocks, template key | Mission/help/policy content; review date required for guidance |
| `NewsPost` | Base + category, body, source/event date, publisher/byline if known | Related document/representation IDs; media entries require attribution |
| `PublicDocument` | Base + category, issuer, document date, reference if present, language, asset ID, version, summary | Related records; public/redaction/rights clearance required |
| `Representation` | Base + type, recipient if verified, event/submission date, era, status, body, timeline | Evidence document IDs for status claims; era distinguishes earlier initiative from Society |
| `GalleryAlbum` | Base + category, event date, cover ID, ordered item IDs | Unknown dates remain null; cover must be in album |
| `MediaAsset` | ID, public URL, MIME, bytes, width/height, alt, caption, credit | Internal original ID, rights status and redaction status; private originals never in public DTO |
| `TeamMember` | Explicit supplied name, role, display order; optional term/bio/approved image | No face-based inference; internal approval reference |
| `IssueSubmission` | Contact, locality, provider, category, description, optional bill fields, consent evidence | Private storage only; random receipt reference; attachment IDs |
| `ParticipationSubmission` | Kind, contact, purpose-specific fields, consent evidence | Private; no automatic membership |
| `ContactSubmission` | Name, reply channel, subject, message, consent evidence | Private; restricted retention |

```ts
type PublicDocumentSummary = ContentBase & {
  category: string;
  issuer: string;
  documentDate: string | null;
  referenceNumber?: string;
  language: Locale;
  file: { url: string; mimeType: string; bytes: number };
  version: number;
};
type RepresentationStatus =
  | "not-recorded" | "documented-activity" | "submitted"
  | "acknowledged" | "response-received" | "closed";
type TimelineEvent = {
  id: string;
  date: string | null;
  title: string;
  summary: string;
  evidenceDocumentIds: string[];
};
type Representation = ContentBase & {
  era: "earlier-initiative" | "registered-society";
  recipient?: string;
  eventDate: string | null;
  status: RepresentationStatus;
  body: RichBlock[];
  timeline: TimelineEvent[];
  documentIds: string[];
  albumIds: string[];
};
type ConsentEvidence = {
  noticeVersion: string;
  purposes: string[];
  accepted: true;
  recordedAt: string; // server-generated
};
```

Seed entries should include the registration certificate and an “Earlier initiative: association support letter, 24 July 2024” record. Keep news clippings and photographs in review until attribution, dates where needed and publication rights are confirmed. Asset source filenames are internal provenance; use readable public filenames without phone numbers or private details.

## 12. API integration contracts

All endpoints below are proposed contracts, not existing services. Prefix `/api/v1`, return JSON with stable typed envelopes, serve over HTTPS and document the contract in OpenAPI. Use same-origin browser requests through the application service where practical.

| Method/path | Purpose | Response/behaviour |
|---|---|---|
| `GET /settings` | Approved site configuration | Public DTO |
| `GET /pages/:slug?locale=en` | Static/help/policy content | Published page or 404 |
| `GET /news`, `/documents`, `/representations`, `/albums` | Archive lists | Items, page, pageSize, total |
| `GET /news/:slug`, `/documents/:slug`, `/representations/:slug`, `/albums/:slug` | Detail | Public record or 404 |
| `GET /search?q=...&type=...&page=1` | Cross-content search | Published public results only |
| `POST /intake-sessions` | Create short-lived anonymous form session | Opaque token/cookie scoped to intake; rate limited |
| `POST /uploads/init` | Request private upload capability | Scoped upload ID, short expiry and upload URL |
| `POST /uploads/:id/complete` | Confirm transfer and initiate scanning | Upload state: processing, ready or rejected |
| `GET /uploads/:id/status` | Poll scan result within same intake session | State only; no public asset URL |
| `DELETE /uploads/:id` | Remove unsubmitted attachment | Requires owning intake session |
| `POST /issues` | Submit validated issue and attachment IDs | 201 with receipt after durable acceptance |
| `POST /participation` | Individual/association/volunteer enquiry | 201 acknowledgement |
| `POST /contact` | General enquiry | 201 acknowledgement |

List parameters: `q`, `category`, `year`, `issuer`, `locale`, `sort`, `page`, `pageSize`; only supported parameters apply to each resource. Default pageSize 12 for archives, 20 for search; maximum 50. Cap query length and validate page bounds. Responses use `{ data, pagination: { page, pageSize, total }, requestId }`; detail responses use `{ data, requestId }`.

Error shape:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Please check the highlighted fields.",
    "fieldErrors": { "mobile": ["Enter a valid mobile number."] },
    "requestId": "opaque-support-reference"
  }
}
```

Use 400 for malformed requests, 422 for field validation, 413 for oversized payloads, 415 for unsupported files, 429 with retry guidance for throttling and 5xx for service errors. A nonexistent/private public-content slug returns 404. Never return stack traces or echo sensitive payloads into errors.

### 12.1 Submission transaction

1. Establish a short-lived intake session and validate fields locally.
2. Obtain scoped upload URLs; upload optional files to quarantine; show transfer and scan progress separately.
3. Server validates extension, actual file type, size and scan result. Only `ready` uploads owned by the session can be attached.
4. POST the final form with an idempotency key and attachment IDs. Backend atomically stores the record and binds the attachments, then returns a random receipt reference and timestamp.
5. Notifications run asynchronously; a mail failure does not turn an accepted submission into a failed record.
6. If the POST response is lost, retry the identical payload with the same key. Backend returns the original receipt. Same key with changed payload returns conflict; UI requests deliberate resubmission with a new key.

Proposed idempotency lifetime: 24 hours; unsubmitted uploads expire within 24 hours. Confirm these operational defaults before launch. Poll scanning with bounded backoff for up to 60 seconds, then offer retry/status refresh or removal of the file. Do not force a duplicate final submission. No public endpoint lists cases or resolves a receipt into personal data.

Public GETs may retry twice with backoff. Mutations do not retry blindly; idempotency must be supported first. Abort obsolete searches and define a user-visible timeout. Use mock service handlers during development and contract tests against staging before enabling forms.

## 13. Forms and validation

Validation is identical in intent on client and server. Client validation helps the visitor; it is not an access or security boundary. Trim outer whitespace, preserve meaningful punctuation and Unicode, reject control characters and constrain lengths. Never restrict names to Latin letters only.

### 13.1 Issue form

| Field | Requirement | Rules and UI |
|---|---|---|
| Full name | Required | 2–100 characters; `autocomplete=name` |
| Mobile | Required | Accept spaces, hyphens and optional +91; normalize to 10 Indian digits; validate 6–9 first digit; preserve clear error text |
| Email | Optional | Valid email if supplied, max 254; `autocomplete=email` |
| Area/locality | Required | 2–120 characters; no full street address required |
| Consumer category | Required | Domestic, commercial, industrial, other |
| Provider | Required | Proposed options: BSES Rajdhani, BSES Yamuna, Tata Power-DDL, NDMC, other; verify labels before launch |
| Other provider | Conditional | Required when “other”, 2–100 characters |
| CA/consumer number | Optional | String, max 40; preserve leading zeros; no universal numeric format assumed |
| Bill month | Optional | Valid YYYY-MM; no future month; use an accessible fallback |
| Bill amount | Optional | Non-negative decimal INR, max two decimal places; proposed ceiling 100,000,000; server converts exactly to integer paise |
| Issue category | Required | PPAC/FPPAS, high bill, incorrect billing, meter, load/fixed charge, previous dues, other |
| Description | Required | 30–5,000 characters, visible counter and example guidance |
| Electricity bill | Optional | One PDF/JPEG/PNG within shared upload limits |
| Supporting files | Optional | Up to two additional PDF/JPEG/PNG files |
| Privacy consent | Required | Unchecked by default; link to versioned privacy notice |

Proposed file limits: maximum 3 files overall, 5 MiB each, 15 MiB combined. Display limits before file selection and state exact allowed formats. Detect duplicates within the selection; permit remove/reselect. Do not upload on drag-over or without explicit file selection. Show filename, size, transfer/scan state and remove button. Explain how to redact unrelated personal details; do not request Aadhaar, passwords or payment credentials.

Suggested consent copy, subject to approval: “I agree that the Society may use the information and files I provide to review and respond to this enquiry, as explained in the Privacy Policy.” Any permission to publish information or share it with an outside authority must be separate and purpose-specific; basic intake consent must not silently authorize public publication.

### 13.2 Participation and contact forms

| Form | Required | Optional/conditional |
|---|---|---|
| Individual interest | Name, mobile, locality, interest type, privacy consent | Email, message up to 2,000 characters |
| Association collaboration | Organisation name (2–200), contact name, role (2–100), mobile, email, locality, message (30–3,000), privacy consent | Registration number, website, member count as positive integer, support letter within upload rules |
| Volunteer | Name, mobile, locality, interest area, privacy consent | Email, availability up to 500 characters, message up to 2,000 |
| Contact | Name, at least one valid reply channel (email or mobile), subject (3–150), message (20–3,000), privacy consent | Second reply channel |

All names/contact fields reuse issue-form validation. Organisation address and member count are optional because collaboration enquiry does not require full membership records. Support-letter uploads remain private until a separate publishing review.

### 13.3 Feedback and error handling

Validate after blur and on attempted step/submission; avoid flashing errors on every initial keystroke. On failure, focus a linked error summary, mark fields with `aria-invalid` and connect errors/help through `aria-describedby`. Keep entered values and selected file status. Display server field errors beside the correct input. During submission prevent double activation, announce progress and retain a readable button label. A 429 response explains when to retry. Success clears sensitive form state and shows a durable receipt; a timeout never triggers a success screen.

Use a honeypot and server rate limits; introduce an accessible challenge only when abuse warrants it. Do not make users solve an inaccessible image puzzle to contact the Society. No newsletter opt-in bundled into another consent.

## 14. Accessibility

Project target: WCAG 2.2 AA, with automated and manual verification. WCAG defines testable accessibility criteria; an automated score alone does not establish conformance ([W3C WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/)).

- Semantic header/nav/main/footer, logical headings, skip link and meaningful link labels.
- Complete keyboard operation, visible unobscured focus and predictable focus restoration.
- Text contrast at least 4.5:1 for ordinary text and 3:1 for large text; meaningful controls/icons need adequate non-text contrast. Never encode status by colour alone.
- Labels, hints, error summaries and announcement regions for forms; group related radios with fieldset/legend.
- At least 44px project touch targets; text resizes to 200% and layout reflows at 400% zoom/320px equivalent.
- Respect reduced-motion preferences; avoid autoplay and flashing effects.
- Alt text describes relevant image content without naming unidentified people. Decorative images use empty alt text. Captions and alt text have different purposes.
- Scanned documents receive a readable summary/transcription. Download actions announce format/size; provide alternatives if an embedded viewer is unusable.
- Set page language and mark Hindi passages with `lang=hi`. Screen-reader labels must not rely only on English abbreviations.
- Test mobile drawer, dropdowns, pagination, file picker, step navigation and gallery dialog with keyboard and screen readers.

## 15. SEO and discoverability

Render public content and page-specific metadata in initial HTML. Titles follow “Page title | Delhi Fight Against Electricity Bills Society”; editorial previews should flag unwieldy titles without abbreviating the registered identity arbitrarily. Use concise unique descriptions, canonical URLs, meaningful headings and descriptive links.

Generate sitemap entries from published routes only. Exclude confirmation, search results, draft/preview URLs and parameter combinations from indexing. Keep curated archive landing pages indexable; parameter-filtered variants use an explicit canonical/noindex policy to avoid duplicate index growth. Draft exclusion from robots is not access protection.

Provide Open Graph/social preview title, description and approved image. Add factual Organization and BreadcrumbList structured data; use Article metadata for appropriate news records. Never add unsupported ratings, memberships, government affiliation or impact statistics. Document detail HTML is the discovery page for scan assets; public PDFs may use an HTTP canonical Link header where infrastructure supports it.

When Hindi launches, use explicit translated routes such as `/hi/bill-help`, paired canonical/hreflang values and language-aware sitemap entries. Do not publish automatic unreviewed translations or switch language solely from IP location. The legal Society name remains as approved in the identity system.

## 16. Performance

Project field targets at the 75th percentile: LCP ≤2.5s, INP ≤200ms and CLS ≤0.1, measured separately on mobile and desktop when traffic is sufficient. These follow the [Web Vitals guidance](https://web.dev/articles/vitals). Before field data exists, use repeatable lab tests as a proxy and report them as lab results.

Proposed budgets: homepage transferred assets ≤1.5 MiB on first visit, critical-route JavaScript ≤200 KiB gzip, hero image ≤250 KiB and card thumbnails generally ≤80 KiB. Treat these as project budgets, not measurements already achieved. Record any justified exception and its impact.

Use responsive AVIF/WebP with fallbacks, width/height attributes, appropriate `sizes`, lazy loading below the fold and priority for the actual LCP image only. Load full-resolution gallery assets only on request. Defer document viewers until used. Subset/self-host necessary fonts with swap and avoid unnecessary weights. Cache fingerprinted public assets immutably; purge replaced sensitive derivatives. Route-split interactive features and import icons individually. No default video backgrounds, social-feed embeds or third-party map scripts.

Run Lighthouse on Home, an article, a document and the issue form under an agreed mobile profile; aim for performance ≥90 while prioritising actual timings. Track bundle changes in CI. Do not cache intake traffic in a service worker.

## 17. Security and privacy

Separate the public publishing system from private consumer intake. Consumer bills, account numbers, contact details, messages and unreviewed letters never appear in public storage, search, analytics, error replay or public CMS responses. Use least-privilege staff access, MFA for administrators, access auditing and a defined incident contact.

Upload controls should use allowlisted formats, actual file-type validation, size limits, random storage keys, quarantine/scanning and restricted storage access. These align with [OWASP file-upload guidance](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html). Reject active formats such as HTML/SVG and executables in intake. Browser checks are convenience only. Any public derivative requires explicit editorial clearance and redaction; private URLs must not be guessable or permanent.

Use HTTPS, appropriate HSTS, a tested Content Security Policy, `X-Content-Type-Options: nosniff`, restricted framing and a suitable referrer policy. Sanitize CMS rich content with an allowlist and permit safe URL schemes only. Protect cookie-authenticated mutation endpoints with CSRF/origin controls; use secure HttpOnly SameSite cookies. CORS must permit only intended origins. Browser environment variables contain public configuration only. Redact sensitive request fields from logs and monitoring.

The privacy notice must describe the actual operator/contact, purposes, fields, recipients, retention, deletion/request process and any analytics. Define and approve separate retention periods for unsubmitted uploads, issue records and enquiries before collection starts; implement deletion jobs and a review/hold process. Do not invent a legal retention deadline. This is a product requirement, not a statement of applicable legal compliance.

Disable session replay on intake pages. Never store form payloads in localStorage, URLs or analytics events. Default to minimal analytics without advertising trackers; if optional technologies are introduced, implement the required preference/consent behaviour based on reviewed policy. Review and remove EXIF/location metadata from public image derivatives. Keep source originals access-restricted.

## 18. Folder structure and engineering conventions

```text
src/
  app/
    layout.tsx
    page.tsx
    loading.tsx
    error.tsx
    not-found.tsx
    about/                         # overview and approved subpages
    our-cause/page.tsx
    bill-help/                     # hub and guide routes
    submit-issue/
      page.tsx
      confirmation/page.tsx
    representations/[slug]/page.tsx
    news/[slug]/page.tsx
    documents/[slug]/page.tsx
    gallery/[slug]/page.tsx
    join/                          # hub and three enquiry routes
    contact/page.tsx
    search/page.tsx
    privacy/page.tsx
    disclaimer/page.tsx
    terms/page.tsx
    accessibility/page.tsx
    api/v1/                        # BFF/route handlers, if owned here
    sitemap.ts
    robots.ts
  components/
    ui/
    layout/
    content/
    forms/
  features/
    issues/
    participation/
    contact/
    documents/
    representations/
    news/
    gallery/
    search/
  lib/
    api/                           # typed client, adapters, errors
    server/                        # secrets/private service access
    validation/                    # shared schemas
    seo/
    formatting/
  types/
  styles/                          # tokens, globals, print styles
  content/                         # approved seed data or fixtures
tests/
  unit/
  integration/
  e2e/
  fixtures/                        # synthetic data only
public/                            # approved public assets only
docs/                              # contracts and editorial handoff
```

Each dynamic collection also has a listing `page.tsx` at its parent route. Keep tests near features if preferred, but follow one convention consistently. Add environment validation, `.env.example` with names only, lockfile and reproducible build scripts. Use import aliases, typed error handling and feature-level boundaries. Use formatters for dates, currency and bytes centrally. Avoid coupling public page components to vendor-specific CMS objects.

Recommended CI stages: install from lockfile → lint → type-check → unit/integration tests → production build → browser smoke/accessibility tests → preview. Deployments require environment-specific API/storage configuration and a rollback path. Do not deploy fixture submissions or debug endpoints as production services.

## 19. Content preparation and publishing

Editorial workflow: ingest source → record provenance → deduplicate → transcribe/describe → verify date/context → check rights/redaction → editorial review → preview → publish. Keep original source assets separate from website derivatives. A publisher can approve public content; an intake reviewer can handle private cases; these permissions need not overlap.

Required CMS fields enforce: title, slug, category, summary, source references, review status, rights clearance for media and alt text for meaningful images. Unknown dates remain explicit. Reject unsupported representation status changes without evidence. On update, retain author/editor audit and change note; on unpublish, remove from public APIs, search, sitemap and caches.

Initial content pack: approved organisation introduction; registration facts and derivative; mission/objectives; four reviewed help guides; source-based document entries; approved archive summaries; gallery captions; participation explanation; verified contact information; approved policies. Avoid filler articles and “coming soon” cards across public navigation. Where insufficient content exists, publish fewer complete pages.

Suggested neutral seed copy for S5: “Photograph outside the Public Grievances Commission, New Delhi.” Do not add a submission date, participant names or a favourable outcome. Suggested S2 label: “Historical support letter concerning the earlier electricity-bill initiative — 24 July 2024.” These labels preserve evidence limits.

## 20. Implementation phases

| Phase | Deliverables | Exit condition |
|---|---|---|
| 1. Content and contracts | Source register, approved facts, route inventory, backend/CMS decision, privacy responsibilities | Owners assigned; unknowns tracked; API draft agreed |
| 2. Design foundation | Tokens, header/footer, typography, mobile navigation, template wireframes | Home, article, archive and form patterns reviewed at 360px and 1440px |
| 3. Public React frontend | Routes, cards, archives, details, responsive media, SEO metadata, seed content | Published-content journeys work with validated fixtures |
| 4. Content integration | CMS adapters, search, previews, webhooks, source metadata | Real staging content can publish/update/unpublish correctly |
| 5. Private intake | Forms, uploads, scanning, consent, idempotency, durable receipts, notifications | End-to-end staging submissions pass failure/retry/privacy cases |
| 6. Quality and launch | Accessibility, device testing, performance, content review, operational handoff | All P0 acceptance criteria pass; production services verified |
| 7. Later improvement | Hindi content, approved additional services, measured UX refinements | Separate scope and acceptance criteria agreed |

Timeline depends on source approvals and backend readiness. Public-page development can proceed with synthetic fixtures, but live collection cannot launch before private storage, staff access, retention and handling responsibilities are in place.

## 21. Testing checklist

### Functional and contract

- [ ] Every visible navigation link and deep link loads; unknown/unpublished slugs return 404.
- [ ] Search/filter/sort/pagination survive refresh and Back/Forward; stale requests cannot replace newer results.
- [ ] Unknown dates, empty lists, large titles, Hindi text and missing thumbnails render sensibly.
- [ ] Documents expose correct format/size and an accessible fallback when preview fails.
- [ ] Representation statuses require the appropriate supporting evidence.
- [ ] All required/optional/conditional form fields pass valid and invalid cases.
- [ ] Leading-zero consumer numbers and decimal INR values survive round trips without corruption.
- [ ] Oversized, unsupported, duplicate, interrupted and rejected uploads have usable recovery paths.
- [ ] Timeout after accepted POST plus retry returns one record and the same receipt.
- [ ] Notification failure leaves the durable intake record intact.
- [ ] API validation, throttling, offline and server failures never display false success.

### Accessibility and responsive

- [ ] Keyboard-only navigation through all menus, forms, archive controls and lightbox.
- [ ] Screen-reader checks using VoiceOver/Safari and NVDA/Firefox or Chrome.
- [ ] Focus is visible, ordered and restored; error summaries link to actual fields.
- [ ] Contrast, 200% text resize, 400% zoom, reduced motion and touch targets pass.
- [ ] Layouts checked at 320, 360, 390, 768, 1024 and 1440px, including landscape.
- [ ] Current stable Chrome, Firefox, Edge and Safari plus iOS Safari and Android Chrome are checked at release.

### Content, SEO, privacy and performance

- [ ] Full registered name, caption, certificate facts and historical chronology match reviewed sources.
- [ ] No photo-derived identities, fabricated statistics, placeholder contacts or unsupported outcomes.
- [ ] Initial HTML includes title, description and canonical; social preview and sitemap use published data.
- [ ] Private/draft assets and case data cannot be accessed anonymously or through search.
- [ ] Form payloads are absent from URLs, analytics, logs and browser persistent storage.
- [ ] Upload ownership, CSRF/origin controls, rate limits, sanitization and deletion jobs are tested.
- [ ] Bundle/image budgets and lab performance checked on representative routes.
- [ ] Publish/unpublish invalidates pages, search, sitemap and public assets as intended.
- [ ] Production build, backup/restore responsibility, rollback and error monitoring are verified.

## 22. Acceptance criteria

| ID | Testable condition | Evidence required |
|---|---|---|
| AC-01 | React/TypeScript implementation uses the agreed Next.js or Vite architecture with no WordPress dependency | Repository/build review |
| AC-02 | Every launch route has approved content or is omitted from navigation and publication | Route/content inventory |
| AC-03 | Full Society identity and S1 registration fields match the approved source transcription | Editorial sign-off |
| AC-04 | S2 is labelled earlier-initiative material; no photograph identifies people or asserts proceedings/outcomes | Content review |
| AC-05 | Home enables bill-help, registration and issue-intake journeys; all links work | Browser journey tests |
| AC-06 | Archives support agreed filters, pagination and recoverable loading/empty/error states | Integration/E2E tests |
| AC-07 | Public documents have metadata, correct file details, source context and readable alternatives | Document sample audit |
| AC-08 | All forms enforce defined client/server validation and provide accessible errors | Schema and browser tests |
| AC-09 | Submission success follows durable acceptance; identical retry cannot create duplicate records | Transaction/timeout test |
| AC-10 | Private uploads require owning-session access and scanning; public search/API never exposes private records | Negative access and upload tests |
| AC-11 | Core journeys meet WCAG 2.2 AA checks with no unresolved critical/serious automated issues and manual checks completed | Accessibility report and issue log |
| AC-12 | No unintended horizontal overflow at 320px; menus/forms/gallery work across target devices | Responsive test record |
| AC-13 | Metadata, canonical, sitemap, redirects and HTTP status behaviour match section 15 | HTML/HTTP crawl results |
| AC-14 | Performance budgets are met or specific exceptions approved; field measurements are scheduled after launch | Lab/bundle report |
| AC-15 | Privacy notice reflects deployed collection, sharing and retention; responsible staff and deletion process exist | Operational review |
| AC-16 | Editor can publish/update/unpublish without a code change and without stale public search entries | CMS acceptance demo |
| AC-17 | CI passes, production configuration is verified, and rollback/contact procedures are documented | Release checklist |

Completion means all applicable P0 conditions pass with evidence. A page mockup, a passing build or a simulated form receipt alone is not launch acceptance.

## 23. Decisions and dependencies before launch

| Decision/input | Responsible role | Effect if unavailable |
|---|---|---|
| Confirm original certificate fields and governance caption | Society representative | Hold registration/trust publication |
| Approved mission/objectives and governing rules | Society editor | Keep objectives draft |
| Logo or approved full-name text identity | Society/design owner | Use reviewed typographic identity |
| Governing body names, roles and permissions | Society representative | Hide team page |
| Verified Society contact channels and visitor-office status | Society operations | Do not display invented contacts or visiting hours |
| Source rights, missing photos, event dates and captions | Society editor | Publish only cleared materials |
| Current official sources for bill-help guidance | Content reviewer | Hold unverified explainers |
| CMS/vendor, hosting, API and storage ownership | Technical owner | Continue with fixtures; block live intake |
| Intake reviewers, response wording and retention schedule | Operations/privacy owner | Block consumer-data collection |
| Membership policy and fee decision | Society representative | Enquiry-only participation flow |
| Final domain and SEO/social configuration | Website owner | Finalise production metadata before release |

These are implementation dependencies, not a request to stop drafting or designing. The frontend team can proceed with all templates and contract-driven UI while the content and operational owners supply the missing approvals.

## 24. Technical references

Primary documentation reviewed on 16 September 2026. Project-specific thresholds, architecture and workflows above are recommendations rather than claims that these services already exist.

- [Next.js: Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Vite: Getting Started](https://vite.dev/guide/)
- [React Router: Routing](https://reactrouter.com/start/declarative/routing)
- [Tailwind CSS: Utility classes](https://tailwindcss.com/docs/styling-with-utility-classes)
- [Zod: Schema validation and integrations](https://zod.dev/)
- [TanStack Query: Overview](https://tanstack.com/query/latest/docs/framework/react/overview)
- [W3C: WCAG overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [web.dev: Web Vitals](https://web.dev/articles/vitals)
- [OWASP: File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html)

The original organisational evidence is recorded in section 1 using the supplied attachment filenames. The earlier conversation is background context, not independent verification. This specification replaces its WordPress implementation choices with the React architecture described here.
