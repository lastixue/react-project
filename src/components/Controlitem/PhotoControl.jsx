// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Button, Typography, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Toggle from "./Toggle";
import SliderSingle from "./SliderSingle";
import DatepickerItem from "./DatepickerItem";
import { updateSetting, getSetting } from "../../../apitest/api";
import { useMutation, useQuery } from "react-query";
import { useStyles } from "./style/Controlitem.style";
//拍照模組表單
function PhotoControl() {
  const classes = useStyles();
  const { data: cameradata, status, error } = useQuery("setting", getSetting);
  const mutation = useMutation(updateSetting);
  const [auto, setAuto] = useState(false);
  const [minTime, setMinTime] = useState();
  const [maxTime, setMaxTime] = useState();
  const [SingelVal, setSingelVal] = useState(0);
  const [warn, setWarn] = useState(true);
  const [open, setOpen] = useState(true);
  const cameraData =
    status === "success" &&
    cameradata.filter((datas) => datas.module === "camera");
  useEffect(() => {
    {
      status === "success" &&
        (setAuto(cameraData[0].nightmode),
        setMinTime(cameraData[0].start),
        setMaxTime(cameraData[0].end),
        setSingelVal(cameraData[0].interval));
    }
  }, [cameradata]);
  function handleSubmit(e) {
    e.preventDefault();
    setWarn(true);
    mutation.mutate([
      {
        end: maxTime,
        interval: SingelVal,
        module: "camera",
        start: minTime,
        nightmode: auto,
      },
    ]);
    if (mutation.isSuccess) {
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
            variant="filled"
            style={{ background: "#81b29a" }}
            severity="success"
          >
            更改已成功送出
          </Alert>
        </Snackbar>
      ) : null}
      <Typography variant="h5" className={classes.h5}>
        拍照間隔調整
      </Typography>
      <Toggle
        value={auto}
        Change={(e) => {
          setAuto(e.target.checked), setWarn(false);
        }}
        auto={auto}
        checked={auto}
        label="夜間模式"
      />
      <SliderSingle
        handleChange={(event, val) => {
          setSingelVal(val), setWarn(false);
        }}
        SingelVal={SingelVal}
        min={5}
        max={30}
        step={5}
        label="分鐘"
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
          fullWidth={500}
        >
          送出
        </Button>
      </div>
      <p className={warn ? classes.errors : classes.error}>尚有更改未送出</p>
    </form>
  );
}
export default PhotoControl;
