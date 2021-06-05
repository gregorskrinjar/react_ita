import React, { useState, useEffect } from "react";
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
import Commentar from "../comments/Comment";
import { projectFirestore } from "../../firebase/config";
import { Button } from "@material-ui/core";
import Loader from "./Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    "&:last-child": {
      paddingBottom: 10,
    },
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
  //const { docs } = useFirestore("images");
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(-1);
  const [commentImg, setCommentImg] = useState(null);

  const [lastDocs, setLastDocs] = useState();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    projectFirestore
      .collection("images")
      .orderBy("createdAt", "desc")
      .limit(3)
      .get()
      .then((collections) => {
        const isCollectionEmpty = collections.size === 0;
        if (!isCollectionEmpty) {
          const imgs = collections.docs.map((img) => img.data());
          const lastDoc = collections.docs[collections.docs.length - 1];
          setImages(imgs);
          console.log(images, "je not");
          setLastDocs(lastDoc);
          setLoading(false);
        }
      });
  }, []);

  const fetchImages = () => {
    setLoading(true);
    projectFirestore
      .collection("images")
      .orderBy("createdAt", "desc")
      .startAfter(lastDocs)
      .limit(3)
      .get()
      .then((collections) => {
        const isCollectionEmpty = collections.size === 0;
        if (!isCollectionEmpty) {
          const imgs = collections.docs.map((img) => img.data());
          const lastDoc = collections.docs[collections.docs.length - 1];
          setImages((images) => [...images, ...imgs]);
          setLastDocs(lastDoc);
          setLoading(false);
        }
      });
  };
  console.log(images.id);
  const handleExpandClick = (i) => {
    setExpanded(expanded === i ? -1 : i);
  };

  return (
    <div>
      {images &&
        images.map((doc, i) => (
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
      {!loading && <div className="load-more"><Button onClick={fetchImages}>Poglej več slik</Button> <Loader /></div>}
    </div>
  );
}

export default ImageCard;
