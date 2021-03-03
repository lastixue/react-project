import React, { useReducer } from "react";

//建立 useReducer switch
const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state,loged: true};
    case "logout":
      return { ...state,loged: false};
    default:
      return state;
  }
};

const initialState = { loged: false };//初始值
const CounterContext = React.createContext(initialState);//建立global state

function CounterProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
}

export { CounterContext, CounterProvider };
