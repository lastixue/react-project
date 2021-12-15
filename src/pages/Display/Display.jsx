import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CircleProgress from "../../components/CardItem/CircleProgress";
import BarChart from "../../components/Chart/BarChart";
import { Grow } from "@material-ui/core";
import { useQuery } from "react-query";
import { getStatus } from "../../../apitest/api";
import { useStyles } from "./style/Display.style";

function Display() {
  const { data, status, error } = useQuery("status", getStatus);
  const classes = useStyles();
  {
    error && console.error("data is not fetch");
  }
  // {
  // historyStatus === "success" && console.log(history);
  // }
  return (
    <Grid container spacing={4} className={classes.root}>
      {status === "success" && (
        <>
          <Grow in timeout={400}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Paper className={classes.paper}>
                <CircleProgress
                  title="土壤濕度"
                  value={data.logs[0]?.moisture || 0}
                />
              </Paper>
            </Grid>
          </Grow>
          <Grow in timeout={800}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Paper className={classes.paper}>
                <CircleProgress title="光照程度" value={data.logs[0]?.lux || 0} />
              </Paper>
            </Grid>
          </Grow>
          <Grow in timeout={1200}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Paper className={classes.paper}>
                <CircleProgress
                  title="水箱水位"
                  value={data.logs[0]?.tankfluid || 0}
                />
              </Paper>
            </Grid>
          </Grow>
        </>
      )}
      <Grow in timeout={5000}>
        <Grid className={classes.center} item xs={12} sm={12} md={12} lg={12}>
          <Box className={classes.box}>
            <BarChart />
          </Box>
        </Grid>
      </Grow>
    
    </Grid>
  );
}
export default Display;
