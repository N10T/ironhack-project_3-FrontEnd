import React from 'react'
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./../components/palette/palette";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function Discover() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
        <div className="one-column center discover">
            <iframe height="315" src="https://www.youtube.com/embed/Xaj06KdTwLA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        size="small"
        // endIcon={<Icon>send</Icon>}
        >
        sign in
      </Button>
        </div>
        </ThemeProvider>
    )
}
