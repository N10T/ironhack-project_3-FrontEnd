// React
import React, { useState, useEffect } from "react";

// Style

// Component
import InfoCard from "./../components/InfoCard";
import SearchBar from "./../components/SearchBar";
import APIHandler from "../api/APIHandler";

export default function Buildings() {
  const [infos, setInfos] = useState([]);
  const [infosFiltered, setInfosFiltered] = useState([]);

  useEffect(() => {
    APIHandler.get("/informations")
      .then(DBres => {
        setInfos(DBres.data);
        setInfosFiltered(DBres.data);
      })
      .catch(err => console.error(err));
  }, []);

  const searchHandler = e => {
    setInfosFiltered(
      infos.filter((info, ind, arr) =>
        e.target.value ? info.textContent.toLowerCase().includes(e.target.value.toLowerCase()) : arr
      )
    );
    console.log(e.target.value);
// console.log(window.location.pathname === "/user/building");

  };

  return (
    <>
      <SearchBar clbk={searchHandler} />
      <div className="infocards text-focus-in">
        {infos ? (
          infosFiltered.map((info, index) => <InfoCard info={info} key={index} />)
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
}
