import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './TimeLapse.style';
// import CssBaseline from '@material-ui/core/CssBaseline';

 function TimeLapse() {
  const classes = useStyles();
  return (
    <Grid 
    container
    spacing={3}
    className={classes.root}>
          <Grid item xs={12} sm={12} md={12} lg={10}>
            <Paper className={classes.paper}>
            </Paper>
          </Grid>
          
    </Grid>
  );
}
export default TimeLapse