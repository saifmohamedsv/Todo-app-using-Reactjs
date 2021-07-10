import React, { Component } from "react";
import Btn from "./Btn/Btn";
import Todo from "./Todo/Todo";
import "./index.scss";
class App extends Component {
  render = () => (
    <div className="page">
      <Todo />
      <Btn disabled="false" text="click here" />
    </div>
  );
}

export default App;
