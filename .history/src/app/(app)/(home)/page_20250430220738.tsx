'use client'

import { useEffect, useState } from 'react'

async function fetchData() {
  const { getPayload } = await import('payload')
  const configPromise = (await import('@payload-config')).default

  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'categories',
  })

  return data
}

export default function Home() {
  const [data, setData] = useState<PaginatedDocs<Category> | null>(null)

  useEffect(() => {
    fetchData().then((fetchedData) => {
      setData(fetchedData)
    })
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
