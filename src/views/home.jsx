// React
import React from "react";

// Component
import Button from "@material-ui/core/Button";

// Style
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div id="home-main-page" className="center">
      <div id="main-logo" className="flex vcenter text-focus-in">
        <img src="/logo/CocoonMainColor.png" alt="White Cocoon" />
        <div className="vcenter">
          <h1 className="main-color">co-coon</h1>
          <p>be aware to next door</p>
        </div>
      </div>

      <div className="buttons flex">
      <Button
        href="/discover"
        variant="contained"
        color="primary"
        className={classes.button}
        size="small"
      >
        Discover
      </Button>
      <Button
        href="/signin"
        variant="contained"
        color="secondary"
        className={classes.button}
        size="small"
        // endIcon={<Icon>send</Icon>}
      >
        sign in 
      </Button></div>
    </div>
  );  
}
