import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

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
        <h2>enter an email to send this key</h2>
        <TextField
          disabled
          id="filled-read-only-input"
          label="Unique key"
          defaultValue="d0562068-5983-11ea-8e2d-0242ac130003"
          variant="outlined"
        />
<TextField id="outlined-basic" label="E-mail" variant="outlined" />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          // endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
      </form>
    </div>
  );
}
