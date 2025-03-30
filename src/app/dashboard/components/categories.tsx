"use client";
import React, { useState } from "react";
import CategoryItems from "./categories-items";

export interface CategoryProps {
  name: string;
  value: string;
  children?: React.ReactNode;
}

const Categories = ({
  items,
  onCategorySelect,
}: {
  items: CategoryProps[];
  onCategorySelect: (category: string | null) => void;
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (value: string) => {
    const newCategory = selectedCategory === value ? null : value;
    setSelectedCategory(newCategory);
    onCategorySelect(newCategory);
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {items.map((category) => (
        <CategoryItems
          key={category.name}
          name={category.name}
          value={category.value}
          isSelected={selectedCategory === category.value}
          onClick={() => handleCategoryClick(category.value)}
        >
          {category.name}
        </CategoryItems>
      ))}
    </div>
  );
};

export default Categories;
