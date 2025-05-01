interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const CategoriesSidebar = ({ open, onOpenChange }: Props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-white z-50">
      {/* Sidebar content goes here */}
      Categories Sidebar
    </div>
  )
}
