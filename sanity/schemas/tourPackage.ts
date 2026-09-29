import { defineField, defineType } from 'sanity'

const headingKeyOptions = [
  { title: 'Hero / H1', value: 'hero' },
  { title: 'Intro section', value: 'intro' },
  { title: 'Sacred sites / destinations', value: 'sacred-sites' },
  { title: 'Sacred route / cities', value: 'sacred-route' },
  { title: 'Package options / pricing', value: 'package' },
  { title: 'Itinerary', value: 'itinerary' },
  { title: 'Inclusions / everything taken care of', value: 'inclusions' },
  { title: 'Why Margika', value: 'why-margika' },
  { title: 'Booking process', value: 'booking' },
  { title: 'Testimonials', value: 'testimonials' },
  { title: 'Gallery', value: 'gallery' },
  { title: 'Related journeys', value: 'related' },
  { title: 'Final CTA', value: 'cta' },
]

export const tourPackageType = defineType({
  name: 'tourPackage',
  title: 'Tour Package',
  type: 'document',
  groups: [
    { name: 'content', title: 'Visible Content', default: true },
    { name: 'headings', title: 'H1 / H2 Overrides' },
    { name: 'seo', title: 'SEO' },
    { name: 'details', title: 'Package Details' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Package Name',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug / Package ID',
      type: 'slug',
      group: 'content',
      options: { source: 'name', maxLength: 96 },
      description: 'IMPORTANT: this must exactly match the current URL after /packages/. Example: kerala, ujjain, char-dham.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'CMS Hero Image (optional)',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      description: 'Reserved for future full image replacement. Existing package design images remain unchanged unless the template is connected to this image.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required().max(125),
        }),
      ],
    }),
    defineField({
      name: 'textOverrides',
      title: 'Text Overrides',
      type: 'array',
      group: 'content',
      description: 'Use these only when you want to replace the current visible text. Leave blank to keep the existing website copy.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'key',
              title: 'Text Area',
              type: 'string',
              options: {
                list: [
                  { title: 'Hero subtitle', value: 'heroSubtitle' },
                  { title: 'Intro paragraph 1', value: 'intro1' },
                  { title: 'Intro paragraph 2', value: 'intro2' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({ name: 'text', title: 'Replacement Text', type: 'text', rows: 5, validation: (Rule) => Rule.required() }),
          ],
          preview: { select: { title: 'key', subtitle: 'text' } },
        },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Additional SEO Content',
      type: 'portableText',
      group: 'content',
      description: 'Optional content block shown before the footer. Use H2/H3/H4 here; do not create another H1. Uploaded images require alt text.',
    }),
    defineField({
      name: 'headingOverrides',
      title: 'H1 / H2 Heading Overrides',
      type: 'array',
      group: 'headings',
      description: 'Only add a row for a heading you want to change. Current website heading remains the fallback.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'key', title: 'Section', type: 'string', options: { list: headingKeyOptions }, validation: (Rule) => Rule.required() }),
            defineField({ name: 'line1', title: 'Main Line 1', type: 'string' }),
            defineField({ name: 'line2', title: 'Main Line 2 (optional)', type: 'string' }),
            defineField({ name: 'accentLine', title: 'Accent / Italic Line (optional)', type: 'string' }),
          ],
          preview: {
            select: { title: 'key', line1: 'line1', accent: 'accentLine' },
            prepare: ({ title, line1, accent }) => ({ title, subtitle: [line1, accent].filter(Boolean).join(' — ') }),
          },
        },
      ],
      validation: (Rule) =>
        Rule.custom((items: any[] | undefined) => {
          if (!items) return true
          const keys = items.map((item) => item?.key).filter(Boolean)
          return new Set(keys).size === keys.length ? true : 'Use each section key only once.'
        }),
    }),
    defineField({ name: 'price', title: 'Price', type: 'string', group: 'details' }),
    defineField({ name: 'originalPrice', title: 'Original Price', type: 'string', group: 'details' }),
    defineField({ name: 'duration', title: 'Duration', type: 'string', group: 'details' }),
    defineField({ name: 'location', title: 'Location', type: 'string', group: 'details' }),
    defineField({ name: 'highlights', title: 'Highlights', type: 'array', of: [{ type: 'string' }], group: 'details' }),
    defineField({ name: 'inclusions', title: 'Inclusions', type: 'array', of: [{ type: 'string' }], group: 'details' }),
    defineField({ name: 'seo', title: 'SEO Settings', type: 'seo', group: 'seo' }),
    defineField({
      name: 'faqs',
      title: 'SEO FAQs',
      type: 'array',
      group: 'seo',
      description: 'These FAQs are displayed visibly before the footer and can also be used for FAQ structured data.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'q', title: 'Question', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'a', title: 'Answer', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'slug.current', media: 'heroImage' },
  },
})
