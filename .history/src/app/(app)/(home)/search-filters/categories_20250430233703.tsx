import { Category } from '@/payload-types'
import { CategoryDropdown } from './category-dropdown'

interface Props {
  data: any
}

export const Categories = ({ data }: Props) => {
  return (
    <div className="relative w-full">
      <div>
        {data.map((category: Category) => (
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
