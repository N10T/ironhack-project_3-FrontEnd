import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import theme from "../palette/palette";
import AvatarUser from "../Upload/AvatarUser";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import ImageInfo from './../Upload/ImageInfo';

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 350
    },
    button: {
      margin: theme.spacing(1)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }
}));

export default function FormPropsTextFields() {

  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div className="user-form">
      <form
        className={classes.root + " one-column"}
        noValidate
        autoComplete="off"
      >
        <ThemeProvider theme={theme}>
          <h1>CREATE INFO</h1>
 
          <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
          Categorie
        </InputLabel>
        <Select
          native
          
          value={state.age}
          onChange={handleChange('age')}
          labelWidth={labelWidth}
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value="" />   
          <option value={"Social"}>Social</option>
          <option value={"Caring"}>Caring</option>
          <option value={"Nearby"}>Nearby</option>
          <option value={"Admin Notices"}>Admin Notices</option>
          <option value={"General"}>General</option>
        </Select>
      </FormControl>
      <ImageInfo />
          <TextField id="outlined-basic" label="Text" variant="outlined" />
          <div className="one-column">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              size="large"
              // endIcon={<Icon>send</Icon>}
            >
              submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              size="small"
              href="/signup"
              //   endIcon={<Icon>send</Icon>}
            >
              sign up
            </Button>
          </div>
        </ThemeProvider>
      </form>
    </div>
  );
}
