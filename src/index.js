import React from "react";
import ReactDOM from "react-dom";
import MainComponent from "./task-2/three-component";
import InsertField from "./task-1/class";

const App = () => {
  const style = {
    width: "200px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "100px",
    border: "2px solid black",
    textAlign: "center"
  };
  return (
    <div style={style}>
      <p> First task</p>
      <InsertField />
      <p>Second task</p>
      <MainComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));