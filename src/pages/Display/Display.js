import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardItem from '../../components/CardItem/CardItem';
// import {
//   CircularProgressbar,
//   buildStyles
// } from "react-circular-progressbar";
import {useStyles} from './Display.style';
// import CssBaseline from '@material-ui/core/CssBaseline';

 function Display() {
  const classes = useStyles();
  return (
      
    <Grid 
    container
    spacing={3}
    className={classes.root}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Paper className={classes.paper}>
            <CardItem title="土壤濕度"/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={8}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper className={classes.paper}></Paper>
          </Grid>
    </Grid>
  );
}
export default Display