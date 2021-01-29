import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Controlitem from "../../components/Controlitem/Controlitem";
import { useStyles } from "./AutoControl.style";
// import CssBaseline from '@material-ui/core/CssBaseline';

function AutoControl() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Paper className={classes.paper}>
          <Controlitem tname="土壤濕度值" />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Paper className={classes.paper}>
          <Controlitem tname="光罩程度值" />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Paper className={classes.paper}>
          <Controlitem tname="水箱水位調整" />
        </Paper>
      </Grid>
    </Grid>
  );
}
export default AutoControl;
