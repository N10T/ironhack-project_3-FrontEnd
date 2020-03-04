import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import APIHandler from "./../../api/APIHandler";
import ReactLoading from "react-loading";
import palette from "./../palette/palette";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import emailjs from "emailjs-com";

const apiKey = new APIHandler(
  "https://www.uuidgenerator.net/api/version1",
  false
);
const api = new APIHandler();

const useStyles = makeStyles(theme => ({
  root: {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 350
    },
    button: {
      margin: theme.spacing(1)
    }
  }
}));
(function() {
  emailjs.init("user_oNXQwv5HRQi3FbN4pV5h2");
})();

var templateParams = {
  name: "Co-coon"
};

export default function FormPropsTextFields() {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);
  const [formValues, setFormValues] = useState({});
  const [key, setKey] = useState("");
  const [buildings, setBuildings] = useState([]);

  function sendEmail() {
    emailjs.send("default_service", "template_9SGE8ZOJ", templateParams).then(
      function(response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function(error) {
        console.log("FAILED...", error);
      }
    );
  }

  useEffect(() => {
    apiKey
      .get()
      .then(DBres => {
        setKey(DBres.data);
        templateParams.code = DBres.data;
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    api
      .get("/buildings")
      .then(DBres => {
        setBuildings(DBres.data);
        console.log(DBres.data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    sendEmail();
    api.patch(`/buildings/key/${formValues.building}`, { key }, setKey(""));
    console.log("submit");
    setTimeout(() => (window.location.href = "/user/building"), 1000);
  };

  const handleInputs = e => {
    const value = e.target.value;
    const name = e.target.name;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues.email);
  };

  return key ? (
    <div className="fullwidth">
      <form
        onSubmit={handleSubmit}
        onChange={handleInputs}
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
          value={key}
          variant="outlined"
          size="small"
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Building</InputLabel>
          <Select
            autoWidth={Boolean(true)}
            required={Boolean(true)}
            native
            // onChange={handleChange()}
            inputProps={{
              name: "building",
              id: "outlined-category-native-simple"
            }}
            name="building"
          >
            <option>SELECT A BUILDING</option>
            {buildings.map((bat, i) => (
              <option key={i} value={bat._id}>
                {bat.name}
              </option>
            ))}
          </Select>
        </FormControl>
        <TextField
          required
          focused="true"
          id="outlined-basic"
          type="email"
          name="email"
          label="E-mail"
          variant="outlined"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          size="small"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </div>
  ) : (
    <ReactLoading
      position="fixed"
      top="50vh"
      left="20vw"
      type="bubbles"
      color={palette.palette.primary.main}
      height={10}
      width="100vw"
    />
  );
}
