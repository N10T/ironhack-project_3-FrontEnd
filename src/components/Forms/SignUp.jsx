
// React
import React, { useContext, useState } from "react";

// Style
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// Component
import AvatarUser from "../Upload/AvatarUser";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 350
    },
    button: {
      margin: theme.spacing(1)
    }
  }
}));

export default function FormPropsTextFields() {
  //   const userContext = useContext(UserContext);
  //   const { currentUser } = userContext;
  //   const classes = useStyles();
  //   const [newAvatar, setAvatar] = useState(
  //     currentUser ? currentUser.avatar : ""
  //   );

  //   const [newAvatarTmp, setAvatarTmp] = useState("");

  //   const handleAvatar = file => {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       // when the fileReader ends reading image  ...
  //       const baseString = reader.result;
  //       setAvatar(file);
  //       setAvatarTmp(baseString); // set the tmp avatar as an image source before upload
  //     };
  //     reader.readAsDataURL(file); // read the file from the local disk
  //   };
  const classes = useStyles();

  return (
    <div className="user-form">
      <form
        className={classes.root + " one-column"}
        noValidate
        autoComplete="off"
      >
          <h1>SIGN UP</h1>
          <AvatarUser
          //   avatar={newAvatarTmp || currentUser.avatar}
          //   clbk={e => handleAvatar(e.target.files[0])}
          />
          <TextField required="true" id="outlined-basic" label="Name" variant="outlined" />
          <TextField required="true" id="outlined-basic" label="Lastname" variant="outlined" />
          <TextField required="true" id="outlined-basic" label="E-mail" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Your building key"
            variant="outlined"
          />
          <TextField required="true" id="outlined-basic" label="Password" variant="outlined" />
          <div className="one-column">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              size="large"
              // endIcon={<Icon>send</Icon>}
            >
              sign up
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              size="small"
              href="/signin"
              //   endIcon={<Icon>send</Icon>}
            >
              sign in
            </Button>
          </div>
      </form>
    </div>
  );
}
