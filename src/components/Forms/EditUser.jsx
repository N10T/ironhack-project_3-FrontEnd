// React
import React, {useState, useEffect} from "react";
import APIHandler from './../../api/APIHandler';

// Style
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// Component
import AvatarUser from "../Upload/AvatarUser";

const api = new APIHandler();

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

const EditUser = props => {
  const classes = useStyles();

  const [formValues, setFormValues] = useState({});
  const [avatar, setAvatar] = useState("");
  const [tmpAvatar, setTmpAvatar] = useState("");

  useEffect( () => {
      api.get("/users/" + props.match.params.id)
      .then(res => {
        setFormValues(res.data)
        // setAvatar(res.data.avatar)
        // setTmpAvatar(res.data.avatar)
        console.table(res.data)})
  }, [])

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
    console.log(formValues);
    const data = new FormData();
    data.append("name", formValues.name || "");
    data.append("lastname", formValues.lastname || "");
    data.append("email", formValues.email || "");
    // data.append("key", formValues.key || "");
    // data.append("password", formValues.password || "");
    data.append("avatar", avatar);
    console.log(data);
    api.patch("/users/" + props.match.params.id, data).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err.response)
    })  
  }
  console.log(formValues, "this is form")
  return ( formValues.name ?
    <div className="user-form">
      <form
        className={classes.root + " one-column"}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        onChange={handleInputs}
      >
          <AvatarUser
          tmpAvatar={tmpAvatar||formValues.avatar} clbk={handleImage} 
          />
          <TextField
            required="true"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            defaultValue={formValues.name}
            />
          <TextField
          required="true"
          id="outlined-basic"
          label="Lastname"
          variant="outlined"
          name="lastname"
          defaultValue={formValues.lastname}
          />
          <TextField
          type="email"
          required="true"
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          name="email"
          defaultValue={formValues.email}
          />
          {/* <TextField
          id="outlined-basic"
          label="Your building key"
          variant="outlined"
          name="key"
          /> */}
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
            edit
            </Button>
          </div>
      </form>
    </div>: <p>Loading ...</p>
  );
}

export default EditUser;
