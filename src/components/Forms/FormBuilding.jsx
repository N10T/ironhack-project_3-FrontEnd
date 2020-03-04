import React, {useState} from 'react';
import APIHandler from './../../api/APIHandler';

// styles
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const api = new APIHandler();

const FormBuilding = props => {

  const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 250
      }
    }
  }));

  const classes = useStyles();
  const [formValues, setFormValues] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    console.log("vvvvvvvvvv - submited - vvvvvvvvvv");
    console.table(formValues)
    api.post("/buildings", formValues);

  setTimeout(window.location.href = `/admin/building/`,250)
  };

  const handleInputs = e => {
    const value = e.target.value;
    const name = e.target.name;
    setFormValues({ ...formValues, [name]: value});
  };

  return (
    <form
        className={classes.root + " one-column"}
        noValidate
        autoComplete="off"
        id="newBuilding"
        onSubmit={handleSubmit}
        onChange={handleInputs}
        >
            <TextField
            id="standard-basic"
            label="Building"
            size="small"
            disabled
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
            disabled
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
            type="submit"
            variant="contained"
            color="primary"
            >
            create
            </Button>
        </form>
  );
};

export default FormBuilding;