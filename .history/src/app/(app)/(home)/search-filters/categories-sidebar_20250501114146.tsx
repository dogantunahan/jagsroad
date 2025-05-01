import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetHeader,
} from '@/components/ui/sheet'

import { CustomCategory } from '../types'
import { useState } from 'react'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  data: CustomCategory[]
}

export const CategoriesSidebar = ({ open, onOpenChange, data }: Props) => {
  const [parentCategories, setParentCategories] = useState<(null)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="p-0 transition-none"
        style={{ backgroundColor: 'white' }}
      >
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Categories</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
