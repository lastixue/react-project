//Controlitem 樣式
import { makeStyles } from "@material-ui/core/styles";
// import LightGreen from "@material-ui/core/colors/LightGreen";
const useStyles = makeStyles((theme)=>({
  button: {
    background: "#81b29a",
    borderRadius: 3,
    border: 0,
    color: "white",
    "&:hover": {
      background: "#a1b5ab",
    },
  },
  textField:{
    margin:theme.spacing(6,0,6,0),
    caretColor:"#81b29a",
    "& label.Mui-focused": {
        color: "#81b29a"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor:"#81b29a"
      }
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
  center: {
    display: "flex",
    justifyContent: "center",
  },
  icon:{
      fontSize:"72px",
      color:"#81b29a",
  }
}));
export { useStyles };
