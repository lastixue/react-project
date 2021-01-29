import React from "react";
import { useStyles } from "./TimeImage.style";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
function Test() {
  const classes = useStyles();
  return <Paper className={classes.paper}>123</Paper>;
}
export default Test;
