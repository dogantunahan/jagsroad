interface Props {
  data: any
}

export const Categories = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-lg font-semibold">Categories</h2>
      <div className="flex flex-wrap gap-4">
        {data?.docs?.map((category: any) => (
          <div key={category.id} className="p-4 bg-white rounded shadow">
            {category.name}
          </div>
        ))}
      </div>
    </div>
  )
}
