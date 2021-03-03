import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    alignItems:"flex-start",
    justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(10, 10),
    },
  },
  paper: {
    display: "flex",
    minHeight: "150px",
    margin: theme.spacing(0,5),
    padding: theme.spacing(5, 5),
    alignItems: "flex-start",
    justifyContent: "center",
    background: "#EEFFE8",
  },
}));
