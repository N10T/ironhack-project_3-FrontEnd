// React
import React from 'react'

// Style
import { makeStyles } from "@material-ui/core/styles";

// Component
import Button from "@material-ui/core/Button";



const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function Discover() {
    const classes = useStyles();

    return (
        <div className="one-column center discover">
            <iframe title="video" height="315" src="https://www.youtube.com/embed/Xaj06KdTwLA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Button
        href="/signin"
        variant="contained"
        color="primary"
        className={classes.button}
        size="large"
        // endIcon={<Icon>send</Icon>}
        >
        sign in
      </Button>
        </div>
    )
}
