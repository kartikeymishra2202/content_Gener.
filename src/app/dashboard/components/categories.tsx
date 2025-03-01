import React from "react";
import CategoryItems from "./categories-items";

export interface CategoryProps {
  name: string;
  value: string;
  children?: React.ReactNode;
}

const Categories = ({ items }: { items: CategoryProps[] }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {items.map((category) => (
        <CategoryItems
          key={category.name}
          name={category.name}
          value={category.value}
        >
          {category.name}
        </CategoryItems>
      ))}
    </div>
  );
};

export default Categories;
