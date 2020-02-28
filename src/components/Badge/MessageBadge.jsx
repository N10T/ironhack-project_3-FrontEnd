import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ForumIcon from '@material-ui/icons/Forum';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function SimpleBadge() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge badgeContent={5} color="primary">
        <ForumIcon />
      </Badge>
    </div>
  );
}
