interface Props {
  disabled?: boolean;
}

export const SearchInput = ({ disabled }: Props) => {
  return (
    <div className="flex items-center gap-2 w-full max-w-[600px]">
      <input
        type="text"
        placeholder="Search..."
        disabled={disabled}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}
