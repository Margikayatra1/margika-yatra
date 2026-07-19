import { type SchemaTypeDefinition } from 'sanity'

import { blogType } from './schemas/blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType],
}
