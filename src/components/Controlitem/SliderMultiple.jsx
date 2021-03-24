import React from "react";
import { Slider } from "@material-ui/core";
import { useStyles } from "./style/SliderItem.style";
//範圍拉條組件
function SliderMultiple({ handleChange, sliderVal,...props }) {
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
          onChange={handleChange} //(event, val) => setSliderVal(val)
          value={sliderVal}
          defaultValue={[0, 10]}
          min={0}
          max={100}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          // aria-labelledby="discrete-slider"
          step={10}
          {...props}
          // marks
        />
      </div>
      <div
       className={classes.datalabel}
      >
        <div>{`最小值:${sliderVal[0]}%`}</div>
        <div>{`最大值:${sliderVal[1]}%`}</div>
      </div>
    </>
  );
}
export default SliderMultiple;
