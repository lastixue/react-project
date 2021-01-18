import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root:{
      alignItems:'center',
      justifyContent:'center',
      [theme.breakpoints.down('sm')]: {
          marginTop: `${theme.spacing(8)}px`,
        },
        [theme.breakpoints.up('md')]: {
          margin: `${theme.spacing(8)}px ${theme.spacing(10)}px`,
        },
      },
    paper: {
      display:'flex',
      minHeight: "350px",
      margin: `0 ${theme.spacing(5)}px`,
      padding:`${theme.spacing(5)}px ${theme.spacing(5)}px`,
      alignItems:'flex-start',
      justifyContent:'center',
      background:'#EEFFE8',
    },
  }));
  export {useStyles};