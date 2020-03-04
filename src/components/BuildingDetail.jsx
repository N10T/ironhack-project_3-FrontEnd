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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

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
  }
}));
const api = new APIHandler();

export default function ControlledExpansionPanels({ data }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const DeleteKey = (e, indexList) => {
    const newKeys = data.keys.filter((k, i) => i !== indexList);
    console.log(newKeys);
    api.patch(`/buildings/key/${data._id}/delete`,  {newKeys} );
  };

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
function deleteBuilding(){
  handleClose()
  api.delete(`/buildings/${data._id}`)
  window.location.href = `/admin/building/`

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
          <div className="flex vcenter space-between">
            <Typography className={classes.heading}>{data.name}</Typography>
            <Typography className={classes.secondaryHeading}>
              {`${data.adress.number} ${data.adress.street}\n${
                data.adress.postalcode
              } ${data.adress.city} ${data.adress.country.toUpperCase()}`}
            </Typography>
            <DeleteIcon onClick={handleClickOpen} color="secondary" /> 
            <EditIcon  onClick={(e) => window.location.href = `/admin/building/${data._id}`}  color="primary" />
          
           </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid item xs={12}>
            <div className={classes.demo}>
              <List>{data.keys.length ? data.keys.map((k, i) => (
                  <ListItem key={i}>
                    <ListItemText className="small-font" key={i} primary={k} />{" "}
                    <ListItemSecondaryAction>
                      <DeleteIcon
                        key={i}
                        value={i}
                        name={i}
                        onClick={e => DeleteKey(e, i)}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                )) : <p className="flex center">No keys anymore
                      <Button variant="contained" color="primary" href="/admin/key">
                      Go create
      </Button>
                </p>}
                
              </List>
            </div>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Delete {data.name} ?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={deleteBuilding} color="primary">
          Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
