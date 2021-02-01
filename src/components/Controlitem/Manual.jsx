import React, { useState } from "react";
import Toggle from "./Toggle";
import { Typography } from "@material-ui/core";
// import { useStyles } from "./style/Controlitem.style";
function Manual({tname}) {
  // const classes = useStyles();
  const [auto, setAuto] = useState(false); //設置開關狀態
  //   const [formInput, setFormInput] = useReducer(
  //     (state, newState) => ({ ...state, ...newState }),
  //     {
  //       min: "",
  //       max: ""
  //     }
  //   );
  //   const handleInput = evt => {
  //   const name = evt.target.name;
  //   const newValue = evt.target.value;
  //   setFormInput({ [name]: newValue });
  // };

  return (
    //form component 放置在pages/ControlForm
    <form justify="center">
      <Typography variant="h5">{tname}</Typography>
      <Toggle Change={(e) => setAuto(e.target.checked)} auto={auto} />
    </form>
  );
  /* 需新增
    起始日期時間
    結束日期時間 */
}
export default Manual;
