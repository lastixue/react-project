import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root:{
      alignItems:'flex-start',
      justifyContent:'center',
      [theme.breakpoints.down('sm')]: {
          marginTop:theme.spacing(8),
        },
          margin:theme.spacing(4,0),
      },
    paper: {
      display:'flex',
      minHeight: "500px",
      alignItems:'flex-start',
      justifyContent:'center',
      background:'#EEFFE8',
    },
  }));
  export {useStyles};