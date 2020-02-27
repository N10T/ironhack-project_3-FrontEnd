import React from "react";
import SearchBar from "./../../components/SearchBar";
import TopInfo from "./../../components/TopInfo";

export default function FormInformation() {
  return (
    <>
      <SearchBar />
      <div className="box">
        <TopInfo />
        <div className="image-preview-info"></div>
        <div className="text-inf0"></div>
      </div>
    </>
  );
}
