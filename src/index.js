import React from "react";
import ReactDOM from "react-dom";
import ResponsiveDrawer from "./components/SideDrawer/SideDrawer";
import ContorlForm from "./pages/ControlForm/ContorlForm"
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    display:'flex',
    
    height:'100vh',
    overflow: 'auto',
    overflowX:'hidden',
    backgroundColor:"#B3C6AC",
  },

}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ResponsiveDrawer/>
      <ContorlForm/>
      <CssBaseline/>
    </div>
    
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

    