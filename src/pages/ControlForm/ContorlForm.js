import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Controlitem from '../../components/Controlitem/Controlitem'
// import CssBaseline from '@material-ui/core/CssBaseline';
const useStyles = makeStyles((theme) => ({
  root:{
    alignItems:'center',
    justifyContent:'center',
    marginTop: `${theme.spacing(4)}px`,
    [theme.breakpoints.down('sm')]: {
        marginTop: `${theme.spacing(8)}px`,
      },
      [theme.breakpoints.up('md')]: {
        margin: `${theme.spacing(15)}px ${theme.spacing(10)}px`,
      },
    },
  paper: {
    display:'flex',
    minHeight: "350px",
    margin: `0 ${theme.spacing(5)}px`,
    padding:`${theme.spacing(5)}px ${theme.spacing(5)}px`,
    alignItems:'flex-start',
    justifyContent:'center',
    background:'#EEFFE8',
  },
}));
 function ContorlForm() {
  const classes = useStyles();

  return (
    <Grid 
    container
    spacing={3}
    className={classes.root}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper className={classes.paper}>
              <Controlitem name="土壤濕度值"/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper className={classes.paper}>
              <Controlitem name="光罩程度值"/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper className={classes.paper}>
              <Controlitem name="水箱水位調整"/>
            </Paper>
          </Grid>
    </Grid>
  );
}
export default ContorlForm