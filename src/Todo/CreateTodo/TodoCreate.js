import React, { Component } from "react";
import "./TodoCreate.scss";
export default class TodoCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemText: "",
    };
  }
  updateTodo = (event) => {
    this.setState({ newItemText: event.target.value });
  };
  createTodo = () => {
    this.props.createTodo(this.state.newItemText);
    this.setState({ newItemText: "" });
  };
  render() {
    return (
      <div className="form">
        <label htmlFor="addItem" className="form-label">
          Add New Item
        </label>
        <input
          type="text"
          className="form-input"
          placeholder="Enter item name..."
          value={this.state.newItemText}
          onChange={this.updateTodo}
          id="addItem"
        />
        <button className="form-btn" onClick={this.createTodo}>
          Submit
        </button>
      </div>
    );
  }
}
