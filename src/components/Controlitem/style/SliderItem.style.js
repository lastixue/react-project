import { makeStyles } from "@material-ui/core/styles";
import LightGreen from "@material-ui/core/colors/LightGreen";
const useStyles = makeStyles((theme) => ({
  rail: {
    opacity: 1,
    backgroundColor: "#e6e9ea",
    height: "3px",
    borderRadius: "3px",
  },
  track: {
    backgroundColor: theme.palette.grey[500],
  },
  slidertrack: {
    backgroundColor: LightGreen[300],
    color: LightGreen[300],
  },
  sliderthumb: {
    backgroundColor: LightGreen[300],
  },
  checked: {},
}));
export { useStyles };
