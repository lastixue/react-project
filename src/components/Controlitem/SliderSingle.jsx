import React from "react";
import { Slider } from "@material-ui/core";
import { useStyles } from "./style/SliderItem.style";
//拉條組件
function SliderSingle({
  handleChange,
  SingelVal,
  label,
  ...props
}) {
  const classes = useStyles();

  return (
    <>
      <div>
        <Slider
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
          {...props}
          // aria-labelledby="discrete-slider"
          // marks
        />
      </div>
      <div
       className={classes.datalabel}
      >
        <span>{`${SingelVal}${label}`}</span>
      </div>
    </>
  );
}
export default SliderSingle;
