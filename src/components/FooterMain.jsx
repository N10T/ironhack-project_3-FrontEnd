//React
import React, { useState, useEffect, useContext } from "react";
import { useAuth } from "./../auth/useAuth";
// Style
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from "@material-ui/icons/Home";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ApartmentIcon from "@material-ui/icons/Apartment";

// Component
import MessageBadge from "./Badge/MessageBadge";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    botton: 0
  }
});

export default function LabelBottomNavigation() {
  const { currentUser, isLoggedIn, isLoading } = useAuth();
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      id="footer"
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <Link to="/" component={RouterLink}>
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      </Link>
      {currentUser && (
        <Link to={`/profile/${currentUser._id}`} component={RouterLink}>
          <BottomNavigationAction
            label="Profile"
            value="profile"
            icon={<AccountCircleIcon />}
          />
        </Link>
      )}
      {/* <BottomNavigationAction href="/admin/building" label="My profile" value="profile" icon={<AccountCircleIcon />} /> */}
      <Link to="/building/create-information" component={RouterLink}>
        <BottomNavigationAction
          label=""
          value="New post"
          icon={<AddCircleIcon />}
        />
      </Link>
      <Link to="/user/messages" component={RouterLink}>
        <BottomNavigationAction value="Messages" icon={<MessageBadge />} />
      </Link>
      <Link to="/user/building" component={RouterLink}>
        <BottomNavigationAction
          label=""
          value="My cocoon"
          icon={<ApartmentIcon />}
        />
      </Link>
    </BottomNavigation>
  );
}
