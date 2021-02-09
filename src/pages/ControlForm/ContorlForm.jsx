import React from "react";
import { Paper, Grid } from "@material-ui/core";
import Manual from "../../components/Controlitem/Manual";
import { useStyles } from "./ContorlForm.style";
// import CssBaseline from '@material-ui/core/CssBaseline';

function ContorlForm() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Paper className={classes.paper}>
          <Manual tname="土壤濕度" />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Paper className={classes.paper}>
          <Manual tname="光照程度" />
        </Paper>
      </Grid>
    </Grid>
  );
}
export default ContorlForm;
