//Controlitem 樣式
import { makeStyles } from "@material-ui/core/styles";
import LightGreen from "@material-ui/core/colors/LightGreen";
const useStyles = makeStyles((theme) => ({
  switchBase: {
    color: theme.palette.grey[500],
    "&$checked": {
      color: LightGreen[300],
      borderColor: LightGreen[100],
      "& + $track": {
        opacity: 1,
        backgroundColor: LightGreen[100],
      },
      "&.Mui-disabled + $track": {
        backgroundColor: theme.palette.grey[500],
      },
    },
  },
  checked: {},
  thumb: {
    width: "32px",
    height: "32px",
    transform: "translateX(0px)",
  },
  Typography: {
    margin: theme.spacing(0.9, 2),
  }, //theme.spacing 為defaut theme 預設間距 8px 所以theme.spacing(2)=8*2
  track: {
    backgroundColor: theme.palette.grey[500],
  },
}));
export { useStyles };
