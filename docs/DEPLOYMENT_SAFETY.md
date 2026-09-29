# Deployment safety

- Production baseline commit before this upgrade: `2a2427bb91857b60e10eba6ea58cd7fb502b007b`.
- Backup branch: `backup/pre-sanity-seo-2026-09-29`.
- Work branch: `sanity-seo-upgrade`.
- Do not merge the work branch until its Vercel preview is READY and key routes have been checked.
- Existing hard-coded package content remains the fallback when Sanity fields are empty.
- Kerala and Ujjain package-detail duplicates default to canonical URLs on their dedicated SEO landing pages.
