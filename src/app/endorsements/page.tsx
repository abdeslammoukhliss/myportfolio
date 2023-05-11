import type { Metadata } from 'next'
import { Suspense } from 'react'

import Endorsements from '@/components/endorsements'
import { getEndorsements } from '@/lib/db'
import { getMetadata } from '@/lib/metadata'

export const metadata: Metadata = getMetadata({
  title: 'Endorsements',
  description:
    'Please consider endorsing my technical skills and abilities based on your personal experience working with me. Your endorsement will be greatly appreciated.',
})

const EndorsementsPage = async () => {
  const fallbackData = await getEndorsements()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Endorsements fallbackData={fallbackData} />
    </Suspense>
  )
}

export default EndorsementsPage