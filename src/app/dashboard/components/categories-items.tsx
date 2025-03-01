"use client";
import React from "react";
import { CategoryProps } from "./categories";
import { cn } from "@/lib/utils";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import queryString from "query-string";

const CategoryItems = ({ name, value }: CategoryProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  const isselected = currentCategory === value;
  ///  the following lines of code purpose is to redirect the page on the selected
  //  categories and on double clicking make page back to the original page.
  const handleOnClick = () => {
    const url = queryString.stringifyUrl(
      {
        url: pathname,
        query: {
          category: isselected ? null : value,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );
    router.push(url);
  };
  //////-------------------------------------------------------------------------------

  return (
    <button
      onClick={handleOnClick}
      className={cn(
        "py-2 px-4 text-sm border rounded-full flex items-center cursor-pointer"
      )}
    >
      {name}
    </button>
  );
};

export default CategoryItems;
