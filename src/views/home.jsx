// React
import React from "react";

// Component
import Button from "@material-ui/core/Button";

// Style
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function Home() {
    const classes = useStyles();

    return (
        <div id="main-page" className="one-column center">

<div id="main-logo"><h1>LOGO HERE</h1></div>

  <div className="buttons">
        <Button
        href="/discover"
        variant="contained"
        color="primary"
        className={classes.button}
        size="large"
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
      </Button>
      </div>
        </div>
    )
}
