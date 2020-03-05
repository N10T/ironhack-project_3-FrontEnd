// React
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { useAuth } from "./../auth/useAuth";
// Style
import ReactLoading from "react-loading";

// Component
import InfoCard from "./../components/InfoCard";
import SearchBar from "./../components/SearchBar";
import APIHandler from "../api/APIHandler";
import palette from "./../components/palette/palette";

const api = new APIHandler();

export default withRouter(function Buildings() {
  const { currentUser, isLoading } = useAuth();
  const [users, setUsers] = useState([]);
  const [infos, setInfos] = useState([]);
  const [infosFiltered, setInfosFiltered] = useState(infos);
  const userB = currentUser.buildings;
 
 useEffect(() => {

    api.get(`/users/`)
    .then(DBres => {setUsers(DBres.data)})
    .catch(err => console.error(err))}
, []);

  useEffect(() => {
    const userOK = userB ? userB[0] : [];    
    setTimeout(()=>{api
      .get(`/buildings/${userOK}`)
      .then(DBres => {
        
        setInfos(DBres.data.informations);
        setTimeout(()=>{setInfosFiltered(DBres.data.informations)},1500);
      })
      .catch(err => console.error(err));},10)
  }, [currentUser]);

  const searchHandler = e => {
    setInfosFiltered(
      infos.filter((info, ind, arr) =>
        e.target.value
          ? info.textContent
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          : arr
      )
    );
  };

  const infoMapper = arr =>
    arr.map((info, index) => <div className="slide-in-top" key={index}>  <InfoCard data={info} users={users} /></div>);

  return (
    <>
      <SearchBar clbk={searchHandler} />
      <div className="infocards text-focus-in">
        {!isLoading ? (
          infoMapper(infosFiltered ? infosFiltered : infos ).length ? (
            infoMapper(infos)
          ) : (
            <ReactLoading
              className="fixed"
              top="50vh"
              left="20vw"
              type="bubbles"
              color={palette.palette.primary.main}
              height={10}
              width="100vw"
            />
          )
        ) : (
          <ReactLoading
            position="fixed"
            top="50vh"
            left="20vw"
            type="bubbles"
            color={palette.palette.primary.main}
            height={10}
            width="100vw"
          />
        )}
      </div>
    </>
  );
}
)