import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
// import SearchIcon from '@material-ui/icons/Search';
import theme from './palette/palette';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <AddBoxIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Co-coon
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <QuestionAnswerIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
