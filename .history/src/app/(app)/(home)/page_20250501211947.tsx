import { getQueryClient } from '@/trpc/server'

export default async function Home() {
  const queryClient = getQueryClient()
  const categories = await queryClient.fetchQuery(options)

  return (
    <div>
      Home page
    </div>
  )
}
