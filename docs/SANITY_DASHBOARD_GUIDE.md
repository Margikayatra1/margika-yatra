# Margika Yatra — Sanity SEO Dashboard Guide

## 1. Open Studio
After deployment:

`https://www.margikayatra.com/studio`

Sign in with a Sanity project member account.

Main sections:
- Site Settings
- SEO Manager
- Blog Posts
- Tour Packages

## 2. Tour Packages — current package pages are now override-connected
Create one Tour Package document for each current package you want to manage.

The `URL Slug / Package ID` must exactly match the current URL after `/packages/`.

Example:
- URL: `/packages/kerala`
- Slug: `kerala`

If a document or field is missing, the current website code remains the fallback.

### Visible text you can change
Under `Visible Content`:
- Hero subtitle
- Intro paragraph 1
- Intro paragraph 2
- Additional SEO Content

`Additional SEO Content` appears before the footer only when you add content. Use H2/H3/H4 there. Do not add another H1.

### H1 / H2 overrides
Open the `H1 / H2 Overrides` group.

Add only the section you want to change. For each section you can enter:
- Main Line 1
- Main Line 2
- Accent / Italic Line

`hero` controls the visible H1.

See `PACKAGE_CMS_KEYS.md` for the correct section keys for each package.

## 3. SEO Settings for a package
Fill:
- Focus Keyword
- Secondary Keywords
- SEO Title
- Meta Description
- Canonical URL
- Noindex
- Nofollow
- Social / Open Graph Image + alt text

Normal public page defaults:
- Canonical: blank
- Noindex: OFF
- Nofollow: OFF

If the Tour Package SEO fields are blank, the route can still use the existing fallback metadata / SEO Manager fallback.

## 4. Keyword workflow
Choose one main search intent per page.

Example for `/packages/kerala`:

Focus Keyword:
`kerala tour packages from mumbai`

Secondary Keywords may include related phrases such as:
- `kerala family tour from mumbai`
- `munnar alleppey package from mumbai`
- `kerala holiday package from mumbai`

Use the focus phrase naturally in:
1. SEO Title
2. H1
3. opening copy where natural
4. one useful H2 when appropriate
5. body content/internal links where useful

Do not repeat it mechanically in every heading.

## 5. H1 / H2 rules
- Keep one visible H1 per page.
- Use H2 for major sections.
- Use H3 under an H2.
- Use H4 only when the structure genuinely needs it.

The package templates now keep their existing single H1, but the text inside that H1 can be overridden by the Sanity `hero` heading entry.

## 6. Image alt text
### Sanity-uploaded images
Blog content images and Additional SEO Content images require an `Alt Text` field.

Good:
`Pilgrims walking toward Kedarnath Temple in Uttarakhand`

Bad:
`best cheap char dham yatra package from mumbai`

Describe the image first. Use a keyword only if it genuinely describes what is shown.

### Existing hard-coded package images
Their existing alt attributes remain in the React templates. The patch intentionally does not replace all current package images, because doing so would change the existing visual templates. New images added through Sanity rich content require alt text.

## 7. SEO Title
Keep it specific and readable. A practical target is around 50–60 characters, but meaning is more important than hitting an exact count.

Example:
`Kerala Tour Packages from Mumbai | Margika Yatra`

## 8. Meta Description
Write a useful click-oriented summary. A practical range is roughly 140–160 characters.

Do not keyword-stuff.

## 9. Canonical URL
Normally leave blank. Code generates a self-canonical automatically.

Only enter a custom canonical when another URL should intentionally be treated as the preferred version.

## 10. Noindex / Nofollow
For normal SEO landing pages keep both OFF.

Use Noindex only for a page you intentionally do not want indexed.

## 11. Open Graph image
Use a clean social share image, ideally 1200×630, and fill its alt text accurately.

## 12. FAQs
Tour Package FAQs entered in Sanity are:
- visibly rendered before the footer
- available for FAQPage JSON-LD

Only add genuine questions and answers that are useful to visitors.

## 13. Blog Posts
Blogs remain fully CMS-managed.

- `Internal / Listing Title` = listing/card title
- `H1 Heading` = visible H1
- Article editor = Paragraph, H2, H3, H4, Quote, lists, links and images
- uploaded images require alt text
- SEO settings control title/meta/canonical/robots/OG

Do not put another H1 inside the Article Content editor.

## 14. SEO Manager
Use SEO Manager for existing static URLs that do not have a dedicated Sanity document type.

Examples:
- `/`
- `/about`
- `/contact`

For package routes, prefer the dedicated `Tour Packages` document because it controls both package SEO and connected visible content.

## 15. Publish workflow
1. Open the relevant document.
2. Make the content/SEO change.
3. Confirm one H1 and logical H2s.
4. Confirm alt text for any new Sanity image.
5. Click Publish.
6. Connected queries currently use a 60-second revalidation window.
7. Recheck the live page title, H1 and content after publishing.

## 16. Recommended first package test
Start with `/packages/kerala`.

Create Tour Package:
- Package Name: `Kerala Tour Package`
- Slug: `kerala`

Add only one H1 override first:
- Section: Hero / H1
- Main Line 1: `Kerala Tour Packages`
- Main Line 2: `from Mumbai`
- Accent Line: `Munnar, Thekkady & Alleppey`

Publish and confirm the H1 changes while the layout/design stays unchanged.

Then add SEO Title, Meta Description, Focus Keyword, and one intro text override.
