"use client"

import React, { createContext, useContext } from "react"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

type HeadingOverride = {
  key?: string
  line1?: string
  line2?: string
  accentLine?: string
}

type TextOverride = {
  key?: string
  text?: string
}


export type PackageCmsData = {
  _id?: string
  name?: string
  slug?: { current?: string }
  h1?: string
  heroImage?: any
  shortDescription?: string
  content?: any[]
  headingOverrides?: HeadingOverride[]
  textOverrides?: TextOverride[]
  faqs?: Array<{ q?: string; a?: string }>
}

type PackageCmsContextValue = {
  data: PackageCmsData | null
  getHeading: (key: string) => HeadingOverride | undefined
  getText: (key: string) => string | undefined
}

const PackageCmsContext = createContext<PackageCmsContextValue>({
  data: null,
  getHeading: () => undefined,
  getText: () => undefined,
})

export function PackageCmsProvider({
  value,
  children,
}: {
  value: PackageCmsData | null
  children: React.ReactNode
}) {
  const headingMap = new Map((value?.headingOverrides || []).filter((item) => item?.key).map((item) => [item.key!, item]))
  const textMap = new Map((value?.textOverrides || []).filter((item) => item?.key).map((item) => [item.key!, item.text || ""]))

  const contextValue: PackageCmsContextValue = {
    data: value,
    getHeading: (key) => headingMap.get(key),
    getText: (key) => {
      const text = textMap.get(key)
      return text?.trim() ? text : undefined
    },
  }

  return <PackageCmsContext.Provider value={contextValue}>{children}</PackageCmsContext.Provider>
}

export function usePackageCms() {
  return useContext(PackageCmsContext)
}

export function CmsHeadingContent({
  sectionKey,
  fallback,
}: {
  sectionKey: string
  fallback: React.ReactNode
}) {
  const { getHeading } = usePackageCms()
  const heading = getHeading(sectionKey)

  if (!heading || (!heading.line1?.trim() && !heading.line2?.trim() && !heading.accentLine?.trim())) {
    return <>{fallback}</>
  }

  const lines = [heading.line1, heading.line2].filter((line) => line?.trim()) as string[]

  return (
    <>
      {lines.map((line, index) => (
        <React.Fragment key={`${sectionKey}-${index}`}>
          {index > 0 && <br />}
          {line}
        </React.Fragment>
      ))}
      {heading.accentLine?.trim() ? (
        <>
          {lines.length > 0 && <br />}
          <em>{heading.accentLine}</em>
        </>
      ) : null}
    </>
  )
}


export function CmsTextContent({
  textKey,
  fallback,
}: {
  textKey: string
  fallback: React.ReactNode
}) {
  const { getText } = usePackageCms()
  const text = getText(textKey)
  return <>{text || fallback}</>
}

const portableTextComponents = {
  block: {
    h2: ({ children }: any) => <h2 className="mt-10 mb-4 text-3xl font-semibold text-orange-950">{children}</h2>,
    h3: ({ children }: any) => <h3 className="mt-8 mb-3 text-2xl font-semibold text-orange-900">{children}</h3>,
    h4: ({ children }: any) => <h4 className="mt-6 mb-3 text-xl font-semibold text-orange-900">{children}</h4>,
    normal: ({ children }: any) => <p className="mb-5 leading-8 text-gray-700">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="my-6 border-l-4 border-orange-500 bg-orange-50 px-5 py-4 italic text-gray-700">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">{children}</ul>,
    number: ({ children }: any) => <ol className="mb-6 list-decimal space-y-2 pl-6 text-gray-700">{children}</ol>,
  },
  marks: {
    link: ({ value, children }: any) => {
      const href = value?.href || "#"
      const external = /^https?:\/\//.test(href)
      return (
        <a href={href} className="font-medium text-orange-700 underline underline-offset-4" target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }: any) => {
      const src = urlForImage(value)?.width(1400).fit("max").url()
      if (!src) return null
      return (
        <figure className="my-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-orange-50">
            <Image src={src} alt={value?.alt || "Margika Yatra travel image"} fill className="object-cover" sizes="(max-width: 768px) 100vw, 1100px" />
          </div>
          {value?.caption ? <figcaption className="mt-2 text-center text-sm text-gray-500">{value.caption}</figcaption> : null}
        </figure>
      )
    },
  },
}

export function PackageCmsContent() {
  const { data } = usePackageCms()
  const hasContent = Array.isArray(data?.content) && data!.content!.length > 0
  const hasFaqs = Array.isArray(data?.faqs) && data!.faqs!.some((item) => item?.q && item?.a)

  if (!hasContent && !hasFaqs) return null

  return (
    <section className="bg-white py-14 md:py-20" data-cms-package-content>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {hasContent ? (
          <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm md:p-10">
            <PortableText value={data!.content!} components={portableTextComponents} />
          </div>
        ) : null}

        {hasFaqs ? (
          <div className="mt-10 rounded-3xl border border-orange-100 bg-orange-50/40 p-6 md:p-10">
            <h2 className="mb-6 text-3xl font-semibold text-orange-950">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {data!.faqs!.filter((item) => item?.q && item?.a).map((item, index) => (
                <details key={`${item.q}-${index}`} className="rounded-2xl border border-orange-100 bg-white px-5 py-4">
                  <summary className="cursor-pointer font-semibold text-gray-900">{item.q}</summary>
                  <p className="mt-3 leading-7 text-gray-700">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
