import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CircleProgress from "../../components/CardItem/CircleProgress";
import DataCard from "../../components/CardItem/DataCard";
import Bar from "../../components/Chart/BarChart";
import { useStyles } from "./Display.style";

function Display() {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Paper className={classes.paper}>
          <CircleProgress title="土壤濕度" value="60" />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Paper className={classes.paper}>
          <CircleProgress title="光照程度" value="50" />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Paper className={classes.paper}>
          <CircleProgress title="水箱水位" value="40" />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Paper className={classes.paper}>
          <DataCard />
        </Paper>
      </Grid>
      <Grid className={classes.center} item xs={12} sm={12} md={12} lg={6}>
        <Box className={classes.box}>
          <Bar />
        </Box>
      </Grid>
      <Grid className={classes.center} item xs={12} sm={12} md={12} lg={6}>
        <Box className={classes.box}>
          <Bar />
        </Box>
      </Grid>
      <Grid className={classes.center} item xs={12} sm={12} md={12} lg={6}>
        <Box className={classes.box}>
          <Bar />
        </Box>
      </Grid>
      {/* <Grid item xs={12} sm={12} md={12} lg={6}>
          <Box style={{background:'#EEFFE8',margin:'0,25px',padding:'25px',borderRadius:10}}>
            <Bar/> 
            </Box>

          </Grid> */}
    </Grid>
  );
}
export default Display;
