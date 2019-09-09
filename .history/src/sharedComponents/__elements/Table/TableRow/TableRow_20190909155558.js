import React from "react";
import TableTH from "./TableTH/TableTH";

const TableRow = ({ duration, distance, index }) => {
  const displayDuration = duration ? duration.text : "",
    displayDistance = distance ? distance.text : "";

  return (
    <tr>
      <td>"1"</td>
      <td>{displayDuration}</td>
      <td>{displayDistance}</td>
      <td>"Demo"</td>
    </tr>
  );
};

export default TableRow;
