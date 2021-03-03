import React from "react";
import { TextField } from "@material-ui/core";
import { useStyles } from "./style/DatepickerItem.style";
//日期選擇組件
function DatepickerItem({
  getminTime,
  getmaxTime,
  name,
  minTime,
  maxTime,
  display,
  label,
}) {
  const classes = useStyles();
  return (
    <div>
      <TextField
        className={classes.textField}
        name={name}
        label={label}
        type="time"
        defaultValue={minTime}
        onChange={getminTime} //(e) => setMinDate(e.target.value)
        
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        className={classes.textField}
        name={name}
        style={{ display: display }}
        defaultValue={maxTime}
        onChange={getmaxTime} //(e) => setMaxDate(e.target.value)
        label="結束時間"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
export default DatepickerItem;
