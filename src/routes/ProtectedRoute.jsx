// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, redirectTo, isAuth, path, ...props }) => {
//     if(isAuth) {
//         return <Navigate to={redirectTo} />;
//     }
//     return <Route path={path} element={<Component />} />
// };

// export default PrivateRoute;
import React,{useContext} from 'react';
import {Route, Navigate} from 'react-router-dom';
import { CounterContext } from "../Contexts/Contexts";
export default function ProtectedRoute({element, path}){
  // const isLoggedIn = false;
  const {state} = useContext(CounterContext)
  return state.loged?(<Route path={path} element={element}></Route>):(<Navigate to={"/login"} /> )
}