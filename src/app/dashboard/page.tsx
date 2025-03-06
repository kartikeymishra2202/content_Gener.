"use client";
import React, { Suspense, useState } from "react";
import SearchDashboard from "./components/SearchDashboard";
import TemplateList from "./components/template-list";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string>();

  return (
    <div>
      <SearchDashboard onSearchInput={setSearchInput} />

      <TemplateList searchInput={searchInput} />
    </div>
  );
};

export default Dashboard;
