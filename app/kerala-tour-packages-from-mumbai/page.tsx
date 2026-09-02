import { KeralaDetail } from '../packages/[id]/KeralaDetail'
import { SchemaMarkup } from "@/components/SchemaMarkup"
import { schemas } from "@/lib/schemas"

export const dynamic = 'force-static'

export default function KeralaTourPackagePage() {
  const schemaList = [schemas.packages["kerala"], schemas.webpages["kerala"]].filter(Boolean) as any[]
  return (
    <>
      <SchemaMarkup schemas={schemaList} />
      <KeralaDetail />
    </>
  )
}
