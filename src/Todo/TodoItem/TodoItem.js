import React, { Component } from "react";
import "./TodoItem.scss";
export default class TodoItem extends Component {
  length = this.props.todoItems.filter((item) => !item.done).length;
  render() {
    return (
      <div className="TodoItem">
        {/* ============ Incompleted section =========== */}
        <div className="items-container">
          <h1 className="item-title">Tasks to do</h1>
          <h3
            className={
              this.props.todoItems.filter((item) => !item.done).length === 0
                ? "emptyTasks"
                : "hidden"
            }
          >
            Add tasks{" "}
          </h3>
          <div className="item-list">
            {this.props.todoItems.map((item) => (
              <div
                className={item.done ? "hidden" : "list-item"}
                key={item.action}
                onClick={() => this.props.toggle(item)}
              >
                <h3 className="item-action">{item.action}</h3>
                <p className="item-state">
                  {" "}
                  {item.done ? "completed" : "incompleted"}
                </p>
                <input
                  type="checkbox"
                  className="checkBox"
                  checked={item.done}
                  onChange={() => this.props.toggle(item)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* ============ completed section =========== */}
        <div className="items-container">
          <h1 className="item-title">Completed tasks</h1>
          <h3
            className={
              this.props.todoItems.filter((item) => item.done).length === 0
                ? "emptyTasks"
                : "hidden"
            }
          >
            No completed tasks{" "}
          </h3>
          <div className="item-list">
            {this.props.todoItems.map((item) => (
              <div
                className={item.done ? "list-item" : "hidden"}
                key={item.action}
                onClick={() => this.props.toggle(item)}
              >
                <h3 className="item-action">{item.action}</h3>
                <p className="item-state">
                  {" "}
                  {item.done ? "completed" : "incompleted"}
                </p>
                <input
                  type="checkbox"
                  className="checkBox"
                  checked={item.done}
                  onChange={() => this.props.toggle(item)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
