import React, { useState } from 'react'
import {
  TextField,
} from "@material-ui/core";
import { useStyles } from "./style/DatepickerItem.style";
function DatepickerItem({minDate,maxDate,name}) {
  const classes = useStyles();

  const date = new Date(+new Date() + 8 * 3600 * 1000); //加入相差的8小時
  const currentMonth = date.toISOString().substr(0, 16); //toISOString()會有時差問題
  
  return (
    //form component 放置在pages/ControlForm {/* DatePicker component */}

      <div>
        <TextField
          name={name}
          label="起始時間"
          type="datetime-local"
          defaultValue={currentMonth}
          onChange={minDate}//(e) => setMinDate(e.target.value)
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      
      
        <TextField
          name={name}
          className={classes.textField}
          defaultValue={currentMonth}
          onChange={maxDate}//(e) => setMaxDate(e.target.value)
          label="結束時間"
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
  );
  /* 需新增
    起始日期時間
    結束日期時間 */
}
export default DatepickerItem;
