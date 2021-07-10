import React, { Component } from "react";
import "./TodoBanner.scss";
class TodoBanner extends Component {
  render = () => (
    <div className="banner">
      <h1 className="title">
        {this.props.name}'s todo list -{" "}
        <span
          className={
            this.props.todoItems.filter((item) => !item.done).length === 0
              ? "hidden"
              : "title"
          }
        >
          {this.props.todoItems.filter((item) => !item.done).length} tasks to do
        </span>
      </h1>

      <h1
        className={
          this.props.todoItems.filter((item) => !item.done).length === 0
            ? "title"
            : "hidden"
        }
      >
        No tasks to do
      </h1>
    </div>
  );
}

export default TodoBanner;
