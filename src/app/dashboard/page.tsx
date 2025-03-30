"use client";
import React, { useState } from "react";
import SearchDashboard from "./components/SearchDashboard";
import TemplateList from "./components/template-list";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div>
      <SearchDashboard
        onSearchInput={setSearchInput}
        onCategorySelect={setSelectedCategory}
      />
      <TemplateList
        searchInput={searchInput}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Dashboard;
