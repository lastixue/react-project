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
import { getPhoto } from "../../../apitest/api";
import { useQuery } from "react-query";
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
  const { data: Photodata, status, error } = useQuery("photo", getPhoto);
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
      {status === "success" && (
          Photodata.photos.map((photo) => (
            <GridListTile key={photo.id}>
              <LazyLoadImage
                style={{
                  objectFit: "contain",
                  cursor: "pointer",
                }}
                key={photo.id}
                onClick={() => handleClickOpen(photo)}
                src={photo.filename}
                alt={photo.timestamp}
                effect="opacity"
              />

              <GridListTileBar
                style={{ background: "#fefefe" }}
                classes={{
                  titleWrap: classes.titleWrap,
                }}
                title={photo.timestamp}
                //subtitle={<span>by: {photos.author}</span>}
              />
            </GridListTile>
          )))}
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
              src={selectedPhoto.filename}
              alt={selectedPhoto.timestamp}
            />
            <p style={{ textAlign: "right" }}>
              <span style={{ margin: "0 10px" }}>
                {selectedPhoto.timestamp}
              </span>
            </p>
          </>
        )}
      </Dialog>
    </div>
  );
}
export default withWidth()(ImageLayout);
