import React, { Component } from "react";

export default class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      hasBtnBeenClicked: false,
    };
  }
  handleClick = () => {
    for (let i = 0; i < 5; i++) {
      
    }
    this.setState({ hasBtnBeenClicked: true });
  };
  render = () => (
    <div>
      <button
        disabled={
          this.props.disabled === "true" || this.props.disabled === true
        }
        onClick={this.handleClick}
      >
        {this.props.text} {this.state.counter}{" "}
        {this.state.hasBtnBeenClicked && <div>btn has been clicked</div>}
      </button>
    </div>
  );
}
