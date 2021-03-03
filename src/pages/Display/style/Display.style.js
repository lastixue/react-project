import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(8),
    },
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(4, 4),
    },
  },
  paper: {
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 4),
    },
    [theme.breakpoints.only("sm")]: {
      margin: theme.spacing(0, 1),
    },
    borderRadius: 10,
    display: "flex",
    minHeight: "350px",
    alignItems: "center",
    justifyContent: "center",
    background: "#EEFFE8",
  },
  box: {
    [theme.breakpoints.only("xs")]: {
      width: "350px",
    },
    background: "#EEFFE8",
    margin: "0,25px",
    padding: "25px",
    borderRadius: 10,
  },
  center: {
    [theme.breakpoints.only("xs")]: {
      display: "flex",
      justifyContent: "center",
      margin: theme.spacing(0, 6),
    },
  },
}));
