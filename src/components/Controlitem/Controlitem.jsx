// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Button, Typography, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import SliderMultiple from "./SliderMultiple";
import DatepickerItem from "./DatepickerItem";
import { useStyles } from "./style/Controlitem.style";
import { getSetting, updateSetting } from "../../../apitest/api";
import { useQuery, useMutation } from "react-query";
//光照控制表單

function Controlitem() {
  // console.error = () => {};
  const classes = useStyles();
  const mutation = useMutation(updateSetting);
  /*
  , {
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
  }
  */
  const { data: lightdata, status, error } = useQuery("setting", getSetting);
  const [minTime, setMinTime] = useState();
  const [maxTime, setMaxTime] = useState();
  const [sliderVal, setSliderVal] = useState([]);
  const [warn, setWarn] = useState(true);
  const [open, setOpen] = useState(true);
  const lightData =
    status === "success" &&
    lightdata.filter((datas) => datas.module === "light");
  useEffect(() => {
    {
      status === "success" &&
        (setMinTime(lightData[0].start),
        setMaxTime(lightData[0].end),
        setSliderVal([lightData[0].min, lightData[0].max]));
    }
  }, [lightdata]);
  if (sliderVal[0] === sliderVal[1]) {
    sliderVal[1] += 10;
    if (sliderVal[1] > 100) {
      sliderVal[1] -= 10;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    setWarn(true);
    if (sliderVal[0] === sliderVal[1]) {
        mutation.mutate([
          {
            null: null,
          },
        ]);
      // console.clear();
    } else {
      mutation.mutate([
        {
          end: maxTime,
          max: sliderVal[1],
          min: sliderVal[0],
          module: "light",
          start: minTime,
        },
      ]);
    }

    if (mutation.isSuccess || mutation.isError) {
      setOpen(true);
    }
  }
  const handleClose = (event) => {
    setOpen(false);
  };
  return (
    <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
      {mutation.isSuccess ? (
        <Snackbar
          open={open}
          autoHideDuration={2000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={handleClose}
        >
          <Alert
            severity="success"
            style={{ background: "#81b29a" }}
            variant="filled"
          >
            更改已成功送出
          </Alert>
        </Snackbar>
      ) : null}
      {mutation.isError ? (
        <Snackbar
          open={open}
          autoHideDuration={2000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={handleClose}
        >
          <Alert
            severity="error"
            style={{ background: "#d12e2e" }}
            variant="filled"
          >
            輸入數值相同請從新輸入
          </Alert>
        </Snackbar>
      ) : null}
      <Typography variant="h5" className={classes.h5}>
        光照程度數據調整
      </Typography>
      <SliderMultiple
        handleChange={(event, val) => {
          setSliderVal(val), setWarn(false);
        }}
        sliderVal={sliderVal}
      />
      <DatepickerItem
        getminTime={(e) => {
          setMinTime(e.target.value), setWarn(false);
        }}
        getmaxTime={(e) => {
          setMaxTime(e.target.value), setWarn(false);
        }}
        minTime={minTime}
        maxTime={maxTime}
        label="起始時間"
      />
      <div className={classes.center}>
        <Button
          className={warn ? classes.warnButton : classes.button}
          type="submit"
          variant="contained"
          size="large"
          color="inherit"
          fullWidth
        >
          送出
        </Button>
      </div>
      <p className={warn ? classes.errors : classes.error}>尚有更改未送出</p>
    </form>
  );
}
export default Controlitem;
