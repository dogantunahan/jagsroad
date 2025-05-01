import Footer from './footer'
import { Navbar } from './navbar'
import { SearchFilters } from './search-filters'

import { HydrationBoundary } from '@tanstack/react-query'

import { getQueryClient, trpc } from '@/trpc/server'

interface Props {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(trpc.categories.getMany.queryOptions())

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HydrationBoundary>
        <SearchFilters />
      </HydrationBoundary>
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
