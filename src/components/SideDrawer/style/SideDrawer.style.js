import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  //material-ui api breakpoints : 判斷尺寸制定樣式
  drawer: {
    [theme.breakpoints.up("md")]: {
      minWidth: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "#fefefe",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#303030",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
  },

  selected: {
    borderLeft: "5px solid #529c89",
    "&.Mui-selected":{
      background:"white"
    },
  },
  center: {
    textAlign: "center",
    marginRight: theme.spacing(6),
  },
  marginl: {
    marginLeft: theme.spacing(4),
  },
  marginT: {
    marginTop: theme.spacing(4),
  },
  icon: {
    fontSize: "130px",
    color: "#81B29A",
  },
  aside: {
    display: "flex",
    flexWrap: "wrap",
    lineHeight: "6px",
    justifyContent: "center",
    position: "relative",
    top: "40px",
  },
 none: {
    display: "none",

  },
  button: {
    background:"#81B29A",
    color:"#fefefe",
    "&:hover": {
      background:"#689C97"
    }
  },
}));
