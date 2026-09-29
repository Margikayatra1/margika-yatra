# Vercel + GitHub deployment checklist

## Recommended safe deployment

### 1. Work in a branch
```bash
git checkout -b sanity-seo-upgrade
```

### 2. Copy patch over the repo root
Do not create a second nested app folder. For example, this patch file:

`app/packages/[id]/layout.tsx`

must replace/create exactly:

`YOUR-REPO/app/packages/[id]/layout.tsx`

### 3. Delete conflicting static SEO files
Delete:
- `public/robots.txt`
- `public/sitemap.xml`
- `public/sitemap-pages.xml`
- `public/sitemap-packages.xml`
- `public/sitemap-blog.xml`

Do not delete other public images/PDFs.

### 4. Local test
```bash
npm install
npm run dev
```

Test `/studio`, `/sitemap.xml`, `/robots.txt`, one package, one blog.

### 5. Build test
```bash
npm run build
```

### 6. Push preview branch
```bash
git add .
git commit -m "Add Sanity SEO dashboard integration"
git push -u origin sanity-seo-upgrade
```

### 7. Vercel Preview
Open the Vercel Preview Deployment and test:
- homepage
- mobile navigation
- package pages
- blog page
- `/studio`
- `/sitemap.xml`
- `/robots.txt`

### 8. Vercel environment variables
Project Settings -> Environment Variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=t6wstzjh
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-01-01
```

Select Production + Preview + Development where appropriate.

### 9. Production
Merge the branch into the branch Vercel uses for Production, normally `main`.

```bash
git checkout main
git pull
git merge sanity-seo-upgrade
git push origin main
```

Vercel should deploy automatically.

## Rollback
If the Preview has a problem, do not merge it. If Production was already deployed, use Vercel's previous deployment rollback/redeploy option or revert the Git commit.
