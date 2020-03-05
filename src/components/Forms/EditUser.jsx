// React
import React, {useState, useEffect} from "react";
import APIHandler from './../../api/APIHandler';

// Style
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

    // api.get("/admin/buildings")
    // .findOne({ keys: key })
    // .then(building => )
    
    const data = new FormData();
    data.append("name", formValues.name || "");
    data.append("lastname", formValues.lastname || "");
    data.append("email", formValues.email || "");
    // data.append("key", formValues.key || "");
    data.append("avatar", avatar);
  
    api.patch("/users/" + props.match.params.id, data).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err.response)
    })  
  }
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
          id="avatarForm"
          tmpAvatar={tmpAvatar||formValues.avatar} clbk={handleImage} 
          />
          <TextField
            id="standard-basic"
            label="Information"
            size="small"
            disabled
            />
          <TextField
            required="true"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            defaultValue={formValues.name}
            size="small"
            />
          <TextField
          required="true"
          id="outlined-basic"
          label="Lastname"
          variant="outlined"
          name="lastname"
          defaultValue={formValues.lastname}
          size="small"
          />
          <TextField
          type="email"
          required="true"
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          name="email"
          defaultValue={formValues.email}
          size="small"
          />
          <TextField
          id="outlined-basic"
          label="Your new building key (in construction)"
          variant="outlined"
          name="key"
          size="small"
          disabled
          />
          <TextField
            id="standard-basic"
            label="Buildings"
            size="small"
            disabled
            size="small"
            />
            <List className={classes.root} subheader={<ul />}>
                {formValues.buildings.map((building,i) => (
                <ListItem key={i}>
                    <ListItemText primary={building.name} />
                </ListItem>
                ))}
            </List>
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
