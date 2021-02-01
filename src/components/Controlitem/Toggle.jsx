import React from "react";
import {
  Switch,
  FormControlLabel, //設置label之標籤
  Typography,
} from "@material-ui/core";
import { useStyles } from "./style/Toggle.style";
function Toggle({ Change ,auto ,name}) {
  const classes = useStyles();
  // const [auto, setAuto] = useState(false); //設置開關狀態
  return (
    //form component 放置在pages/ControlForm{/* Switch component */}
    <div>
      <FormControlLabel
        labelPlacement="Start"
        label="自動操作"
        control={
          <Switch
            name={name}
            classes={{
              switchBase: classes.switchBase,
              track: classes.track,
              checked: classes.checked,
            }}
            
            onChange={Change}
          />
          
        } //獲取開關狀態
      />
            <Typography display="inline" className={classes.Typography}>
        {auto ? "開啟" : "關閉"}
      </Typography>
    </div>
  );
  /* 需新增
    起始日期時間
    結束日期時間 */
}
export default Toggle;
