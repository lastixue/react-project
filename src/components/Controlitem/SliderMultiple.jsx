import React, { useState } from "react";
import { Slider } from "@material-ui/core";
import { useStyles } from "./style/SliderItem.style";
// import CssBaseline from '@material-ui/core/CssBaseline';

function SliderMultiple({handleChange,sliderVal,name}) {
  const classes = useStyles();
  // const [sliderVal, setSliderVal] = useState([0, 100]);
  // if (sliderVal[0] > sliderVal[1]) {
  //   return;
  // }
  return (
    //form component 放置在pages/ControlForm {/* Slider component */}
    <>
      <div className={classes.slider}>
        <Slider
          name={name}
          classes={{
            track: classes.slidertrack,
            thumb: classes.sliderthumb,
            valueLabel: classes.slidertrack,
            rail: classes.rail,
          }}
          onChange={handleChange}//(event, val) => setSliderVal(val)
          value={sliderVal}
          defaultValue={[0, 10]}
          min={0}
          max={100}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          // aria-labelledby="discrete-slider"
          step={10}
          // marks
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "1rem 0",
          fontWeight: 500,
          lineHeight: 0,
        }}
      >
        <div>{`最小值:${sliderVal[0]}%`}</div>
        <div>{`最大值:${sliderVal[1]}%`}</div>
      </div>
    </>
  );
  /* 需新增
    起始日期時間
    結束日期時間 */
}
export default SliderMultiple;
