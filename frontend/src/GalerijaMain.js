import { Grid } from "@material-ui/core";
import { useState } from "react";
import ImageGrid from "./components/gallery/ImageGrid";
import Modal from "./components/gallery/Modal";
import Title from "./components/gallery/Title";
import UploadForm from "./components/gallery/UploadForm";

function GalerijaMain() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Grid className="App" container direction="column">
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Title />
          <UploadForm />
          <ImageGrid
            selectedImg={selectedImg}
            setSelectedImg={setSelectedImg}
          />
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </Grid>
      </Grid>
    </Grid>
    // <div className="App">
    //   <Title/>
    //   <UploadForm />
    //   <ImageGrid selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    //   { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    // </div>
  );
}

export default GalerijaMain;
