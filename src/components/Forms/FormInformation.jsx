// React
import React, {useState} from "react";
import APIHandler from './../../api/APIHandler';

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
  // const [expanded, setExpanded] = React.useState(false);
  // const [state, setState] = React.useState({
  //   category: "General",
  //   // name: ""
  // });

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



  const handleSubmit = e => {
    e.preventDefault();

    const data = new FormData();
    data.append("publicationDate", Date.now());
    data.append("category", formValues.category);
    data.append("textContent", formValues.description);
    data.append("multimediaContent", avatar);
    // data.append("userOwner", "Andy");
    
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
            <Avatar aria-label="avatar" className={classes.avatar}>
              A
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
        //   title="CREATE INFO"
        //   subheader="September 14, 2016"
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
   
  </form>
  </div>
  );
}
