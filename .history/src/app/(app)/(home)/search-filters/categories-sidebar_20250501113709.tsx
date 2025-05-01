import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

import { CustomCategory } from '../types'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  data: CustomCategory[]

}

export const CategoriesSidebar = ({
  open,
  onOpenChange,
  data,
}: Props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-white z-50">
      {/* Sidebar content goes here */}
      Categories Sidebar
    </div>
  )
}
