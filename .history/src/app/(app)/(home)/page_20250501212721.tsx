'use client'

import { useTRPC } from '@/trpc/client'

export default function Home() {
  const trpc = useTRPC()
  const categories = useTRPC(trpc.categories.getMany.queryOptions())

  return <div>{JSON.stringify(categories, null, 2)}</div>
}
