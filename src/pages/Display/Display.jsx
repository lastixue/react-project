import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CircleProgress from "../../components/CardItem/CircleProgress";
import Bar from "../../components/Chart/BarChart";
import { Grow } from "@material-ui/core";
import { useQuery } from "react-query";
import { getStatus, getHistory } from "../../../apitest/api";
import { useStyles } from "./style/Display.style";
import moment from "moment";
function Display() {
  const { data, status, error } = useQuery("status", getStatus);
  const {
    data: history,
    status: historyStatus,
    error: historyError,
  } = useQuery("history", getHistory);

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
                  value={data.logs[0].moisture}
                />
              </Paper>
            </Grid>
          </Grow>
          <Grow in timeout={800}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Paper className={classes.paper}>
                <CircleProgress title="光照程度" value={data.logs[0].lux} />
              </Paper>
            </Grid>
          </Grow>
          <Grow in timeout={1200}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Paper className={classes.paper}>
                <CircleProgress
                  title="水箱水位"
                  value={data.logs[0].tankfluid}
                />
              </Paper>
            </Grid>
          </Grow>
        </>
      )}
      <Grow in timeout={2000}>
        <Grid className={classes.center} item xs={12} sm={12} md={12} lg={6}>
          <Box className={classes.box}>
            <Bar />
          </Box>
        </Grid>
      </Grow>
      <Grow in timeout={2000}>
        <Grid className={classes.center} item xs={12} sm={12} md={12} lg={6}>
          <Box className={classes.box}>
            <Bar />
          </Box>
        </Grid>
      </Grow>
      <Grow in timeout={2000}>
        <Grid className={classes.center} item xs={12} sm={12} md={12} lg={6}>
          <Box className={classes.box}>
            <Bar />
          </Box>
        </Grid>
      </Grow>
    </Grid>
  );
}
export default Display;
