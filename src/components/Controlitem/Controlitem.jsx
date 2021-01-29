import React, { useState } from "react";
import {
  Switch,
  FormControlLabel, //設置label之標籤
  Typography,
  Slider,
  TextField,
  Button,
} from "@material-ui/core";
import { useStyles } from "./Controlitem.style";
function Controlitem({ tname }) {
  const classes = useStyles();
  const [auto, setAuto] = useState(false); //設置開關狀態
  const [val, setVal] = useState([0, 100]);
  if (val[0] > val[1]) {
    return;
  }
  console.log("render");
  const date = new Date(+new Date() + 8 * 3600 * 1000); //加入相差的8小時
  const currentMonth = date.toISOString().substr(0, 16); //toISOString()會有時差問題
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
    <form>
      <div>
        <FormControlLabel
          labelPlacement="Start"
          label="自動操作"
          control={
            <Switch
              classes={{
                switchBase: classes.switchBase,
                track: classes.track,
                checked: classes.checked,
              }}
              onChange={(e) => setAuto(e.target.checked)}
            />
          } //獲取開關狀態
        />
        <Typography display="inline" className={classes.Typography}>
          {auto ? "開啟" : "關閉"}
        </Typography>
      </div>
      <div className={classes.slider}>
        <Typography gutterBottom>{tname}</Typography>
        <Slider
          classes={{
            track: classes.slidertrack,
            thumb: classes.sliderthumb,
            valueLabel: classes.slidertrack,
            rail: classes.rail,
          }}
          onChange={(event, val) => setVal(val)}
          value={val}
          defaultValue={[0, 10]}
          min={0}
          max={100}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          // aria-labelledby="discrete-slider"
          step={10}
          // marks
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "1rem 0",
          fontWeight: 500,
          lineHeight: 0,
        }}
      >
        <div>{`最小值:${val[0]}%`}</div>
        <div>{`最大值:${val[1]}%`}</div>
      </div>
      <div>
        <TextField
          label="起始時間"
          type="datetime-local"
          defaultValue={currentMonth}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          className={classes.textField}
          defaultValue={currentMonth}
          label="結束時間"
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
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
export default Controlitem;
