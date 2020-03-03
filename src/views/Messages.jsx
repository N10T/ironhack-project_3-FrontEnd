//React
import React, { useState, useEffect, makeStyles } from "react";

//Style
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import IconButton from '@material-ui/core/IconButton';


//Components
import SearchBar from "./../components/SearchBar";
import UserFirstMessage from "./../components/userFirstMessage";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [messagesFiltered, setMessagesFiltered] = useState([]);
  
  // useEffect(() => {
  //   APIHandler.get("/messages/:id")
  //     .then(DBres => {
  //       setMessages([...DBres.data].sort((a,b)=> a.publicationDate-b.publicationDate));
  //       setMessagesFiltered(DBres.data);
  //     })
  //     .catch(err => console.error(err));
  // }, []);

  const searchHandler = e => {
    messagesFiltered(
      messages.filter((info, ind, arr) =>
        e.target.value
          ? info.textContent
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          : arr
      )
    );
  };
  return (
    <div id="messages">

<Fab href="/user/create-a-chat" id="addIcon" size="medium" color="primary" aria-label="add">
        <AddIcon />
      </Fab>

      <SearchBar clbk={searchHandler} />
      <UserFirstMessage />
      <UserFirstMessage />
      <UserFirstMessage />
      <UserFirstMessage />
      <UserFirstMessage />
      <UserFirstMessage />
      <UserFirstMessage />
      <UserFirstMessage />
      <UserFirstMessage />
      <UserFirstMessage />
      <UserFirstMessage />
      <UserFirstMessage />
      <UserFirstMessage />
      <UserFirstMessage />
      <UserFirstMessage />
      <UserFirstMessage />
    </div>
  );
}
