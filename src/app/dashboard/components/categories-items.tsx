"use client";
import React from "react";
import { CategoryProps } from "./categories";
import { cn } from "@/lib/utils";

const CategoryItems = ({
  name,
  value,
  isSelected,
  onClick,
}: CategoryProps & { isSelected: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "py-2 px-4 text-sm border rounded-full flex items-center cursor-pointer",
        isSelected && "bg-blue-100 border-blue-500"
      )}
    >
      {name}
    </button>
  );
};

export default CategoryItems;
