import Footer from './footer'
import { Navbar } from './navbar'
import { SearchFilters } from './search-filters'

import { getQueryClient, trpc, HydrateClient } from '@/trpc/server'

interface Props {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(trpc.categories.getMany.queryOptions())

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HydrateClient>
        <SearchFilters />
      </HydrateClient>
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
