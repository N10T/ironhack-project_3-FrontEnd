import React,{ useState, useEffect, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ForumIcon from '@material-ui/icons/Forum';

import {useAuth} from './../../auth/useAuth'
import APIHandler from "../../api/APIHandler";

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const api = new APIHandler();

export default function SimpleBadge() {
  const { currentUser, isLoggedIn, isLoading} = useAuth();
  const [newMessages, setNewMessages] = useState(currentUser ? currentUser.newMessages : 0);
  const classes = useStyles();
  const  eraseNewMessages = () => api.patch(`users/no-new-messages/${currentUser._id}`)
  
  // useEffect(() => {
  //   setNewMessages(currentUser.newMessages);
  // }, [currentUser.newMessages]);
  
  // console.log("NM",currentUser)
  // console.log("NM",isLoggedIn)
  return (
    <div className={classes.root}>
      <Badge badgeContent={currentUser ? currentUser.newMessages : "X"} onClick={eraseNewMessages} color="primary">
        <ForumIcon />
      </Badge>
    </div>
  );
}
