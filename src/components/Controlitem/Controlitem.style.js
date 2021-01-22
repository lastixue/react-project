//Controlitem 樣式
import { makeStyles} from '@material-ui/core/styles';
import LightGreen from '@material-ui/core/colors/LightGreen';
 const useStyles = makeStyles((theme)=>({
    switchBase: {
        color: theme.palette.grey[500],
        "&$checked": {
          color:LightGreen[300],
          borderColor:LightGreen[100],
          "& + $track": {
            opacity: 1,
            backgroundColor:LightGreen[100]
            
        },    
        "&.Mui-disabled + $track": {
            backgroundColor: theme.palette.grey[500]
        },
        },
      },
      rail: {
        opacity: 1,
        backgroundColor: "#e6e9ea",
        height: "3px",
        borderRadius: "3px"
      },
      track: {
        backgroundColor: theme.palette.grey[500]
      },
      slidertrack: {
        backgroundColor:LightGreen[300],
        color:LightGreen[300]
      },
      sliderthumb:{
        backgroundColor:LightGreen[300]
      },
      checked: {
      },
      Typography:{
        margin: theme.spacing(0.9,2)
      },//theme.spacing 為defaut theme 預設間距 8px 所以theme.spacing(2)=8*2 
      slider:{
        margin:theme.spacing(0.9,2)
      },
      textField:{
        display:'inline-block',
        margin: theme.spacing(5,2)
      },
      button:{
        background: LightGreen[300],
        borderRadius: 3,
        border: 0,
        color: 'white',
        '&:hover':{
            background: LightGreen[400],
        }
      },
      center:{
        display:'flex',
        justifyContent:'center',
        color:'#303030'
      }

  }));
  export {useStyles};
  