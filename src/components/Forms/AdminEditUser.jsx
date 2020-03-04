// React
import React, {useState, useEffect} from "react";
import APIHandler from './../../api/APIHandler';

// Component
import Avatar from '@material-ui/core/Avatar';

// Style
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

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
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));


const AdminEditUser = props => {
    const classes = useStyles();
    
    const [formValues, setFormValues] = useState({});
    // ASK!!!!!!!!
    const [checkedCanMessage, setCheckedCanMessage] = useState(formValues.CanMessage);
    const [checkedCanInfo, setCheckedCanInfo] = React.useState(formValues.canInfo);
    
  useEffect( () => {
      api.get("/users/" + props.match.params.id)
      .then(res => {
        setFormValues(res.data)
        console.table(res.data)})
  }, [])

  const handleInputs = e => {
      
    const value = e.target.checked;
    const name = e.target.name;
    setFormValues({ ...formValues, [name]: value});
  };


  const handleSubmit = e => {
    e.preventDefault();
    
    const data = new FormData();
    data.append("role", formValues.role);
    data.append("canMessage", formValues.canMessage);
    data.append("canInfo", formValues.canInfo);
  
    api.patch("/users/admin_edit/" + props.match.params.id, data).then(res => {
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
          <Avatar
            src={formValues.avatar} 
            className={classes.large}
            id={"avatarForm"}
          >
          {formValues.avatar? "": formValues.name[0]}
          </Avatar>
          <TextField
            id="standard-basic"
            label="User"
            size="small"
            disabled
            />
          <TextField
            required="true"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            defaultValue={formValues.name}
            disabled
            size="small"
            />
          <TextField
          required="true"
          id="outlined-basic"
          label="Lastname"
          variant="outlined"
          defaultValue={formValues.lastname}
          disabled
          size="small"
          />
          <TextField
          type="email"
          required="true"
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          defaultValue={formValues.email}
          disabled
          size="small"
          />
        <TextField
            id="standard-basic"
            label="Permissions"
            size="small"
            disabled
            />
        <FormControl component="fieldset">
            <FormGroup>
                    <FormControlLabel
                    control={<Switch
                    checked={checkedCanMessage}
                    />}
                    label="Send messages"
                    name="canMessage"
                    />
                    <FormControlLabel
                    control={<Switch
                    checked={checkedCanInfo}
                    />}
                    label="Post information"
                    />
            </FormGroup>
        </FormControl>
        <FormControl  size="small" variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Role
        </InputLabel>
        <Select
        native
        defaultValue={formValues.role}
        name="role"
        >
          <option value={"user"}>User</option>
          <option value={"admin"}>Admin</option>
          <option value={"super admin"}>Super Admin</option>
        </Select>
      </FormControl>

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

export default AdminEditUser;