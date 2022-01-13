import TestFunction from "./TestFunction.js";

export default function PropPropDouble(props) {
  return (
    <table border="1">
      <tr>
        <td>전달값</td>
        <td>함수 호출 결과</td>
      </tr>
      <tr>
        <td>{props.num}</td>
        <td>
          <TestFunction num={props.num} />
        </td>
      </tr>
    </table>
  );
}
