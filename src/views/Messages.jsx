//React
import React, { useState, useEffect, useContext } from "react";
import APIHandler from './../api/APIHandler';

//Style
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
// import IconButton from '@material-ui/core/IconButton';
import {useAuth} from './../auth/useAuth'
import UserContext from "./../auth/UserContext";


//Components
import SearchBar from "./../components/SearchBar";
import UserFirstMessage from "./../components/userFirstMessage";
const api = new APIHandler();

export default function Messages() {
  const { currentUser, isLoggedIn, isLoading} = useAuth();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [messagesFiltered, setMessagesFiltered] = useState([]);
  const userContext = useContext(UserContext);
  const { setCurrentUser } = userContext;
  
  useEffect(() => {
    api.get(`/users`)
      .then(DBres => {
        setMessages([...DBres.data.filter(a=>a.email === currentUser.email)[0].messages].sort((a,b)=>b.sendDate < a.sendDate ? -1 : 1))
        setUsers(DBres.data)
        console.table("messages",(DBres.data.filter(a=>a.email === currentUser.email)[0].messages))
        console.table("users",DBres.data)

      })
      .catch(err => console.error(err));
    }, [currentUser]);
    
    useEffect(() => setMessagesFiltered([...messages].sort((a,b)=>b.sendDate < a.sendDate ? -1 : 1)),[messages])

// console.table("MIX",mixUser())

  const searchHandler = e => {
    setMessagesFiltered(
      messages.filter((message, ind, arr) =>
        e.target.value
          ? message.textContent
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          : [...arr].sort((a,b)=>b.sendDate < a.sendDate ? -1 : 1)
      )
    );
  };
  return (
    <div id="messages">

<Fab href="/user/create-a-chat" id="addIcon" size="medium" color="primary" aria-label="add">
        <AddIcon />
      </Fab>

      <SearchBar clbk={(e)=>searchHandler(e)} />
      { messagesFiltered.map((a,i)=>  <UserFirstMessage key={i} users={users} data={a}/>)}

    </div>
  );
}
