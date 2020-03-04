// React
import React, { useState, useEffect } from "react";

// Style
import ReactLoading from "react-loading";

// Component
import InfoCard from "./../components/InfoCard";
import SearchBar from "./../components/SearchBar";
import APIHandler from "../api/APIHandler";
import palette from "./../components/palette/palette"
import {useAuth} from "./../auth/useAuth"

const api = new APIHandler();

export default function Buildings() {
  const {currentUser, isLoggedIn, isLoading } = useAuth();
  const [infos, setInfos] = useState([]);
  const [infosFiltered, setInfosFiltered] = useState([]);

  console.log(currentUser);

  useEffect(() => {
    api.get("/informations")
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
        {infos ? infoMapper(infosFiltered).length ? infoMapper(infosFiltered) : <ReactLoading className="fixed" top="50vh" left="20vw" type="bubbles" color={palette.palette.primary.main} height={10} width="100vw" />
         : (
          <ReactLoading position="fixed" top="50vh" left="20vw" type="bubbles" color={palette.palette.primary.main} height={10} width="100vw" />
        )}
      </div>
    </>
  );
}
