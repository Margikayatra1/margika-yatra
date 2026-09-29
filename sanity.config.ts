import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'

const seoPages = [
  { id: 'home', documentId: 'pageSeo-home', title: 'Home Page', path: '/' },
  { id: 'about', documentId: 'pageSeo-about', title: 'About Us', path: '/about' },
  { id: 'contact', documentId: 'pageSeo-contact', title: 'Contact', path: '/contact' },
  { id: 'book-trip', documentId: 'pageSeo-book-trip', title: 'Book Trip', path: '/book-trip' },
  {
    id: 'personalized-trip',
    documentId: 'pageSeo-personalized-trip',
    title: 'Personalized Trip',
    path: '/personalized-trip',
  },
  {
    id: 'previous-trips',
    documentId: 'pageSeo-previous-trips',
    title: 'Previous Trips',
    path: '/previous-trips',
  },
  { id: 'privacy', documentId: 'pageSeo-privacy', title: 'Privacy Policy', path: '/privacy' },
  { id: 'blog', documentId: 'pageSeo-blog', title: 'Blog Listing', path: '/blog' },
  {
    id: 'kerala-landing',
    documentId: 'pageSeo-kerala-landing',
    title: 'Kerala Tour Packages from Mumbai',
    path: '/kerala-tour-packages-from-mumbai',
  },
  {
    id: 'ujjain-landing',
    documentId: 'pageSeo-ujjain-landing',
    title: 'Ujjain Omkareshwar Tour Package',
    path: '/ujjain-omkareshwar-tour-package',
  },
]

const tourPackages = [
  { id: 'char-dham', documentId: 'tourPackage-char-dham', title: 'Char Dham Yatra', slug: 'char-dham' },
  {
    id: 'dev-deepawali',
    documentId: 'tourPackage-dev-deepawali',
    title: 'Dev Deepawali – Varanasi',
    slug: 'dev-deepawali',
  },
  {
    id: 'varanasi',
    documentId: 'tourPackage-varanasi',
    title: 'Varanasi – Ayodhya – Prayagraj',
    slug: 'varanasi',
  },
  {
    id: 'maharashtra',
    documentId: 'tourPackage-maharashtra',
    title: 'Maharashtra 3 Jyotirlinga',
    slug: 'maharashtra',
  },
  {
    id: 'rameshwaram',
    documentId: 'tourPackage-rameshwaram',
    title: 'Rameshwaram',
    slug: 'rameshwaram',
  },
  {
    id: 'jagannath-puri',
    documentId: 'tourPackage-jagannath-puri',
    title: 'Jagannath Puri',
    slug: 'jagannath-puri',
  },
  {
    id: 'dwarka-somnath',
    documentId: 'tourPackage-dwarka-somnath',
    title: 'Dwarka – Somnath',
    slug: 'dwarka-somnath',
  },
  { id: 'kerala', documentId: 'tourPackage-kerala', title: 'Kerala', slug: 'kerala' },
  {
    id: 'ujjain',
    documentId: 'tourPackage-ujjain',
    title: 'Ujjain – Omkareshwar',
    slug: 'ujjain',
  },
]

export default defineConfig({
  name: 'margika-yatra',
  title: 'Margika Yatra CMS',
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    ...schema,
    templates: (prev) => [
      ...prev.filter((template) => !['pageSeo', 'tourPackage'].includes(template.schemaType)),
      {
        id: 'managed-page-seo',
        title: 'Managed SEO Page',
        schemaType: 'pageSeo',
        parameters: [
          { name: 'pageName', type: 'string' },
          { name: 'path', type: 'string' },
        ],
        value: (params: { pageName?: string; path?: string }) => ({
          pageName: params.pageName,
          path: params.path,
        }),
      },
      {
        id: 'managed-tour-package',
        title: 'Managed Tour Package',
        schemaType: 'tourPackage',
        parameters: [
          { name: 'name', type: 'string' },
          { name: 'slug', type: 'string' },
        ],
        value: (params: { name?: string; slug?: string }) => ({
          name: params.name,
          slug: {
            _type: 'slug',
            current: params.slug,
          },
        }),
      },
    ],
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type !== 'global') return prev

      return prev.filter(
        (item) =>
          ![
            'siteSettings',
            'pageSeo',
            'tourPackage',
            'managed-page-seo',
            'managed-tour-package',
          ].includes(item.templateId)
      )
    },
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Margika Yatra')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Site Settings')
              ),
            S.divider(),
            S.listItem()
              .title('SEO Manager')
              .id('seo-manager')
              .child(
                S.list()
                  .title('SEO Manager')
                  .items(
                    seoPages.map((page) =>
                      S.listItem()
                        .title(page.title)
                        .id(page.id)
                        .child(
                          S.document()
                            .schemaType('pageSeo')
                            .documentId(page.documentId)
                            .title(page.title)
                            .initialValueTemplate('managed-page-seo', {
                              pageName: page.title,
                              path: page.path,
                            })
                        )
                    )
                  )
              ),
            S.documentTypeListItem('blog').title('Blog Posts'),
            S.listItem()
              .title('Tour Packages')
              .id('tour-packages')
              .child(
                S.list()
                  .title('Tour Packages')
                  .items(
                    tourPackages.map((pkg) =>
                      S.listItem()
                        .title(pkg.title)
                        .id(pkg.id)
                        .child(
                          S.document()
                            .schemaType('tourPackage')
                            .documentId(pkg.documentId)
                            .title(pkg.title)
                            .initialValueTemplate('managed-tour-package', {
                              name: pkg.title,
                              slug: pkg.slug,
                            })
                        )
                    )
                  )
              ),
          ]),
    }),
  ],
})
