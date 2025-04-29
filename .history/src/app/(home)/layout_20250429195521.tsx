'use client'

import { Navbar } from './navbar'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar />
      </div>
      {children}
    </div>
  )
}

export default Layout
