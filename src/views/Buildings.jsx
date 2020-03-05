// React
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { useAuth } from "./../auth/useAuth";
// Style
import { makeStyles } from '@material-ui/core/styles';
import ReactLoading from "react-loading";
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/Assignment';
import SaveIcon from '@material-ui/icons/Info';
import PrintIcon from '@material-ui/icons/OpenWith';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import All from '@material-ui/icons/SettingsBackupRestore';

// Component
import InfoCard from "./../components/InfoCard";
import SearchBar from "./../components/SearchBar";
import APIHandler from "./../api/APIHandler";
import palette from "./../components/palette/palette";


const useStyles = makeStyles(theme => ({
  root: {
    height: 380,
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'fixed',
    bottom: theme.spacing(8),
    right: theme.spacing(4),
  },
}));

const actions = [
  { icon: <All />, name: 'All' },
  { icon: <ShareIcon />, name: 'Social' },
  { icon: <FavoriteIcon />, name: 'Caring' },
  { icon: <PrintIcon />, name: 'Nearby' },
  { icon: <FileCopyIcon />, name: 'Admin' },
  { icon: <SaveIcon />, name: 'General' },
];


const api = new APIHandler();

export default withRouter(function Buildings() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  // const handleVisibility = () => {
  //   setHidden(prevHidden => !prevHidden);
  // };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (category) => {
    setOpen(false);
    if(category === "All") category = ""
    setCategory(category)
  };
  
  const { currentUser, isLoading } = useAuth();
  const [users, setUsers] = useState([]);
  const [infos, setInfos] = useState([]);
  const [infosFiltered, setInfosFiltered] = useState(infos);
  const [category, setCategory] = useState("");
  // const userB = currentUser.buildings;
  
  useEffect(() => {
    
    api.get(`/users/`)
    .then(DBres => {setUsers(DBres.data)})
    .catch(err => console.error(err))}
, []);

  useEffect(() => {
    const userOK = currentUser ? currentUser.buildings[0] : [];    
    setTimeout(()=>{api
      .get(`/buildings/${userOK}`)
      .then(DBres => {
        
        setInfos(DBres.data.informations);
        setInfosFiltered(DBres.data.informations);
      })
      .catch(err => console.error(err));},10)
  }, [currentUser]);

  const searchHandler = e => {
    console.log(e.target.value)
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

      <div>

      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon />}
        onClose={()=>{handleClose("")}}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={()=>{handleClose(action.name)}}
          />
        ))}
      </SpeedDial>
    </div>



    


      <div className="infocards text-focus-in">
        {!isLoading ? infoMapper(infosFiltered.filter(a=>a.category.includes(category))) : (
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
        }
      </div>
    </>
  );
}
)