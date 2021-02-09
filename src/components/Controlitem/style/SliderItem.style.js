import { makeStyles } from "@material-ui/core/styles";
import LightGreen from "@material-ui/core/colors/LightGreen";
const useStyles = makeStyles((theme) => ({
  rail: {
    opacity: 1,
    backgroundColor: "#e6e9ea",
    height: "3px",
    borderRadius: 0,
  },
  track: {
    backgroundColor: theme.palette.grey[500],
    borderRadius: 0,
  },
  slidertrack: {
    backgroundColor: "#81b29a",
    color: "#81b29a",
    borderRadius: 0,
  },
  sliderthumb: {
    backgroundColor: "#81b29a",
    borderRadius: 0,
  },
  checked: {},
}));
export { useStyles };
