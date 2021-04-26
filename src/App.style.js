import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    overflowX: "auto",
    backgroundColor: "#B3C6AC",
    userSelect:"none"
  },
}));
