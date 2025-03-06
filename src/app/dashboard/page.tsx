"use client";
import React, { Suspense, useState } from "react";
import SearchDashboard from "./components/SearchDashboard";
import TemplateList from "./components/template-list";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string>();

  return (
    <div>
      <Suspense fallback={<div>Loading..</div>}>
        <SearchDashboard onSearchInput={setSearchInput} />
      </Suspense>

      <TemplateList searchInput={searchInput} />
    </div>
  );
};

export default Dashboard;
