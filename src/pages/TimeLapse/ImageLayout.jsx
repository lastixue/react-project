import React, { useState } from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  Dialog,
} from "@material-ui/core";
import { LazyLoadImage } from "react-lazy-load-image-component";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import CloseIcon from "@material-ui/icons/Close";
import imagesList from "./Data.json";
import { useStyles } from "./style/ImageLayout.style";
function ImageLayout(props) {
  const responseCol = () => {
    if (isWidthUp("xl", props.width)) {
      return 5;
    }
    if (isWidthUp("lg", props.width)) {
      return 5;
    }
    if (isWidthUp("md", props.width)) {
      return 2;
    }
    if (isWidthUp("sm", props.width)) {
      return 2;
    }
    return 1;
  };
  //因為跑版所以沒有觸發lazyloading
  const classes = useStyles();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  //const [value, setValue] = useState([]);
  const handleClickOpen = (photos) => {
    setSelectedPhoto(photos);
  };
  const handleClose = () => {
    setSelectedPhoto(null);
  };
  return (
    <div className={classes.root}>
      <GridList cols={responseCol()} className={classes.gridList}>
        {Array.isArray(imagesList) &&
          imagesList.map((photos) => (
            <GridListTile key={photos.id}>
              <LazyLoadImage
                style={{
                  objectFit: "contain",
                  cursor: "pointer",
                }}
                value={photos.id}
                onClick={() => handleClickOpen(photos)}
                src={photos.src}
                alt={photos.date}
                effect="opacity"
              />

              <GridListTileBar
                title={photos.date}
                //subtitle={<span>by: {photos.author}</span>}
              />
            </GridListTile>
          ))}
      </GridList>
      <Dialog fullScreen open={selectedPhoto !== null} onClose={handleClose}>
        <div style={{ cursor: "pointer", width: "50px" }} onClick={handleClose}>
          <CloseIcon />
        </div>
        {selectedPhoto && (
          <>
            <img
              onClick={handleClose}
              style={{ height: "100vh", width: "100vw", cursor: "pointer" }}
              src={selectedPhoto.src}
              alt={selectedPhoto.date}
            />
            <p style={{ textAlign: "right" }}>
              {selectedPhoto.title}
              <span style={{ margin: "0 10px" }}>
                {selectedPhoto.date}
              </span>
            </p>
          </>
        )}
      </Dialog>
    </div>
  );
}
export default withWidth()(ImageLayout);
