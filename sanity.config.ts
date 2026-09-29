import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'

export default defineConfig({
  name: 'margika-yatra',
  title: 'Margika Yatra CMS',
  basePath: '/studio',
  projectId,
  dataset,
  schema,
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
            S.documentTypeListItem('pageSeo').title('SEO Manager'),
            S.documentTypeListItem('blog').title('Blog Posts'),
            S.documentTypeListItem('tourPackage').title('Tour Packages'),
          ]),
    }),
  ],
})
