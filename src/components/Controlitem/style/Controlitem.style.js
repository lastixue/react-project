//Controlitem 樣式
import { makeStyles } from "@material-ui/core/styles";
import LightGreen from "@material-ui/core/colors/LightGreen";
const useStyles = makeStyles({
  button: {
    background: LightGreen[300],
    borderRadius: 3,
    border: 0,
    color: "white",
    "&:hover": {
      background: LightGreen[400],
    },
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
});
export { useStyles };
