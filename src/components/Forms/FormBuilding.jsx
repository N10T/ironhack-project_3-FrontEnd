import React from 'react';

// styles
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

export default function FormBuilding () {
  const classes = useStyles();

  return (
      <form
                className={classes.root}
                noValidate
                autoComplete="off"
                id="newBuilding"
                // onSubmit={this.handleFormSubmit}
                // onChange={this.handleInputs}
                >
                    <h2>Building:</h2>
                    <TextField
                        id="outlined-basic"
                        label="Building name"
                        variant="outlined"
                        type="text"
                        name="name"
                    />
                    <label
                        className="label"
                        htmlFor="adress">
                        Adress:
                    </label>
                    <TextField
                        id="outlined-basic"
                        label="Number"
                        variant="outlined"
                        type="number"
                        name="number"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Street"
                        variant="outlined"
                        type="text"
                        name="street"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Postalcode"
                        variant="outlined"
                        type="text"
                        name="postalcode"
                    />
                    <TextField
                        id="outlined-basic"
                        label="City"
                        variant="outlined"
                        type="text"
                        name="city"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Country"
                        variant="outlined"
                        type="text"
                        name="country"
                    />
                    <Button
                    variant="contained"
                    color="primary"
                    href="#contained-buttons">
                    create
                    </Button>
                </form>
  );
}