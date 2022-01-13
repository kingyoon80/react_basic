import { Component } from "react";

class Counter extends Component {
  state = {
    num: 0
  };

  handleInc = () => {
    this.setState({ num: this.state.num + 1 });
  };

  handleDec = () => {
    this.setState({ num: this.state.num - 1 });
  };

  render() {
    return (
      <>
        <h1>카운터</h1>
        <div>현재 값: {this.state.num}</div>
        <button onClick={this.handleInc}>증가</button>
        <button onClick={this.handleDec}>감소</button>
      </>
    );
  }
}

export default Counter;
