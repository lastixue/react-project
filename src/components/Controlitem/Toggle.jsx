import React from "react";
import {
  Switch,
  FormControlLabel, //設置label之標籤
  Typography,
} from "@material-ui/core";
import { useStyles } from "./style/Toggle.style";
//開關組件
function Toggle({ Change, auto, value,checked, ...props }) {
  const classes = useStyles();
  return (
    <div>
      <FormControlLabel
        label
        labelPlacement="start"
        value={value}
        control={
          <Switch
            classes={{
              switchBase: classes.switchBase,
              track: classes.track,
              checked: classes.checked,
              thumb: classes.thumb,
            }}
            onChange={Change}
            checked={checked}
          />
        }
        {...props}
      />
      <Typography display="inline" className={classes.Typography}>
        {auto ? "開啟" : "關閉"}
      </Typography>
    </div>
  );
}
export default Toggle;
