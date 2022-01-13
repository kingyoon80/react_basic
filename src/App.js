import { Component } from "react";
// import Test from "../public/Test";
import "./styles.css";
import Testclass from "./testclass.js";
import MyName from "./myname.js";
import PropPropDouble from "./PropPropDouble.js";

function add(a, b) {
  return a + b;
}

let add1 = (a, b) => a + b;

let multifunc = (a, b) => ({ add: a + b, multi: a * b });

const num = 100;

// export default function App() {
//   return (
//     <>
//       <li>react</li>
//       <Test />
//       <h1>{add1(10, 20)}</h1>
//       <h1>{num}</h1>
//       <h2>{multifunc(100, 200).multi}</h2>
//       <li>react</li>
//       <li>react</li>
//     </>
//   );
// }

function App() {
  return (
    <>
      <Testclass num="10" />
      <MyName name="Kim" age="11">
        이름없다니깐
      </MyName>
      <PropPropDouble num="10" />
    </>
  );
}

export default App;
