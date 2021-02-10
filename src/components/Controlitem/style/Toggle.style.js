//Controlitem 樣式
import { makeStyles } from "@material-ui/core/styles";
import LightGreen from "@material-ui/core/colors/LightGreen";
const useStyles = makeStyles((theme) => ({
  switchBase: {
    color: theme.palette.grey[500],

    "&$checked": {
      color: "#81b29a",
      borderColor: LightGreen[100],

      "& + $track": {
        opacity: 1,
        backgroundColor: "#a1b5ab",
      },
      "&.Mui-disabled + $track": {
        backgroundColor: theme.palette.grey[500],
      },
    },
  },
  checked: {},
  thumb: {
    width: "20px",
    height: "20px",
    //position: "relative",
    //top: 2,
    borderRadius: 0,
  },
  Typography: {
    margin:theme.spacing(0, 1.5),
    position: "relative",
    top:1,
  }, //theme.spacing 為defaut theme 預設間距 8px 所以theme.spacing(2)=8*2
  track: {
    backgroundColor: theme.palette.grey[500],
    // border:"black 5px solid",
    position: "relative",
    bottom: 2.5,
    height: "19px",
    width: "40px",
    borderRadius: 0,
  },
}));
export { useStyles };
