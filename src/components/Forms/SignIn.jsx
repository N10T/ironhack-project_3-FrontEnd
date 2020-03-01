import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import theme from "../palette/palette";
import AvatarUser from "../Upload/AvatarUser";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 350
    },
    button: {
      margin: theme.spacing(1)
    }
  }
}));

export default function FormPropsTextFields() {

  const classes = useStyles();

  return (
    <div className="user-form">
      <form
        className={classes.root + " one-column"}
        noValidate
        autoComplete="off"
      >
          <h1>SIGN IN</h1>
 
          <TextField required="true" id="outlined-basic" label="E-mail" variant="outlined" />
          <TextField required="true" id="outlined-basic" label="Password" variant="outlined" />
          <div className="one-column">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              size="large"
              // endIcon={<Icon>send</Icon>}
            >
              sign in
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              size="small"
              href="/signup"
              //   endIcon={<Icon>send</Icon>}
            >
              sign up
            </Button>
          </div>
      </form>
    </div>
  );
}
