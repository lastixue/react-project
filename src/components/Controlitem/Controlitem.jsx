// @ts-nocheck
import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import Toggle from "./Toggle";
import SliderMultiple from "./SliderMultiple";
import DatepickerItem from "./DatepickerItem";
import moment from "moment";
import { useStyles } from "./style/Controlitem.style";
//光照控制表單
function Controlitem() {
  const classes = useStyles();
  const [auto, setAuto] = useState(false); //設置開關狀態
  const [minTime, setMinTime] = useState(moment(new Date()).format("HH:mm"));
  const [maxTime, setMaxTime] = useState(
    moment(+new Date() + 1 * 3600 * 1000).format("HH:mm")
  );
  const [sliderVal, setSliderVal] = useState([0, 100]);
  const [warn, setWarn] = useState(true);

  if (sliderVal[0] === sliderVal[1]) {
      sliderVal[1] += 10;
    if(sliderVal[1]>100){
      sliderVal[1]-=10;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setWarn(true);
    if (sliderVal[0] === sliderVal[1]) {
      alert("數值相同請重新輸入");
      return;
    }
    {console.log(auto);}
    {minTime && console.log(minTime);}
    {maxTime && console.log(maxTime);}
    {sliderVal && console.log(sliderVal);}
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
      <Typography variant="h5">光照程度數據調整</Typography>
      <Toggle
        value={auto}
        Change={(e)=>{setAuto(e.target.checked),setWarn(false)}}
        auto={auto}
        label="自動操作"
      />
      <SliderMultiple
        handleChange={(event, val) => {
          setSliderVal(val), setWarn(false);
        }}
        sliderVal={sliderVal}
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
export default Controlitem;
