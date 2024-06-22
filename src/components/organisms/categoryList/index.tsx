import business from "@/assets/images/icons/Business.svg";
import cooking from "@/assets/images/icons/Cooking.svg";
import designer from "@/assets/images/icons/Designer.svg";
import fitness from "@/assets/images/icons/Fitness.svg";
import graduation from "@/assets/images/icons/Graduation.svg";
import psychologist from "@/assets/images/icons/Psychologist.svg";
import CategoryItem from "@/components/molecules/categoryItem";

const CategoryList = () => {
  return (
    <div className="o-categoryList">
      <p className="o-categoryList__title">Category</p>
      <div className="o-categoryList__items">
        <CategoryItem isChecked={false} icon={fitness}>
          Fitness Training
        </CategoryItem>
        <CategoryItem isChecked={false} icon={designer}>
          Designer
        </CategoryItem>
        <CategoryItem isChecked={false} icon={cooking}>
          Cooking
        </CategoryItem>
        <CategoryItem isChecked={false} icon={business}>
          Business
        </CategoryItem>
        <CategoryItem isChecked={false} icon={graduation}>
          Graduation
        </CategoryItem>
        <CategoryItem isChecked={false} icon={psychologist}>
          Psychologist
        </CategoryItem>
      </div>
    </div>
  );
};
export default CategoryList;
