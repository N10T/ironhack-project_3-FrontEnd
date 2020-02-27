import React, {useState, useEffect} from 'react';

// styles
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import APIHandler from './../../api/APIHandler'

const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 250
      }
    }
  }));

export default function FormBuilding ({mode = "create", _id, history, match}) {
  const classes = useStyles();
  const [
      { name, number, street, postalcode, city, country},
      setState
  ] = useState({
      name:"",
      number:"",
      street:"",
      postalcode:"",
      city:"",
      country:""
  });

  const handleInputs = e => {
      e.persist();
      setState(prevValues => ({
        ...prevValues,
        [e.target.name]: e.target.value
      }));
      console.log({name, number, street, postalcode, city, country});
  };

  const handleFormSubmit = async e => {
      e.preventDefault();
      const fd = new FormData();
      fd.append("name", name);
      fd.append("number", number);
      fd.append("street", street);
      fd.append("postalcode", postalcode);
      fd.append("city", city);
      fd.append("country", country);

    //   try {
    //       history.push("/building")
    //   }
  }

  return (
    //   <div className="fullwidth">
      <form
        className={classes.root+" one-column"}
        noValidate
        autoComplete="off"
        id="newBuilding"
        fullWidth
        onSubmit={handleFormSubmit}
        onChange={handleInputs}
        >
            <TextField
            id="standard-basic"
            label="Building"
            size="small"
            />
            <TextField
            id="outlined-basic"
            label="Building name"
            variant="outlined"
            type="text"
            name="name"
            size="small"
            />
            <TextField
            id="standard-basic"
            label="Adress"
            size="small"
            />
            <TextField
            id="outlined-basic"
            label="Number"
            variant="outlined"
            type="number"
            name="number"
            size="small"
            />
            <TextField
            id="outlined-basic"
            label="Street"
            variant="outlined"
            type="text"
            name="street"
            size="small"
            />
            <TextField
            id="outlined-basic"
            label="Postalcode"
            variant="outlined"
            type="text"
            name="postalcode"
            size="small"
            />
            <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            type="text"
            name="city"
            size="small"
            />
            <TextField
            id="outlined-basic"
            label="Country"
            variant="outlined"
            type="text"
            name="country"
            size="small"
            />
            <Button
            variant="contained"
            color="primary"
            href="#contained-buttons">
            create
            </Button>
        </form>
        // </div>
  );
}