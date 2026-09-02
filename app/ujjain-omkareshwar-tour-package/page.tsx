import { UjjainOmkareshwarDetail } from '../packages/[id]/UjjainOmkareshwarDetail'
import { SchemaMarkup } from "@/components/SchemaMarkup"
import { schemas } from "@/lib/schemas"

export const dynamic = 'force-static'

export default function UjjainTourPackagePage() {
  const schemaList = [schemas.packages["ujjain"], schemas.webpages["ujjain"]].filter(Boolean) as any[]
  return (
    <>
      <SchemaMarkup schemas={schemaList} />
      <UjjainOmkareshwarDetail />
    </>
  )
}
