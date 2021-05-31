import React from "react";
import useFirestore from "../../hooks/useFirestore";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Commentar from "../comments/Comment";
import ImageCard from "./ImageCard";
import Grid from "@material-ui/core/Grid";

const ImageGrid = ({ selectedImg, setSelectedImg }) => {
  //const { docs } = useFirestore("images");

  return (
    // <div className="img-grid">
    //   {docs &&
    //     docs.map((doc) => (
    //       <motion.div
    //         className="img-wrap"
    //         key={doc.id}
    //         layout
    //         whileHover={{ opacity: 1 }}
    //         onClick={() => setSelectedImg({ url: doc.url, id: doc.id })}
    //       >
    //         <motion.img
    //           src={doc.url}
    //           alt="upload pic"
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           transition={{ delay: 1 }}
    //         />
    //       </motion.div>
    //     ))}
    // </div>
    <Grid container direction="column" justify="center" alignItems="stretch" >
      <ImageCard selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    </Grid>
  );
};

export default ImageGrid;
