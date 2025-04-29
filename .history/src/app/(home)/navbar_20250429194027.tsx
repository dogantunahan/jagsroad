import { Poppins } from 'next/font/google'
import Link from "next/link"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

export const Navbar = () => {
  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/">
      
      </Link>
    </nav>
  )
}
