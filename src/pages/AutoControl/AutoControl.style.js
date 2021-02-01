import { makeStyles } from "@material-ui/core/styles";
 const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(8),
    },
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(4, 10),
    },
  },
  paper: {
    display: "flex",
    minHeight: "350px",
    margin: theme.spacing(5),
    padding: theme.spacing(5, 5),
    alignItems: "flex-start",
    justifyContent: "center",
    background: "#EEFFE8",
  },
}));
export {useStyles};
