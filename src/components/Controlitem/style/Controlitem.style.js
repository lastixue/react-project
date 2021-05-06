//Controlitem 樣式
import { makeStyles } from "@material-ui/core/styles";
// import LightGreen from "@material-ui/core/colors/LightGreen";
const useStyles = makeStyles({
  warnButton: {
    background: "#81b29a",
    borderRadius: 3,
    border: 0,
    color: "white",
    "&:hover": {
      background: "#a1b5ab",
    },
  },
  button: {
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
  h5:{
    margin:"40px"
  }
});
export { useStyles };
