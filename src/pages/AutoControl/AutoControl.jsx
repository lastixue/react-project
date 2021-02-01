import React from "react";
import {Paper,Grid} from "@material-ui/core";
import Controlitem from "../../components/Controlitem/Controlitem";
import ControlSoil from "../../components/Controlitem/ControlSoil";
import { useStyles } from "./AutoControl.style";
// import CssBaseline from '@material-ui/core/CssBaseline';

function AutoControl() {
  const classess = useStyles();

  return (
    <Grid container spacing={3} className={classess.root}>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Paper className={classess.paper}>
          <Controlitem />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Paper className={classess.paper}>
          <ControlSoil/>
        </Paper>
      </Grid>

    </Grid>
  );
}
export default AutoControl;
