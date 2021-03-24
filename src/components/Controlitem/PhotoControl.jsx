// @ts-nocheck
import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import Toggle from "./Toggle";
import SliderSingle from "./SliderSingle";
import DatepickerItem from "./DatepickerItem";
import moment from "moment";
import { useStyles } from "./style/Controlitem.style";
//拍照模組表單
function PhotoControl() {
  const classes = useStyles();
  const [auto, setAuto] = useState(false); //設置開關狀態
  const [minTime, setMinTime] = useState(moment(new Date()).format("HH:mm"));
  const [warn, setWarn] = useState(true);
  const [SingelVal, setSingelVal] = useState(5);
  function handleSubmit(e) {
    e.preventDefault();
    setWarn(true);
  }
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
    <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
      <Typography variant="h5">拍照間隔調整</Typography>
      <Toggle
        value={auto}
        Change={(e) => {
          setAuto(e.target.checked), setWarn(false);
        }}
        auto={auto}
        label="夜間模式"
      />
      <SliderSingle
        handleChange={(event, val) => {
          setSingelVal(val), setWarn(false);
        }}
        SingelVal={SingelVal}
        min={5}
        max={30}
        step={5}
        label="分鐘"
      />

      <DatepickerItem
        getminTime={(e) => {
          setMinTime(e.target.value), setWarn(false);
        }}
        minTime={minTime}
        display="none"
        label="夜間時間"
      />

      <div className={classes.center}>
        <Button
          className={warn ? classes.warnButton : classes.button}
          type="submit"
          variant="contained"
          size="large"
          color="inherit"
          fullWidth={500}
        >
          送出
        </Button>
      </div>
      <p className={warn ? classes.errors : classes.error}>尚有更改未送出</p>
    </form>
  );
}
export default PhotoControl;
