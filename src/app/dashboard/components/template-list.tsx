"use client";
import { contentTemplates } from "@/lib/content-templates";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TemplateList = ({
  searchInput,
  selectedCategory,
}: {
  searchInput: string | undefined;
  selectedCategory: string | null;
}) => {
  const [templateList, setTemplateList] = useState(contentTemplates);

  // Category filtering useEffect
  useEffect(() => {
    if (selectedCategory === "All") {
      setTemplateList(contentTemplates);
    } else if (selectedCategory) {
      const filteredTemplates = contentTemplates.filter(
        (item) => item.category === selectedCategory
      );
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(contentTemplates);
    }
  }, [selectedCategory]);

  //Search Input useEffect
  useEffect(() => {
    if (searchInput && searchInput.length > 2) {
      const filteredTemplates = contentTemplates.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(contentTemplates);
    }
  }, [searchInput]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 mt-5">
      {templateList.map((template) => (
        <div key={template.slug} className="bg-white p-4 rounded-lg shadow-md">
          <Link
            href={`dashboard/${template.slug}`}
            className="bg-white w-full rounded-lg h-[200px] py-4 px-4 text-center"
          >
            <template.icon className="h-12 w-12 mx-auto"></template.icon>
            <h2 className="semi-bold mt-5">{template.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TemplateList;
