// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

// export type Image = string
export type { Markdown, MDX }

/** Document types */
export type Post = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Post'
  title: string
  date: string
  author: string
  description: string
  image: string
  draft: string
  summary: string
  tags?: Tag[] | undefined
  images?: Images[] | undefined
  categories?: Categories[] | undefined
  /** Markdown file body */
  body: Markdown
  slug: string
}  

/** Nested types */
export type Categories = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Categories'
  title?: string | undefined

}

export type Images = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Images'
  title: string

}

export type Tag = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Tag'
  title?: string | undefined

}  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Post
export type DocumentTypeNames = 'Post'

export type NestedTypes = Categories | Images | Tag
export type NestedTypeNames = 'Categories' | 'Images' | 'Tag'


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Post: Post
}

export type NestedTypeMap = {
  Categories: Categories
  Images: Images
  Tag: Tag
}

 