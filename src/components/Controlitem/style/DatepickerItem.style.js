//Controlitem 樣式
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  textField: {
    display: "inline-block",
    margin: theme.spacing(5, 2),
    "& label.Mui-focused": {
      color: "#81b29a"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor:"#81b29a"
    }
  },
  center: {
    display: "flex",
    justifyContent: "center",
    color: "#303030",
  },
}));
export { useStyles };
