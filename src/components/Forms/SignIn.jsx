// React
import React, { useState, useContext } from "react";
import APIHandler from "./../../api/APIHandler";
import { Link as RouterLink } from "react-router-dom";
import UserContext from "../../auth/UserContext";
// Styles
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Alert from '@material-ui/lab/Alert';
// import AvatarUser from "../Upload/AvatarUser";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 350
    },
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(1)
    }
  }
}));

const api = new APIHandler();

export default function Signin({ history }) {
  const classes = useStyles();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formValues, setFormValues] = useState({});
  const [alert, setAlert] = useState(false);
  

  const handleInputs = e => {
    const value = e.target.value;
    const name = e.target.name;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();

    api
      .post("/auth/signin", formValues)
      .then(res => {
        console.log(res.data);
        setCurrentUser(res.data.currentUser);
        // setTimeout(() => {
        history.push("/user/building");

        // }, 3000);
      })
      .catch(err => {
        setAlert(true)
        setTimeout(() => {
          setAlert(false)
        }, 3000);
        console.log(err.response);
      });
  };

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
          required={true}
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          name="email"
        />
        <TextField
          type="password"
          required={true}
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
            component={RouterLink}
            to="/signup"
            //   endIcon={<Icon>send</Icon>}
          >
            sign up
          </Button>
          <div className={classes.root}>
      {alert && <Alert id="alert" variant="outlined" severity="error">
        Wrong email or password
      </Alert>}
        {/* <Alert variant="outlined" severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="info">
          This is an info alert — check it out!
        </Alert>
        <Alert variant="outlined" severity="success">
          You are logged in
        </Alert> */}
    </div>
        </div>
      </form>
    </div>
  );
}
