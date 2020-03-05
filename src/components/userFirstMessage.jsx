//React
import React from "react";

//Style
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//Components

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function Messages() {
const classes = useStyles();

    return (
        <>
        <Card className={classes.root}>
      <CardContent>
          <div className="flex space-between">
        <Typography variant="h6" component="h2">
          Contacts Name
        </Typography>
        <Typography className={classes.title} color="secondary" gutterBottom>
          Date
        </Typography>

          </div>

        <Typography variant="body2" component="p">
         Last message
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
        </>
    )
}
