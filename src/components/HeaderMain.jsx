import React from 'react';
import { makeStyles, ThemeProvider  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import theme from './palette/palette'
import LogOut from './LogOut'

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
      <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            Co-coon
          </Typography>
{/* <LogOut /> */}
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </div>
  );
}
