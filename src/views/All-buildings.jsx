import APIHandler from "../api/APIHandler";

//React
import React, { useState, useEffect, makeStyles } from "react";

//Style
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import IconButton from '@material-ui/core/IconButton';

//Components
import SearchBar from "./../components/SearchBar";
import BuildingDetail from "./../components/BuildingDetail";
import ReactLoading from "react-loading";
import palette from "./../components/palette/palette"


const api = new APIHandler();

export default function Buildings() {
  const [buildings, setBuildings] = useState([]);
  const [buildingsFiltered, setBuildingsFiltered] = useState([]);


  useEffect(() => {
    api.get("/buildings")
      .then(DBres => {
        setBuildings([...DBres.data].sort((a,b)=> a.name-b.name));
        setBuildingsFiltered(DBres.data);
      })
      .catch(err => console.error(err));
  }, []);

  const searchHandler = e => {
    setBuildingsFiltered(
      buildings.filter((building, ind, arr) =>
        e.target.value
          ? building.name
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          : arr
      )
    );
  };
  const buildingsMapper = arr => arr.map((a, index) => <BuildingDetail data={a} key={index} /> )

  return (
    <div id="buildings">

{/* <Fab href="/user/create-a-chat" id="addIcon" size="medium" color="primary" aria-label="add">
        <AddIcon />
      </Fab> */}

      <SearchBar clbk={searchHandler} />
      <div className="infocards text-focus-in">
        {buildings ? buildingsMapper(buildingsFiltered).length ? buildingsMapper(buildingsFiltered) : <ReactLoading className="fixed" top="50vh" left="20vw" type="bubbles" color={palette.palette.primary.main} height={10} width="100vw" />
         : (
          <ReactLoading position="fixed" top="50vh" left="20vw" type="bubbles" color={palette.palette.primary.main} height={10} width="100vw" />
        )}
      </div>
      
    </div>
  );
}
