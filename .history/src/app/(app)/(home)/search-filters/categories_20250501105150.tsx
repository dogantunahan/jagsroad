import { CategoryDropdown } from './category-dropdown'
import { CustomCategory } from '../types'
import { useRef } from 'react'

interface Props {
  data: CustomCategory[]
}

export const Categories = ({ data }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative w-full">
      <div className="flex flex-nowrap items-center">
        {data.map((category) => (
          <div key={category.id} className="">
            <CategoryDropdown
              category={category}
              isActive={false} // TODO: Add active state
              isNavigationHovered={false} // TODO: Add navigation hovered state
            />
          </div>
        ))}
      </div>
    </div>
  )
}
