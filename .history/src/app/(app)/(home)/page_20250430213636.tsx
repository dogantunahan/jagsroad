'use client'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function Home() {
    const payload = await getPayload({
      config: configPromise,
    })

  return (
    <div>

    </div>
  )
}
