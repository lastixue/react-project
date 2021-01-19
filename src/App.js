import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveDrawer from "./components/SideDrawer/SideDrawer";
import ContorlForm from "./pages/ControlForm/ContorlForm"
import Display from "./pages/Display/Display";
import TimeLapse from "./pages/TimeLapse/TimeLapse";
import AutoControl from "./pages/AutoControl/AutoControl";
import { makeStyles} from '@material-ui/core/styles';
// import {stockData} from './components/SideDrawer/Data'
// import CssBaseline from '@material-ui/core/CssBaseline';
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
        /* <BrowserRouter> */
        
        /* <ResponsiveDrawer/>
        <Routes>
          <Route path='/ContorlForm' element={<ContorlForm />} />
          <Route path='/Display' element={<Display />} />
          <Route path='/TimeLapse' element={<TimeLapse />} />
          <Route path='/AutoControl' element={<AutoControl />} />
        </Routes>
      </BrowserRouter> */
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <BrowserRouter> 
        
         <ResponsiveDrawer/>
        <Routes>
          <Route path='/ContorlForm' element={<ContorlForm />} />
          <Route path='/Display' element={<Display />} />
          <Route path='/TimeLapse' element={<TimeLapse />} />
          <Route path='/AutoControl' element={<AutoControl />} />
        </Routes>
      </BrowserRouter>

    </div>
    
  );
}
export default App;