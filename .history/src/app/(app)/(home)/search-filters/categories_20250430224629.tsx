import { Category } from '@/payload-types'

interface Props {
  data: any
}

export const Categories = ({ data }: Props) => {
  return (
    <div>
      {data.map((category: Category) => {
        <div key={category.id} className=''>
          <CategoryDropdown 
            category={category}
            isActive={false} // TODO: Add active state
          />
        </div>
      })}
    </div>
  )
}
