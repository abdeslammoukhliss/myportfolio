import type { IReadTimeResults } from 'reading-time'

export interface Content {
  slug: string
  title: string
  date: string
  readingTime?: IReadTimeResults | null
  draft?: boolean
}