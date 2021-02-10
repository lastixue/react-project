import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    margin:theme.spacing(0,3),
    [theme.breakpoints.only("sm")]:{
      margin:theme.spacing(3),
    }
  },
  gridList: {
    
    width: "auto",
    height: "auto",
    [theme.breakpoints.only("xs")]: {
      width: "320px",
    },

  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));
export { useStyles };
