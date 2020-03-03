import React, {useState, useEffect} from 'react';
import APIHandler from './../../api/APIHandler'

// styles
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
const api = new APIHandler();

const FormBuilding = props => {

  const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 250,
        flexGrow: 1,
        maxWidth: 752,
      },
      demo: {
        backgroundColor: theme.palette.background.paper,
      }
    }
  }));

  function generate(element) {
    // return formValues.users.map(value =>
    return [0,1,2,3,4,5].map(value =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const [formValues, setFormValues] = useState();

  useEffect( () => {
    api.get("/buildings/" + props.match.params.id)
        .then(res => {setFormValues(res.data)})
  }, [])


  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
    console.log(formValues);
    api.patch("/buildings/" + props.match.params.id, formValues);
  };

  const handleInputs = e => {
    const value = e.target.value;
    const name = e.target.name;
    setFormValues({ ...formValues, [name]: value});
    console.log(formValues);
  };

  return ( formValues ?
    <div>
    {console.log(formValues)}
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
            defaultValue={formValues.name}
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
            defaultValue={formValues.adress.number}
            />
            <TextField
            id="outlined-basic"
            label="Street"
            variant="outlined"
            type="text"
            name="street"
            size="small"
            defaultValue={formValues.adress.street}
            />
            <TextField
            id="outlined-basic"
            label="Postalcode"
            variant="outlined"
            type="text"
            name="postalcode"
            size="small"
            defaultValue={formValues.adress.postalcode}
            />
            <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            type="text"
            name="city"
            size="small"
            defaultValue={formValues.adress.city}
            />
            <TextField
            id="outlined-basic"
            label="Country"
            variant="outlined"
            type="text"
            name="country"
            size="small"
            defaultValue={formValues.adress.country}
            />
            <TextField
            id="standard-basic"
            label="Users"
            size="small"
            disabled
            />
            <Grid item xs={12} md={6}>
          <div className={classes.demo}>
            <List dense={dense} className="scroll">
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
            <Button
            type="submit"
            variant="contained"
            color="primary"
            >
            edit
            </Button>
        </form>
        </div> : <p>Loading ...</p>
  );
};

export default FormBuilding;