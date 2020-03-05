//React
import React, { useState, useEffect } from "react";
import APIHandler from './../api/APIHandler';

//Style
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
// import IconButton from '@material-ui/core/IconButton';
import {useAuth} from './../auth/useAuth'


//Components
import SearchBar from "./../components/SearchBar";
import UserFirstMessage from "./../components/userFirstMessage";
const api = new APIHandler();

export default function Messages() {
  const { currentUser, isLoggedIn, isLoading} = useAuth();
  const [messages, setMessages] = useState([]);
  const [messagesFiltered, setMessagesFiltered] = useState([]);
  
  useEffect(() => {
    api.get("/messages")
      .then(DBres => {
        // console.log(currentUser._id);
        
        setMessages(DBres.data.map(a=>a.to._id).filter(b=> b === currentUser._id));
        setMessagesFiltered(messages);
      })
      .catch(err => console.error(err));
    }, [currentUser]);
    
    // console.table(messages)

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
      { messages.map((a,i)=>  <UserFirstMessage key={i} data={a}/>)}

    </div>
  );
}
