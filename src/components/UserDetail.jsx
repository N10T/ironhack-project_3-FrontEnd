import APIHandler from "../api/APIHandler";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
// import Fab from "@material-ui/core/Fab";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Avatar from "@material-ui/core/Avatar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  }
}));
const api = new APIHandler();

export default function ControlledExpansionPanels({ data }) {
  const [open, setOpen] = React.useState(false);
  // console.table(data);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  function deleteUser() {
    handleClose();
    api.delete(`/users/${data._id}`);
    window.location.href = `/admin/user/`;
  }
  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="flex vcenter large space-between">
            <div className={classes.heading}>
              <Avatar
                src={data.avatar ? data.avatar : ""}
                aria-label="recipe"
                className={classes.avatar}
              >
                {data.name.substring(0, 1).toUpperCase()}
              </Avatar>

              <Typography className="">
                {data.role}
              </Typography>
            </div>
            <div className="right flex vcenter space-around">
            <Typography id='txt-head-card' className={classes.secondaryHeading}>
              {data.name}{' '}
              {data.lastname.toUpperCase()}
            </Typography>
            <DeleteIcon onClick={handleClickOpen} color="secondary" />
            <EditIcon
              onClick={e => (window.location.href = `/admin/edit_user/${data._id}`)}
              color="primary"
            />
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid item xs={12}>
            <div className={classes.demo}>
              <List
              >

                    
                      <ListItemText
                      disablePadding={true}
                        className="medium-font"
                        primary={`email: ${data.email}`}
                      />{" "}
                      {data.buildings ? data.buildings.map((a,i)=> a=== "" ? "No building" :<ListItemText disablePadding={true}
                      key={i}
                        className="medium-font"
                        primary={`building: ${a.name}`}
                      />):""}
                      
                      {/* <ListItemSecondaryAction>
                        <DeleteIcon
                          key={i}
                          value={i}
                          name={i}
                          // onClick={e => DeleteKey(e, i)}
                        />
                      </ListItemSecondaryAction> */}
                    

              </List>
            </div>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Dialog
      fullWidth	= {true}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" className="center flex">
          Delete {data.name} ?
          <Avatar
                src={data.avatar ? data.avatar : ""}
                aria-label="recipe"
                className={classes.avatar}
              >
                {data.name.substring(0, 1).toUpperCase()}
              </Avatar>
        </DialogTitle>
        <DialogActions className="flex">
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={deleteUser} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
