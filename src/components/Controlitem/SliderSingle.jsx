import React, { useState } from "react";
import { Slider } from "@material-ui/core";
import { useStyles } from "./style/SliderItem.style";
// import CssBaseline from '@material-ui/core/CssBaseline';

function SliderSingle({handleChange,SingelVal,name,min,max,step,label}) {
  const classes = useStyles();

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
          onChange={handleChange}
          value={SingelVal}
          defaultValue={0}
          valueLabelDisplay="auto"
          aria-labelledby="discrete-slider"
          // aria-labelledby="discrete-slider"
          min={min}
          max={max}
          step={step}
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
        <span>{`${SingelVal}${label}`}</span>
      </div>
    </>
  );
  /* 需新增
    起始日期時間
    結束日期時間 */
}
export default SliderSingle;
