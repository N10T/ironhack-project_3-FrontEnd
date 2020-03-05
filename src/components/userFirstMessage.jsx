//React
import React from "react";

//Style
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//Components
import * as dayjs from "dayjs";


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

export default function Messages({data,users}) {
const classes = useStyles();
const select = (key) => users.filter(u=> u._id === data[key])[0];
console.log("from",select("from"))
console.log("to",select("to"))
    return (
        <>
        <Card className={classes.root}>
      <CardContent>
          <div className="flex space-between">
        <Typography variant="h6" component="h2">
          
        </Typography>
        <Typography className={classes.title} color="secondary" gutterBottom>
        {dayjs(data.sendDate).format("MM/DD HH:MM")}
        </Typography>

          </div>

        <Typography variant="body2" component="p">
        {data.textContent}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
        </>
    )
}
