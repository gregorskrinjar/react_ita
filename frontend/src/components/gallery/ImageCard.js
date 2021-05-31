import React, { useState } from "react";
import useFirestore from "../../hooks/useFirestore";
import { motion } from "framer-motion";
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
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Commentar from "../comments/Comment";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    "&:last-child": {
      paddingBottom: 10
    }
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  
}));

function ImageCard({ selectedImg, setSelectedImg }) {
  const { docs } = useFirestore("images");
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(-1);
  const [commentImg, setCommentImg] = useState(null);

  const handleExpandClick = (i) => {
    setExpanded(expanded === i ? -1 : i);
  };

  return (
    <div>
      {docs &&
        docs.map((doc, i) => (
          <Grid item className={classes.root}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image={doc.url}
                key={doc.id}
                title="Paella dish"
                onClick={() => setSelectedImg({ url: doc.url, id: doc.id })}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Zdravo
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                onClick={() => setCommentImg({ url: doc.url, id: doc.id })}
              >
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={() => handleExpandClick(i)}
                  aria-expanded={expanded === i}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded === i} timeout="auto" unmountOnExit>
                <CardContent>
                  <Commentar commentImg={commentImg} />
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
    </div>
  );
}

export default ImageCard;
