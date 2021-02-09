import React, { useState } from "react";
import Toggle from "./Toggle";
import { Typography } from "@material-ui/core";
// import { useStyles } from "./style/Controlitem.style";
function Manual({tname}) {
  // const classes = useStyles();
  const [auto, setAuto] = useState(false); //設置開關狀態
  return (
    //form component 放置在pages/ControlForm
    <form justify="center">
      <Typography variant="h5">{tname}</Typography>
      <Toggle Change={(e) => setAuto(e.target.checked)} auto={auto} />
    </form>
  );

}
export default Manual;
