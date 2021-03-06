import React from "react";
import APIHandler from "../api/APIHandler";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {useAuth} from './../auth/useAuth'
import DeleteIcon from "@material-ui/icons/Delete";
import * as dayjs from "dayjs";


const api = new APIHandler();

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
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
  }
}));


export default function RecipeReviewCard({data,users}) {
  const { currentUser, isLoading} = useAuth();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  
  const avatarMatch = () => users.filter(u => u._id === data.userOwner)[0]
  const canDelete = () => currentUser.role.includes("admin") || currentUser._id === data.userOwner
  return (
    !isLoading ? 
    <div className="center card">
      {data.publicationDate ? <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar src={data.userOwner ? avatarMatch().avatar : ""} aria-label="recipe" className={classes.avatar}>
              
            </Avatar>
          }
         action={
          canDelete && <IconButton aria-label="delete">
              <DeleteIcon onClick={()=>api.delete(`/informations/${data._id}`)}/>
            </IconButton>
          }
          title={data.userOwner ? avatarMatch().name : "UNKNOW"}
          subheader={dayjs(data.publicationDate).format("MM-DD-YY HH:MM")}
        />
        
        {data.multimediaContent && <CardMedia
            className={classes.media}
            image={data.multimediaContent}
            title=""
          />}
         
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.textContent}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>FEATURE:</Typography>
            <Typography paragraph>
Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>: (
        ""
      )}
    </div>: ""
  );
}
