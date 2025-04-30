import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Category } from '@/payload-types'
import { useRef, useState } from 'react'

interface Props {
  category: Category
  isActive?: boolean
  isNavigationHovered?: boolean
}

export const CategoryDropdown = ({
  category,
  isActive,
  isNavigationHovered,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const onMouseEnter = () => {
    if (category.subcategories) {
      setIsOpen(true)
    }
  }

  const onMouseLeave = () => {
    if (category.subcategories) {
      setIsOpen(false)
    }
  }

  return (
    <div
      className="relative "
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className='relative'>
        <Button
          variant="elevated"
          className={cn(
            'h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black',
            isActive && !isNavigationHovered && 'bg-white border-primary'
          )}
        >
          {category.name}
        </Button>
        {category.subcategories && category.subcategories.length > 0 && (
          <div 
          className={cn(
            
          )}
          />
        )}
      </div>
    </div>
  )
}
