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
  mindefault,
  maxdefault
}) {
  const classes = useStyles();
  return (
    <div>
      <TextField
        className={classes.textField}
        label={label}
        type="time"
        value={minTime}
        defaultValue={mindefault}
        onChange={getminTime} //(e) => setMinDate(e.target.value)
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        className={classes.textField}
        style={{ display: display }}
        value={maxTime}
        defaultValue={maxdefault}
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
