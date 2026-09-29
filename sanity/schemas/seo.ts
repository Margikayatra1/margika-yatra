import { defineField, defineType } from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: { collapsible: true, collapsed: false },
  fields: [
    defineField({
      name: 'focusKeyword',
      title: 'Focus Keyword',
      type: 'string',
      description: 'Internal SEO planning field. Use the phrase naturally in the title, H1, opening copy and relevant headings.',
    }),
    defineField({
      name: 'secondaryKeywords',
      title: 'Secondary Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Related phrases and entities. Do not stuff them unnaturally into the page.',
    }),
    defineField({
      name: 'metaTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Recommended: roughly 50–60 characters. Put the main search intent early.',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true
          if (value.length < 35) return 'SEO title is quite short.'
          if (value.length > 65) return 'SEO title is longer than the recommended range.'
          return true
        }).warning(),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: about 140–160 characters. Write for clicks, not keyword stuffing.',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true
          if (value.length < 110) return 'Meta description is quite short.'
          if (value.length > 165) return 'Meta description is longer than the recommended range.'
          return true
        }).warning(),
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Leave blank to use the page URL automatically. Use this only when another URL should be treated as the preferred version.',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'noIndex',
      title: 'Noindex',
      type: 'boolean',
      initialValue: false,
      description: 'Turn ON only when this page should not appear in search results.',
    }),
    defineField({
      name: 'noFollow',
      title: 'Nofollow',
      type: 'boolean',
      initialValue: false,
      description: 'Usually keep OFF. Turn ON only when search engines should not follow links from this page.',
    }),
    defineField({
      name: 'ogImage',
      title: 'Social / Open Graph Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Best practice: 1200 × 630 px.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image accurately. Do not add keywords that are not relevant to the image.',
          validation: (Rule) => Rule.max(125).warning('Keep alt text concise where possible.'),
        }),
      ],
    }),
  ],
})
