// @ts-nocheck
import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import Toggle from "./Toggle";
import SliderSingle from "./SliderSingle";
import DatepickerItem from "./DatepickerItem";
import moment from "moment";
import { useStyles } from "./style/Controlitem.style";
//控制土壤濕度表單
function ControlSoil() {
  const classes = useStyles();
  const [auto, setAuto] = useState(false); //設置開關狀態
  const [minTime, setMinTime] = useState(moment(new Date()).format("HH:mm"));
  const [maxTime, setMaxTime] = useState(
    moment(+new Date() + 1 * 3600 * 1000).format("HH:mm")
  );
  const [warn, setWarn] = useState(true);
  const [SingelVal, setSingelVal] = useState(0);

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
    <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
      <Typography variant="h5">土壤濕度數據調整</Typography>
      <Toggle
        value={auto}
        Change={(e) => {
          setAuto(e.target.checked), setWarn(false);
        }}
        auto={auto}
        label="起始時間"
      />
      <SliderSingle
        handleChange={(event, val) => {
          setSingelVal(val), setWarn(false);
        }}
        SingelVal={SingelVal}
        min={0}
        max={100}
        step={10}
        label="%"
      />

      <DatepickerItem
        getminTime={(e) => {
          setMinTime(e.target.value), setWarn(false);
        }}
        getmaxTime={(e) => {
          setMaxTime(e.target.value), setWarn(false);
        }}
        minTime={minTime}
        maxTime={maxTime}
        label="起始時間"
      />
      <div className={classes.center}>
        <Button
          className={warn ? classes.warnButton : classes.button}
          type="submit"
          variant="contained"
          size="large"
          color="inherit"
          fullWidth
        >
          送出
        </Button>
      </div>
      <p className={warn ? classes.errors : classes.error}>尚有更改未送出</p>
    </form>
  );
}
export default ControlSoil;
