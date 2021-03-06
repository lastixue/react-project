//Controlitem 樣式
import { makeStyles } from "@material-ui/core/styles";
// import LightGreen from "@material-ui/core/colors/LightGreen";
const useStyles = makeStyles({
  button: {
    background: "#81b29a",
    borderRadius: 3,
    border: 0,
    color: "white",
    "&:hover": {
      background: "#a1b5ab",
    },
  },
  buttons: {
    background: "#edc555",
    borderRadius: 3,
    border: 0,
    color: "white",
    "&:hover": {
      background: "#edd287",
    },
  },
  error: {
    textAlign:"left",
    fontSize:"1em",
    fontWeight:"bold",
    color: "#eb7763",
  },
  errors: {
    display: "none",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
});
export { useStyles };
