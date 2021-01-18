import { makeStyles} from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
 
  drawer: {
    [theme.breakpoints.up('sm')]: {
      minWidth: drawerWidth,
      flexShrink: 0
    },
  },
  appBar: {
    backgroundColor:'#fefefe',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },

  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'#303030',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  listWrap: {
    color:"#789730",
    "&$.selected": {
      borderLeft: "10px solid #789730"
    }
  },
  center:{
    textAlign:'center',
    marginRight:theme.spacing(6)
  },
  margin:{
    marginLeft:theme.spacing(4)
  }
}));
export {useStyles};