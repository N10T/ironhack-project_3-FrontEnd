import React, { Component } from 'react';
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


export default class FormBuilding extends Component {

    state = {
        name:"",
        adress:{
            number:"",
            street:"",
            postalcode:"",
            city:"",
            country:""
        },
        classes = useStyles(),
    }

    render() {
        return (
            <div>
                <form
                className={this.state.classes.root}
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
                        variant="Building name"
                        type="text"
                        name="name"
                        value={this.state.name}
                    />
                    <label
                        className="label"
                        htmlFor="adress">
                        Adress:
                    </label>
                    <TextField
                        id="outlined-basic"
                        label="Number"
                        variant="Number"
                        type="number"
                        name="number"
                        value={this.state.adress.number}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Street"
                        variant="Street"
                        type="text"
                        name="street"
                        value={this.state.adress.street}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Postalcode"
                        variant="Postalcode"
                        type="text"
                        name="postalcode"
                        value={this.state.adress.postalcode}
                    />
                    <TextField
                        id="outlined-basic"
                        label="City"
                        variant="City"
                        type="text"
                        name="city"
                        value={this.state.adress.city}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Country"
                        variant="Country"
                        type="text"
                        name="country"
                        value={this.state.adress.country}
                    />
                    <Button
                    variant="contained"
                    color="primary"
                    href="#contained-buttons">
                    create
                    </Button>
                </form>
            </div>
        )
    }
}
