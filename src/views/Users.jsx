//React
import React, { useState, useEffect, makeStyles } from "react";

//Style
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import IconButton from '@material-ui/core/IconButton';
import APIHandler from "../api/APIHandler";

//Components
import SearchBar from "./../components/SearchBar";
import UserDetail from "./../components/UserDetail";
import ReactLoading from "react-loading";
import palette from "./../components/palette/palette"
const api = new APIHandler();


export default function Users() {
  const [users, setUsers] = useState([]);
  const [usersFiltered, setUsersFiltered] = useState([]);
  
  useEffect(() => {
    api.get("/users")
      .then(DBres => {
        setUsers([...DBres.data].sort((a,b)=> a.name-b.name));
        setUsersFiltered(DBres.data);
      })
      .catch(err => console.error(err));
  }, []);

  const searchHandler = e => {
    usersFiltered(
      users.filter((info, ind, arr) =>
        e.target.value
          ? info.textContent
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          : arr
      )
    );
  };

  const usersMapper = arr => arr.map((a, index) => <UserDetail data={a} key={index} /> )
  return (
    <div id="users">

<Fab href="/user/create-a-chat" id="addIcon" size="medium" color="primary" aria-label="add">
        <AddIcon />
      </Fab>

      <SearchBar clbk={searchHandler} />
      <div className="infocards text-focus-in">
        {users ? usersMapper(usersFiltered).length ? usersMapper(usersFiltered) : <ReactLoading className="fixed" top="50vh" left="20vw" type="bubbles" color={palette.palette.primary.main} height={10} width="100vw" />
         : (
          <ReactLoading position="fixed" top="50vh" left="20vw" type="bubbles" color={palette.palette.primary.main} height={10} width="100vw" />
        )}
    </div>
    </div>
  );
}
