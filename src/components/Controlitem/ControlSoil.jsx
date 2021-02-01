import React, { useState } from "react";
import { Button,Typography } from "@material-ui/core";
import Toggle from "./Toggle";
import SliderSingle from "./SliderSingle";
import DatepickerItem from "./DatepickerItem";
import { useStyles } from "./style/Controlitem.style";
function ControlSoil() {
  const classes = useStyles();
  const [auto, setAuto] = useState(false); //設置開關狀態
  const [minDate, setMinDate] = useState({ minDate: new Date() });
  const [maxDate, setMaxDate] = useState({ maxDate: new Date() });
  const [SingelVal, setSingelVal] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    if (minDate > maxDate) {
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
      <Typography variant="h5">土壤濕度數據調整</Typography>
      <Toggle Change={(e) => setAuto(e.target.checked)} auto={auto} />
      <SliderSingle
        handleChange={(event, val) => setSingelVal(val)}
        SingelVal={SingelVal}
      />
      <DatepickerItem
        minDate={(e) => setMinDate(e.target.value)}
        maxDate={(e) => setMaxDate(e.target.value)}
      />
      {minDate && console.log(minDate)}
      {maxDate && console.log(maxDate)}
      <div className={classes.center}>
        <Button
          classes={{ root: classes.button }}
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
export default ControlSoil;
