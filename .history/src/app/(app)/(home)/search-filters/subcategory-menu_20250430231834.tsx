import { Category } from '@/payload-types'

interface Props {
  category: Category // TODO: Change this
  isOpen: boolean
  position: {
    top: number
    left: number
  }
}

export const SubcategoryMenu = ({ category, isOpen, position }: Props) => {
  return (
    <div
      className={`absolute bg-white shadow-lg rounded-lg p-4 transition-all duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <h3 className="text-lg font-semibold">{category.name}</h3>
      <ul className="mt-2">
        {category.subcategories?.map((subcategory) => (
          <li key={subcategory.id} className="py-1">
            {subcategory.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
