import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveDrawer from "./components/SideDrawer/SideDrawer";
import ContorlForm from "./pages/ControlForm/ContorlForm";
import Display from "./pages/Display/Display";
import TimeLapse from "./pages/TimeLapse/TimeLapse";
import AutoControl from "./pages/AutoControl/AutoControl";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./App.style";
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <BrowserRouter>
        <ResponsiveDrawer />
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/TimeLapse" element={<TimeLapse />} />
          <Route path="/AutoControl" element={<AutoControl />} />
          <Route path="/ContorlForm" element={<ContorlForm />} />
        </Routes>

        {/* <Route path="/image" element={<ImageBox />} /> */}

        {/* <Routes>
          </Routes>  */}
      </BrowserRouter>
    </div>
  );
}
export default App;
