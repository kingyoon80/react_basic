import { Component } from "react";

function func1() {
  var a = "hong";

  if (true) {
    var a = "kim";
    console.log(a);
  }
  console.log(a);
}

function func2() {
  let a = "123";

  if (true) {
    let a = "678";
    console.log(a);
  }
  console.log(a);
}

export default class Testclass extends Component {
  render() {
    return (
      <>
        {console.log(this.props.num % 2 === 0) ? (
          <h1> {func1()} </h1>
        ) : (
          <h1> {func2()} </h1>
        )}
      </>
    );
  }
}
