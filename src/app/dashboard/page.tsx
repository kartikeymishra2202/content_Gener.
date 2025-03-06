"use client";
import React, { Suspense, useState } from "react";
import SearchDashboard from "./components/SearchDashboard";
import TemplateList from "./components/template-list";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string>();

  return (
    <div>
      <SearchDashboard onSearchInput={setSearchInput} />
      <Suspense fallback={<div>Loading ..</div>}>
        <TemplateList searchInput={searchInput} />
      </Suspense>
    </div>
  );
};

export default Dashboard;
