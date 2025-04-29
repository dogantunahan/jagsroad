import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from ""

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({
  items,
  open,
  onOpenChange
}: Props) => {

}