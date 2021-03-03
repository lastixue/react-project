import React from "react";
import { Paper, Grid } from "@material-ui/core";
import Loginform from "../../components/LoginForm/LoginFrom";
import { useStyles } from "./style/Login.style";

// import CssBaseline from '@material-ui/core/CssBaseline';

function Login() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={10} lg={6}>
        <Paper className={classes.paper}>
          <Loginform />
        </Paper>
      </Grid>
    </Grid>
  );
}
export default Login;
