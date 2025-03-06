import Auth from "@/app/components/Auth";
import { SearchIcon } from "lucide-react";
import React, { Suspense } from "react";
import Categories from "./categories";
const categories = [
  {
    name: "youtube",
    value: "Youtube",
  },
  {
    name: "instagram",
    value: "Instagram",
  },
  {
    name: "twitter",
    value: "Twitter",
  },
  {
    name: "linkedin",
    value: "LinkedIn",
  },
  {
    name: "pinterest",
    value: "Pinterest",
  },
  {
    name: "reddit",
    value: "Reddit",
  },
  {
    name: "tiktok",
    value: "TikTok",
  },
  {
    name: "email",
    value: "Email",
  },
];
const SearchDashboard = ({
  onSearchInput,
}: {
  onSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <div className="mx-5 py-2">
      <div className="flex  md:flex-row gap-2 mt-5 py-6 bg-white rounded-lg shadow-md justify-between">
        <div className="flex gap-2 items-center p-2 border rounded-full  w-auto bg-white  md:w[20%] ml-1">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-black w-32 "
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>

        <Categories items={categories} />

        <div className="flex items-center space-x-4 mx-1">
          <Auth />
        </div>
      </div>
    </div>
  );
};

export default SearchDashboard;
