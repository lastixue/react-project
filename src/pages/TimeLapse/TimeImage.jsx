import React from "react";
import { useStyles } from "./style/TimeImage.style";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
function Test() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Paper className={classes.paper}>
         
        </Paper>
      </Grid>
    </Grid>
  );
}
export default Test;
