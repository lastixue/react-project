import { makeStyles } from "@material-ui/core/styles";
// const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    alignItems:"flex-end",
    justifyContent: "center",
    // marginTop:theme.spacing(2),
    [theme.breakpoints.only("sm")]: {
      margin: theme.spacing(4,2),
    },
  },
  paper: {
    width:"80vw",
    minHeight: "80vh",
    alignItems: "flex-start",
    justifyContent: "center",
    background: "#EEFFE8",
    [theme.breakpoints.only("xs")]:{
      minHeight: "60vh",
    }
  },
}));
export { useStyles };
