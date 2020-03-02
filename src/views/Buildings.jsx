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
        setInfos([...DBres.data].sort((a,b)=> a.publicationDate-b.publicationDate));
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
// console.log(window.location.pathname === "/user/building");
  };

  const infoMapper = arr => arr.map((info, index) => <InfoCard info={info} key={index} /> )

  return (
    <>
      <SearchBar clbk={searchHandler} />
      <div className="infocards text-focus-in">
        {infos ? infoMapper(infosFiltered).length ? infoMapper(infosFiltered) : <p className="flex center">No cards</p>
         : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
}
