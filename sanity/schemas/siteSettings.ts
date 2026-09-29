import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'Margika Yatra',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteUrl',
      title: 'Website URL',
      type: 'url',
      initialValue: 'https://www.margikayatra.com',
      validation: (Rule) => Rule.required().uri({ scheme: ['https'] }),
    }),
    defineField({
      name: 'defaultSeo',
      title: 'Default SEO',
      type: 'seo',
      description: 'Fallback SEO used only when a page does not have its own SEO settings.',
    }),
    defineField({
      name: 'organizationName',
      title: 'Organization Name',
      type: 'string',
      initialValue: 'Margika Yatra',
    }),
    defineField({ name: 'phone', title: 'Primary Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Primary Email', type: 'string' }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'youtube', title: 'YouTube', type: 'url' },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
})
