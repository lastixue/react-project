import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Grid, Typography, Box } from "@material-ui/core";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
import ImageLayout from "./ImageLayout";
import Test from "./TimeImage";
import { useStyles } from "./style/TimeLapse.style";
function TabPanel({ children, value, index, ...other }) {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={index}
      aria-labelledby={index}
      // id={`nav-tabpanel-${index}`}
      // aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired
// };

function a11yProps(index) {
  return {
    id: index,
    "aria-controls":index,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function TimeLapse() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={3} className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Tabs
          classes={{
            indicator: classes.indicator,
          }}
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="縮時相簿功能"
        >
          <LinkTab label="相簿" {...a11yProps(0)} />
          <LinkTab label="最近圖片" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ImageLayout />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Test />
      </TabPanel>
    </Grid>
  );
}
export default TimeLapse;
