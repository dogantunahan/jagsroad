import { Category } from "@/payload-types";

interface Props {
  category: Category;
  isActive?: boolean;
  isNavigationHovered?: boolean;
}

export const CategoryDropdown = ({
  category,
  isActive = false,
  isNavigationHovered = false,
}: Props) => {
  return (
    <div>
      
    </div>
  );
}