// React
import React, {useState, useEffect} from "react";

// Style

// Component
import InfoCard from "./../components/InfoCard";
import SearchBar from "./../components/SearchBar";
import APIHandler from "../api/APIHandler";

export default function Buildings() {
const [infos, setInfos] = useState([]);
 
useEffect(() => {
APIHandler.get("/informations").then(DBres=> setInfos(DBres.data)).catch(err => console.error(err)
)},[])

  return (
    <>
      <SearchBar />
      <div className="infocards text-focus-in">
      {infos ? infos.map((info,index)=> <InfoCard info={info} key={index}/>) : <p>Loading</p>}
      </div>
      </>
  );
}
