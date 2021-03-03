import React,{useContext} from 'react';
import {Route, Navigate} from 'react-router-dom';
import { CounterContext } from "../Contexts/Contexts";
export default function PublicRoute({...rest}){
  // const isLoggedIn = false;
  const {state} = useContext(CounterContext)
  return state.loged?(null):(<Route {...rest} />)
}