import React, { useState } from "react";
import { Button,Typography } from "@material-ui/core";
import Toggle from "./Toggle";
import SliderMultiple from "./SliderMultiple";
import DatepickerItem from "./DatepickerItem";
import { useStyles } from "./style/Controlitem.style";
function Controlitem() {
  const classes = useStyles();
  const [auto, setAuto] = useState(false); //設置開關狀態
  const [minDates, setMinDates] = useState({ minDate: new Date() });
  const [maxDates, setMaxDates] = useState({ maxDate: new Date() });
  const [sliderVal, setSliderVal] = useState([0, 100]);
  if (sliderVal[0] > sliderVal[1]) {
    return;
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (minDates > maxDates) {
      alert("結束時間大於起始時間");
      return;
    }
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
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">光照程度數據調整</Typography>
      <Toggle Change={(e) => setAuto(e.target.checked)} auto={auto} />
      <SliderMultiple handleChange={(event, val) => setSliderVal(val)} sliderVal={sliderVal}/>
      <DatepickerItem
        minDate={(e) => setMinDates(e.target.value)}
        maxDate={(e) => setMaxDates(e.target.value)}
      />
      <div className={classes.center}>
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          size="large"
          color="inherit"
          fullWidth={500}
        >
          送出
        </Button>
      </div>
    </form>
  );
  /* 需新增
    起始日期時間
    結束日期時間 */
}
export default Controlitem;
