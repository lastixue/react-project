// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Button, Typography, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import SliderSingle from "./SliderSingle";
import DatepickerItem from "./DatepickerItem";
import { useStyles } from "./style/Controlitem.style";
import { updateSetting, getSetting } from "../../../apitest/api";
import { useMutation, useQuery } from "react-query";
//控制土壤濕度表單
function ControlSoil() {
  const classes = useStyles();
  const mutation = useMutation(updateSetting);
  const { data: sprinklerdata, status, error } = useQuery(
    "setting",
    getSetting
  );
  const [minTime, setMinTime] = useState();
  const [maxTime, setMaxTime] = useState();
  const [SingelVal, setSingelVal] = useState(0);
  const [warn, setWarn] = useState(true);
  const [open, setOpen] = useState(true);
  const sprinklersData =
    status === "success" &&
    sprinklerdata.filter((datas) => datas.module === "sprinklers");
  useEffect(() => {
    {
      status === "success" &&
        (setMinTime(sprinklersData[0].start),
        setMaxTime(sprinklersData[0].end),
        setSingelVal(sprinklersData[0].min));
    }
  }, [sprinklerdata]);
  function handleSubmit(e) {
    e.preventDefault();
    setWarn(true);
    mutation.mutate([
      {
        end: maxTime,
        min: SingelVal,
        module: "sprinklers",
        start: minTime,
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
            severity="success"
            style={{ background: "#81b29a" }}
            variant="filled"
          >
            更改已成功送出
          </Alert>
        </Snackbar>
      ) : null}
      <Typography variant="h5" className={classes.h5}>
        土壤濕度數據調整
      </Typography>
      <SliderSingle
        handleChange={(event, val) => {
          setSingelVal(val), setWarn(false);
        }}
        SingelVal={SingelVal}
        min={0}
        max={100}
        step={10}
        label="%"
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
export default ControlSoil;
