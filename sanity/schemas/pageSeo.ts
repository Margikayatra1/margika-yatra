import { defineField, defineType } from 'sanity'

export const pageSeoType = defineType({
  name: 'pageSeo',
  title: 'SEO Manager',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO', default: true },
    { name: 'content', title: 'Content Guidance' },
    { name: 'schema', title: 'Schema / FAQ' },
  ],
  fields: [
    defineField({
      name: 'pageName',
      title: 'Page Name',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'path',
      title: 'Page Path',
      type: 'string',
      group: 'seo',
      description: 'Examples: /, /about, /packages/kerala',
      validation: (Rule) =>
        Rule.required().custom((value) =>
          value && value.startsWith('/') ? true : 'Path must start with /'
        ),
    }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seo', group: 'seo' }),
    defineField({
      name: 'targetH1',
      title: 'Target H1 (Content Reference)',
      type: 'string',
      group: 'content',
      description: 'For existing hard-coded pages this is a content reference; changing it here does not replace the visible H1 until that page template is CMS-connected.',
    }),
    defineField({
      name: 'recommendedH2s',
      title: 'Recommended H2 Topics',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Planning list for important subtopics. Use only headings that genuinely match the page content.',
    }),
    defineField({
      name: 'schemaType',
      title: 'Page Schema Type',
      type: 'string',
      group: 'schema',
      initialValue: 'WebPage',
      options: {
        list: [
          { title: 'WebPage', value: 'WebPage' },
          { title: 'AboutPage', value: 'AboutPage' },
          { title: 'ContactPage', value: 'ContactPage' },
          { title: 'CollectionPage', value: 'CollectionPage' },
        ],
      },
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      group: 'schema',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'q', title: 'Question', type: 'string', validation: (Rule: any) => Rule.required() },
            { name: 'a', title: 'Answer', type: 'text', validation: (Rule: any) => Rule.required() },
          ],
          preview: { select: { title: 'q', subtitle: 'a' } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'pageName', subtitle: 'path' },
  },
})
