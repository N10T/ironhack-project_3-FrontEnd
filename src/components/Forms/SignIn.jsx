// React
import React, {useState} from "react";
import APIHandler from './../../api/APIHandler';

// Styles
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import AvatarUser from "../Upload/AvatarUser";

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

const api = new APIHandler();

export default function Signin({history}) {

  const classes = useStyles();

  const [formValues, setFormValues] = useState({});

  const handleInputs = e => {
    const value = e.target.value;
    const name = e.target.name;
    setFormValues({ ...formValues, [name]: value});
  }
  const handleSubmit = e => {
    e.preventDefault();

    api.post('/auth/signin', formValues).then(res => {
      console.log(res.data);
      // setTimeout(() => {
        history.push("/user/building")
      // }, 3000);  
    }).catch(err => {
      console.log(err.response)
    })
  }

  return (
    <div className="user-form">
      <form
        className={classes.root + " one-column"}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        onChange={handleInputs}
      >
          {/* <h1>SIGN IN</h1> */}
          <TextField
          required="true"
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          name="email"
          />
          <TextField 
          required="true"
          id="outlined-basic"
          label="Password"
          variant="outlined" 
          name="password"
          />
          <div className="one-column">
            <Button
              type="submit"
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
