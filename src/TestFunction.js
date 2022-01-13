import { Component } from "react";

function func1() {
  var a = "hong";

  if (true) {
    var a = "kim";
    console.log(a);
  }
  console.log(a);

  return a;
}

function func2() {
  let a = "123";

  if (true) {
    let a = "678";
    console.log(a);
  }
  console.log(a);

  return a;
}

export default function TestFunction(props) {
  return <>{props.num % 2 === 0 ? <h1>Merong</h1> : <h1>Horong</h1>}</>;
}
