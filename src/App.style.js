import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    display: "flex",
    height: "100vh",
    overflow: "auto",
    overflowX: "auto",
    backgroundColor: "#B3C6AC",
    userSelect:"none"
  },
}));
