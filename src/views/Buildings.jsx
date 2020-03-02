// React
import React from "react";

// Style

// Component
import InfoCard from "./../components/InfoCard";
import SearchBar from "./../components/SearchBar";

export default function Buildings() {
  return (
    <>
      <SearchBar />
      <div className="infocards text-focus-in">
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </>
  );
}
