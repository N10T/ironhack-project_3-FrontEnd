// React
import React, { useState, useEffect, useContext } from "react";
import APIHandler from './../../api/APIHandler';

import {useAuth} from './../../auth/useAuth'

// Style
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Icon from '@material-ui/icons/Send';

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
  
  export default function Chat() {
    const classes = useStyles();
    const { currentUser, isLoggedIn, isLoading} = useAuth();
    const [users, setUsers] = useState([]);
    const [building, setBuilding] = useState([currentUser.buildings]);
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    useEffect(() => {
      api.get("/users").then(u => {
        // console.table(currentUser.buildings[0])
        // console.table(u.data.filter(a=>!!a.buildings[0]).filter(a=>a.buildings[0]._id === currentUser.buildings[0]))
        // console.log("HERE",users.data.filter(u=>u.buildings[0] === currentUser.buildings[0]) )
        setUsers(u.data.filter(a=>!!a.buildings[0]).filter(a=>a.buildings[0]._id === currentUser.buildings[0]))
        
      }).catch(err=>console.error(err));
      }, [currentUser]);
    
      // useEffect(() => {
      //   api.get("/buildings").then(b => {
      //     console.log()
      //     setBuilding(b.data)
          
      //   }).catch(err=>console.error(err));
      //   }, []);
    
    // const handleChange = name => event => {
    //   setState({
    //     ...state,
    //     [name]: event.target.value
    //   });
    // };
  
    
    const [formValues, setFormValues] = useState({});
  
  
  
    const handleSubmit = e => {
      e.preventDefault();
      formValues.sendDate = Date.now()
      formValues.from = currentUser._id

      
      api.post('/messages', formValues);
      console.log("submit");
      console.log(formValues);
      // setTimeout(()=>window.location.href = "/user/messages", 1000)
      
    }
  
    const handleInputs = e => {
      const value = e.target.value;
      const name = e.target.name;
      setFormValues({ ...formValues, [name]: value});
console.table(formValues)
    }
   
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
                <InputLabel required="true" ref={inputLabel} htmlFor="outlined-to-native-simple">
                  To
                </InputLabel>
                <Select
                  native
                  value={formValues.to}
                  // onChange={handleChange()}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: "to",
                    id: "outlined-to-native-simple"
                  }}
                  defaultValue="General"
                  name="to"
                >
                  <option value="" />
                {users.map((u,i)=> <option value={u._id}>{u.name}</option>)    }

                </Select>
              </FormControl>
            }
          //   title="CREATE INFO"
          //   subheader="September 14, 2016"
          />

          <CardContent>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows="4"
              // defaultValue="Default Value"
              variant="outlined"
              fullWidth='true'
              name="textContent"
            />
          </CardContent>

        <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon />}
      >
        Send
      </Button>
        </Card>
     
    </form>
    </div>
    );
  }
  