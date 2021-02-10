import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import Toggle from "./Toggle";
import SliderMultiple from "./SliderMultiple";
import DatepickerItem from "./DatepickerItem";
import moment from "moment";
import { useStyles } from "./style/Controlitem.style";
function Controlitem() {
  const classes = useStyles();
  const [auto, setAuto] = useState(false); //設置開關狀態
  const [minTime, setMinTime] = useState(moment(new Date()).format("HH:mm"));
  const [maxTime, setMaxTime] = useState(moment(+new Date()+ 1 * 3600 * 1000).format("HH:mm"));
  const [sliderVal, setSliderVal] = useState([0, 100]);
  const [test, setTest] = useState(true);
  
  if (sliderVal[0] > sliderVal[1]) {
    return;
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTest(true);
    if (minTime > maxTime) {
      alert("結束時間大於起始時間");
      return;
    }
    {auto&&console.log(auto);}
    {minTime&&console.log(minTime);}
    {maxTime&&console.log(maxTime);} 
    {sliderVal && console.log(sliderVal)}

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
    <form style={{textAlign:'center'}}onSubmit={handleSubmit}>
      <Typography variant="h5">光照程度數據調整</Typography>
      <Toggle
        Change={(e) => {
          setAuto(e.target.checked);
          setTest(false);
        }}
        auto={auto}
        label="自動操作"
      />
      <SliderMultiple
        handleChange={(event, val) => {
          setSliderVal(val), setTest(false);
        }}
        sliderVal={sliderVal}
      />
      <DatepickerItem
        getminTime={(e) => {
          setMinTime(e.target.value), setTest(false);
        }}
        getmaxTime={(e) => {
          setMaxTime(e.target.value), setTest(false);
        }}
        minTime={minTime}
        maxTime={maxTime}
        label="起始時間"
        unit="%%"
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
}
export default Controlitem;
