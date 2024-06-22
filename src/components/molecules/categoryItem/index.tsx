import checked from "@/assets/images/icons/Checked.png";
import unchecked from "@/assets/images/icons/Unchecked.png";
import { BaseComponentProps } from "@/types/common.types";
import Image from "next/image";

export interface CategoryItemProps extends BaseComponentProps {
  children: React.ReactNode;
  isChecked: boolean;
  icon: string;
}

const CategoryItem = ({ children, isChecked, icon }: CategoryItemProps) => {
  return (
    <div className="m-categoryItem">
      <div className="m-categoryItem__imageWrapper">
        <Image
          className="m-categoryItem__image"
          src={icon}
          alt="category_item_image"
        />
      </div>
      <p className="m-categoryItem__text">{children}</p>
      <div>
        <Image
          className="m-categoryItem__icon"
          src={isChecked ? checked : unchecked}
          alt="checkbox_icon"
        />
      </div>
    </div>
  );
};
export default CategoryItem;
