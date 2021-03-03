import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    // marginTop:theme.spacing(2),
    [theme.breakpoints.only("xs")]: {
      marginTop: theme.spacing(16),
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: theme.spacing(12),
    },
    margin: theme.spacing(10, 0),
  },
  // paper: {
  //   display:'flex',
  //   flexGrow: 1,
  //   [theme.breakpoints.up('sm')]: {
  //     marginTop:theme.spacing(5),
  //     minHeight: "800px",
  //   },
  //   minHeight: "700px",
  //   alignItems:'flex-start',
  //   justifyContent:'center',
  //   background:'#EEFFE8',
  // },
  indicator: {
    background: "#81b29a",
    height: "5px",
  },
  appBar: {
    flexGrow: 1,
    background: "#fefefe",
    color: "#303030",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginTop: theme.spacing(0),
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: theme.spacing(7),
    },
    [theme.breakpoints.only("sm")]: {
      width: "100%",
      marginTop: theme.spacing(6),
    },
  },
}));
export { useStyles };
