import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./../components/palette/palette";


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

<ThemeProvider theme={theme}>
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
      </ThemeProvider>
        </div>
    )
}
