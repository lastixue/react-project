import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import ResponsiveDrawer from "./components/SideDrawer/SideDrawer";
import ContorlForm from "./pages/ControlForm/ContorlForm";
import Display from "./pages/Display/Display";
import TimeLapse from "./pages/TimeLapse/TimeLapse";
import AutoControl from "./pages/AutoControl/AutoControl";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import { CounterContext,CounterProvider } from "./Contexts/Contexts";
import { useStyles } from "./App.style";
function App() {
  const  state  = useContext(CounterContext);
  const classes = useStyles();
  console.log(state.loged);
  return (
    <CounterProvider>
    <div className={classes.root}>
      <CssBaseline />
      
      <BrowserRouter>
        <ResponsiveDrawer />
        <Routes>
         <PublicRoute path="/" element={<Login />} />
          <ProtectedRoute
            path="/Display"
            element={<Display />}
          />
          <ProtectedRoute
            path="/TimeLapse"
            element={<TimeLapse />}
          />
          <ProtectedRoute
            path="/AutoControl"
            element={<AutoControl />}
          />
          <ProtectedRoute
            path="/ContorlForm"
            element={<ContorlForm />}
          />
          {/* <PrivateRoute  isAuth={true} path="/Display" component={Display}  redirectTo='/Display'/>
          <PrivateRoute  isAuth={true} path="/TimeLapse" component={TimeLapse}  redirectTo='/TimeLapse'/>
          <PrivateRoute  isAuth={true} path="/AutoControl" component={AutoControl}  redirectTo='/AutoControl'/>
          <PrivateRoute  isAuth={true} path="/ContorlForm" component={ContorlForm}  redirectTo='/ContorlForm'/> */}
        </Routes>

        {/* <Route path="/image" element={<ImageBox />} /> */}

        {/* <Routes>
          </Routes>  */}
      </BrowserRouter>
    </div>
    </CounterProvider>
  );
}
export default App;
