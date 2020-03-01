import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import theme from './../palette/palette'
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 350
    },
    button: {
      margin: theme.spacing(1),
    }
  }
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <div className="fullwidth">
      <form
        className={classes.root + " one-column"}
        noValidate
        autoComplete="off"
      >
        <TextField
          disabled
          id="standard-basic"
          label="Enter an email to send this key"
          size="small"
          />
        <TextField
          disabled
          id="filled-read-only-input"
          label="Unique key"
          defaultValue="d0562068-5983-11ea-8e2d-0242ac130003"
          variant="outlined"
          size="small"
          />
<TextField required="true" focused="true" id="outlined-basic" label="E-mail" variant="outlined" />

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          size="small"
          endIcon={<SendIcon/>}
        >
          Send
        </Button>
      </form>
    </div>
  );
}
