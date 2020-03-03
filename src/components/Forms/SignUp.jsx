
// React
import React, {useState} from "react";
import APIHandler from './../../api/APIHandler';

// Style
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// Component
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

export default function SignUp() {
  const classes = useStyles();

  const [formValues, setFormValues] = useState({});
  const [avatar, setAvatar] = useState("");
  const [tmpAvatar, setTmpAvatar] = useState("");

  const handleInputs = e => {
    const value = e.target.value;
    const name = e.target.name;
    setFormValues({ ...formValues, [name]: value});
  };

  const handleImage = e => {
    setAvatar(e.target.files[0]);
    const tmpUrl =URL.createObjectURL(e.target.files[0]);
    setTmpAvatar(tmpUrl);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValues)
    const data = new FormData();
    data.append("name", formValues.name || "");
    data.append("lastname", formValues.lastname || "");
    data.append("email", formValues.email || "");
    data.append("key", formValues.key || "");
    data.append("password", formValues.password || "");
    data.append("avatar", avatar);
    
    APIHandler.post('/auth/signup', data).then(res => {
      console.log(res.data)
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
          <AvatarUser
          tmpAvatar={tmpAvatar} clbk={handleImage} 
          />
          <TextField
            required="true"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            />
          <TextField
          required="true"
          id="outlined-basic"
          label="Lastname"
          variant="outlined"
          name="lastname"
          />
          <TextField
          type="email"
          required="true"
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          name="email"
          />
          <TextField
          id="outlined-basic"
          label="Your building key"
          variant="outlined"
          name="key"
          />
          <TextField
          type="password"
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
            sign up
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              size="small"
              href="/signin"
              //   endIcon={<Icon>send</Icon>}
            >
              sign in
            </Button>
          </div>
      </form>
    </div>
  );
}
