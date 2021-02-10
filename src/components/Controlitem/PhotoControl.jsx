import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import Toggle from "./Toggle";
import SliderSingle from "./SliderSingle";
import DatepickerItem from "./DatepickerItem";
import moment from "moment";
import { useStyles } from "./style/Controlitem.style";
function PhotoControl() {
  const classes = useStyles();
  const [auto, setAuto] = useState(false); //設置開關狀態
  const [minTime, setMinTime] = useState(moment(new Date()).format("HH:mm"));
  const [test, setTest] = useState(true);
  const [SingelVal, setSingelVal] = useState(5);
  function handleSubmit(e) {
    e.preventDefault();
    setTest(true);
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
        Change={(e) => {
          setAuto(e.target.checked), setTest(false);
        }}
        auto={auto}
        label="夜間模式"
      />
      <SliderSingle
        handleChange={(event, val) => {
          setSingelVal(val), setTest(false);
        }}
        SingelVal={SingelVal}
        min={5}
        max={30}
        step={5}
      />
      <DatepickerItem
        getminTime={(e) => {
          setMinTime(e.target.value), setTest(false);
        }}
        getmaxTime={(e) => {
          setMaxTime(e.target.value), setTest(false);
        }}
        minTime={minTime}
        display="none"
        label="夜間時間"
      />

      <div className={classes.center}>
        <Button
          className={test ? classes.button : classes.buttons}
          type="submit"
          variant="contained"
          size="large"
          color="inherit"
          fullWidth={500}
        >
          送出
        </Button>
      </div>
      <p className={test ? classes.errors : classes.error}>尚有更改未送出</p>
    </form>
  );
  /* 需新增
    起始日期時間
    結束日期時間 */
}
export default PhotoControl;