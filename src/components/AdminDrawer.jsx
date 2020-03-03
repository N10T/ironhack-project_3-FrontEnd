import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Edit from "@material-ui/icons/Edit";
import MailIcon from "@material-ui/icons/Mail";
import SupervisedUserCircle from "@material-ui/icons/SupervisedUserCircle";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

const useStyles = makeStyles({
  list: {
    width: 200
  },
  fullList: {
    width: "auto"
  }
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button component="a" href="/building/create-information">
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Create building" />
        </ListItem>
        <ListItem button component="a">
          <ListItemIcon>
            <Edit />
          </ListItemIcon>
          <ListItemText primary="Edit building" />
        </ListItem>
        <ListItem button component="a" href="/admin/key">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Send key" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component="a" href="/admin/buildings">
          <ListItemIcon>
            <SupervisedUserCircle />
          </ListItemIcon>
          <ListItemText primary="User list" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <MenuOpenIcon id="Admin-icon" onClick={toggleDrawer("left", true)} />
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {sideList("left")}
      </SwipeableDrawer>
    </div>
  );
}
