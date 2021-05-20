import React from "react";
import { BrowserRouter, Routes,HashRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import ResponsiveDrawer from "./components/SideDrawer/SideDrawer";
import ContorlForm from "./pages/ControlForm/ContorlForm";
import Display from "./pages/Display/Display";
import TimeLapse from "./pages/TimeLapse/TimeLapse";
import AutoControl from "./pages/AutoControl/AutoControl";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import { CounterProvider } from "./Contexts/Contexts";
import { useStyles } from "./App.style";
import { QueryClient, QueryClientProvider} from "react-query";
function App() {
  const queryClient = new QueryClient()
  const classes = useStyles();
  return (
    <QueryClientProvider client={queryClient}>
    <div className={classes.root}>
      <CssBaseline />
      <CounterProvider>
        <HashRouter>
          <ResponsiveDrawer />
          <Routes>
            {/* <PublicRoute path="/login" element={<Login />} /> */}
            <ProtectedRoute path="/" element={<Display />} />
            <ProtectedRoute path="/TimeLapse" element={<TimeLapse />} />
            <ProtectedRoute path="/AutoControl" element={<AutoControl />} />
            <ProtectedRoute path="/ContorlForm" element={<ContorlForm />} />
          </Routes>
        </HashRouter>
      </CounterProvider>
    </div>
    </QueryClientProvider>
  );
}
export default App;
