import React, { Component } from "react";
import TodoCreate from "./CreateTodo/TodoCreate";
import TodoBanner from "./TodoBanner/TodoBanner";
import TodoItem from "./TodoItem/TodoItem";
import "./Todo.scss";

export default class Todo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todoItems: [],
    };
  }
  createTodo = (task) => {
    if (!this.state.todoItems.find((item) => item.action === task)) {
      this.setState(
        {
          todoItems: [...this.state.todoItems, { action: task, done: false }],
        },
        () => localStorage.setItem("todos", JSON.stringify(this.state))
      );
    }
  };
  componentDidMount = () => {
    let data = localStorage.getItem("todos");
    this.setState(data != null ? JSON.parse(data) : { todoItems: [] });
  };
  toggleTodo = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        todo.action === item.action ? { ...item, done: !item.done } : item
      ),
    });
  };
  render() {
    return (
      <div className="container">
        <div className="todoContainer">
          <TodoBanner todoItems={this.state.todoItems} name="Saif" />
          <TodoCreate createTodo={this.createTodo} />
          <TodoItem todoItems={this.state.todoItems} toggle={this.toggleTodo} />
        </div>
      </div>
    );
  }
}
