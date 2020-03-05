import APIHandler from "./../api/APIHandler";

// React
import React, { useContext } from "react";
import UserContext from "./../auth/UserContext";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

import { useAuth } from "./../auth/useAuth";

// Style
import { makeStyles, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AdminDrawer from "./AdminDrawer";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { withRouter } from "react-router-dom";

// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';
// import IconButton from "@material-ui/core/IconButton";
// import AddBoxIcon from "@material-ui/icons/AddBox";
// import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

// Component
// import LogOut from "./LogOut";
const api = new APIHandler();

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(4),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 5),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

export default withRouter(function ButtonAppBar(props) {
  const { currentUser, isLoggedIn } = useAuth();
  const isBar = () =>
    window.location.pathname !== "/signin" ||
    window.location.pathname !== "/signup" ||
    window.location.pathname !== "/discover" ||
    window.location.pathname !== "/";

  const classes = useStyles();
  const userContext = useContext(UserContext);
  const { setCurrentUser } = userContext;

  const handleSignout = () => {
    api.post("/auth/signout").finally(() => {
      setCurrentUser(null);
    });
    window.location.href = "/signin";
    console.log("YAAAA");
  };

  if (!currentUser) return null;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          {currentUser.role === "super admin" ||
          currentUser.role === "admin" ? (
            <AdminDrawer />
          ) : (
            ""
          )}
          <Typography variant="h4" className={classes.title + " vcenter"}>
            <NavLink to="/user/building" className="styleNone">
              <img src="/logo/CocoonWhite.png" alt="White Cocoon" />
              co-coon
            </NavLink>
          </Typography>
          {/* {window.location.pathname === "/user/building" &&           <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={e => props.clbk(e)}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>} */}
          <NavLink to="/signin" activeStyle={{ backgroundColor: "white" }}>
            <ExitToAppIcon id="logout" onClick={handleSignout} />
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
});
