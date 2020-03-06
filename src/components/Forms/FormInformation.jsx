// React
import React from "react";
import APIHandler from './../../api/APIHandler';
import { useState } from "react";

// Style
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import ImageInfo from "./../Upload/ImageInfo";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import {useAuth} from './../../auth/useAuth'
import Alert from '@material-ui/lab/Alert';


const api = new APIHandler();


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
    width: 350
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  button: {
    margin: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function FormInformation() {
  const classes = useStyles();
  const { currentUser} = useAuth();
  // console.table(currentUser ? currentUser : "LOGOUT");
  
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  
  // const handleChange = name => event => {
  //   setState({
  //     ...state,
  //     [name]: event.target.value
  //   });
  // };

  
  const [formValues, setFormValues] = useState({});
  const [avatar, setAvatar] = useState("");
  const [tmpAvatar, setTmpAvatar] = useState("");
  const [alert, setAlert] = useState(false);



  const handleSubmit = e => {
    e.preventDefault();
if(formValues.description.length < 5){
  setAlert(true)
  setTimeout(() => {
    setAlert(false)
  }, 5000);
  return
}
    const data = new FormData();
    data.append("publicationDate", Date.now());
    data.append("category", formValues.category ? formValues.category : "General");
    data.append("textContent", formValues.description);
    data.append("multimediaContent", avatar);
    data.append("userOwner", currentUser._id);
    data.append("buildings", currentUser.buildings[0]);
    
    api.post('/informations', data);
    console.log("submit");
    console.log(data);
    setTimeout(()=>window.location.href = "/user/building", 1000)
    
  }

  const handleInputs = e => {
    const value = e.target.value;
    const name = e.target.name;
    
    setFormValues({ ...formValues, [name]: value});
    
    // formValues.category = state.category
    // console.log(formValues);
  }

  const handleImage = e => {
    setAvatar(e.target.files[0]);
    const tmpUrl =URL.createObjectURL(e.target.files[0]);
    setTmpAvatar(tmpUrl);
  };

  // For geting the user information is necesary to use a useEffect to get it from the db.

  return (
<div className="user-form">
 <form
        className={classes.root}
        noValidate
        autoComplete="off"
        id="newInformation"
        onSubmit={handleSubmit}
        onChange={handleInputs}
      >
      <Card raised="true" className={classes.root + " center"}>
        <CardHeader
          avatar={
            <Avatar src={currentUser ? currentUser.avatar : ""} aria-label="avatar" className={classes.avatar}>
              {currentUser ? currentUser.name.substring(0,1) : ""}
            </Avatar>
          }

          action={
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel required="true" ref={inputLabel} htmlFor="outlined-category-native-simple">
                Categorie
              </InputLabel>
              <Select
                native
                value={formValues.category}
                // onChange={handleChange()}
                labelWidth={labelWidth}
                inputProps={{
                  name: "category",
                  id: "outlined-category-native-simple"
                }}
                defaultValue="General"
                name="category"
              >
                <option value="" />
                <option value={"Social"}>Social</option>
                <option value={"Caring"}>Caring</option>
                <option value={"Nearby"}>Nearby</option>
                <option value={"Admin Notices"}>Admin Notices</option>
                <option value={"General"} selected>General</option>
              </Select>
            </FormControl>
          }
          title={currentUser ? currentUser.name : ""}
          subheader={currentUser ? currentUser.lastname : ""}
        />
        <CardContent>
          <ImageInfo tmpAvatar={tmpAvatar} clbk={handleImage} />
        </CardContent>
        <CardContent>
          <TextField
            id="outlined-multiline-static"
            label="informations"
            multiline
            rows="4"
            // defaultValue="Default Value"
            variant="outlined"
            fullWidth='true'
            name="description"
          />
        </CardContent>
        <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
        size="large"
        // endIcon={<Icon>send</Icon>}
      >
      submit
      </Button>
      </Card>
      {alert && <Alert id="alert" variant="outlined" severity="warning">
        Complete the information please
      </Alert>}
  </form>
  </div>
  );
}
