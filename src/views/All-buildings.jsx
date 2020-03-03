//React
import React, { useState, useEffect, makeStyles } from "react";

//Style
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import IconButton from '@material-ui/core/IconButton';


//Components
import SearchBar from "./../components/SearchBar";
import BuildingDetail from "./../components/BuildingDetail";

export default function Buildings() {
  const [buildings, setBuildings] = useState([]);
  const [buildingsFiltered, setBuildingsFiltered] = useState([]);
  
  const searchHandler = e => {
    buildingsFiltered(
      buildings.filter((info, ind, arr) =>
        e.target.value
          ? info.textContent
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          : arr
      )
    );
  };
  return (
    <div id="buildings">

<Fab href="/user/create-a-chat" id="addIcon" size="medium" color="primary" aria-label="add">
        <AddIcon />
      </Fab>

      <SearchBar clbk={searchHandler} />
      <BuildingDetail />
      <BuildingDetail />
      <BuildingDetail />

    </div>
  );
}
