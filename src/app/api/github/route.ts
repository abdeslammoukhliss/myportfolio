import type { NextRequest } from 'next/server'

import { getErrorMessage, response } from '@/lib/api'
import { getAccountContributions } from '@/lib/github'
import type { AccountType } from '@/types/github'

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url)
    const hasType = searchParams.has('type')
    const type = hasType ? searchParams.get('type') : ''

    const data = await getAccountContributions(type as AccountType)

    return response(data)
  } catch (err) {
    return response({ message: getErrorMessage(err) }, 500)
  }
}
