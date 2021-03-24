// @ts-nocheck
import React, { useReducer, useEffect } from "react";

//建立 useReducer switch
const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, loged:true}; //不可為object
    case "logout":
      // localStorage.removeItem('tests');
      return { ...state, loged:false};
    default:
      return state;
  }
};

const initialState = { loged: JSON.parse(localStorage.getItem("tests")) ||false}; //初始值localStorage.getItem('tests')||
const CounterContext = React.createContext(initialState); //建立global state
//刷新後會有增加雙引號等字符問題
function CounterProvider(props) {
  const [state,dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("tests", JSON.stringify(state.loged));
  }, [state]);
  return (
    <CounterContext.Provider value={{ state,dispatch,}}>
      {props.children}
    </CounterContext.Provider>
  );
}

export { CounterContext, CounterProvider };
