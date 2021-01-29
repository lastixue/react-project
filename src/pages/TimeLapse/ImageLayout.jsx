import React, { useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import imagesList from "./Data.json";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./ImageLayout.style";
function ImageLayout() {
  const classes = useStyles();
  const [selectedTile, setSelectedTile] = useState(null);
  //const [value, setValue] = useState([]);
  const handleClickOpen = (tile) => {
    setSelectedTile(tile);
  };
  const handleClose = () => {
    setSelectedTile(null);
  };
  return (
    <div className={classes.root}>
      <GridList cols={4} className={classes.gridList}>
        {Array.isArray(imagesList) &&
          imagesList.map((tile) => (
            <GridListTile key={tile.id}>
              <img
                style={{ objectFit: "contain", cursor: "pointer" }}
                value={tile.id}
                onClick={() => handleClickOpen(tile)}
                src={tile.src}
                alt={tile.title}
              />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
              />
            </GridListTile>
          ))}
      </GridList>
      <Dialog fullScreen open={selectedTile !== null} onClose={handleClose}>
        <div style={{ cursor: "pointer", width: "50px" }} onClick={handleClose}>
          <CloseIcon />
        </div>
        {selectedTile && (
          <>
            <img
              onClick={handleClose}
              style={{ height: "100vh", width: "100vw", cursor: "pointer" }}
              src={selectedTile.src}
              alt={selectedTile.title}
            />
            <p style={{ textAlign: "right" }}>
              {selectedTile.title}
              <span style={{ margin: "0 10px" }}>
                作者:{selectedTile.author}
              </span>
            </p>
          </>
        )}
      </Dialog>
    </div>
  );
}
export default ImageLayout;
