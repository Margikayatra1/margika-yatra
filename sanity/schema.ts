import type { SchemaTypeDefinition } from 'sanity'

import { blogType } from './schemas/blog'
import { pageSeoType } from './schemas/pageSeo'
import { portableTextType } from './schemas/portableText'
import { seoType } from './schemas/seo'
import { siteSettingsType } from './schemas/siteSettings'
import { tourPackageType } from './schemas/tourPackage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    seoType,
    portableTextType,
    siteSettingsType,
    pageSeoType,
    blogType,
    tourPackageType,
  ],
}
