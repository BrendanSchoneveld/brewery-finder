import React from "react";
import TableTH from "./TableTH/TableTH";

const TableRow = (props, { duration, distance, index }) => {
  console.log(props);

  return (
    <tr>
      {/* <td>{index}</td>
      <td>{distance.text}</td>
      <td>{duration.text}</td>
      <td>"Demo"</td> */}
    </tr>
  );
};

export default TableRow;
