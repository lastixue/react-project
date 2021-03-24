import React from "react";
import { TextField } from "@material-ui/core";
import { useStyles } from "./style/DatepickerItem.style";
//日期選擇組件
function DatepickerItem({
  getminTime,
  getmaxTime,
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
        style={{ display: display }}
        defaultValue={maxTime}
        onChange={getmaxTime} //(e) => setMaxDate(e.target.value)
        label="終止時間"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
export default DatepickerItem;
