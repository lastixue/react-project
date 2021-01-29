import { makeStyles } from "@material-ui/core/styles";
// const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "flex-start",
    justifyContent: "center",
    // marginTop:theme.spacing(2),
    [theme.breakpoints.only("xs")]: {
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: theme.spacing(6),
    },
    margin: theme.spacing(0),
  },
  paper: {
    width: "80vw",
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(5),
      minHeight: "800px",
    },
    minHeight: "700px",
    alignItems: "flex-start",
    justifyContent: "center",
    background: "#EEFFE8",
  },
}));
export { useStyles };
