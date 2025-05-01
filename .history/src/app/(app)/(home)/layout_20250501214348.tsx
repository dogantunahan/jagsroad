import { Category } from '@/payload-types'
import Footer from './footer'
import { Navbar } from './navbar'
import { SearchFilters } from './search-filters'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { CustomCategory } from './types'

interface Props {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>

      <Footer />
    </div>
  )
}

export default Layout
