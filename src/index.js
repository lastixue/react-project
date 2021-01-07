import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter initialCount={1} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

    