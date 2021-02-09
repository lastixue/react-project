import React from 'react'
import {
  TextField,
} from "@material-ui/core";
import { useStyles } from "./style/DatepickerItem.style";
function DatepickerItem({getminTime,getmaxTime,name,minTime,maxTime}) {
  const classes = useStyles();
  return (
    //form component 放置在pages/ControlForm {/* DatePicker component */}

      <div>
        <TextField
          name={name}
          label="起始時間"
          type="time"
          defaultValue={minTime}
          onChange={getminTime}//(e) => setMinDate(e.target.value)
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      
      
        <TextField
          name={name}
          // className={classes.textField}
          className={classes.textField}
          defaultValue={maxTime}
          onChange={getmaxTime}//(e) => setMaxDate(e.target.value)
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
