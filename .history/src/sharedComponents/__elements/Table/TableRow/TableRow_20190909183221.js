import React from "react";
import TableTH from "./TableTH/TableTH";

const TableRow = (props, { duration, distance, link, position, index }) => {
  console.log(props);
  const displayDuration = duration ? duration.text : "",
    displayDistance = distance ? distance.text : "";

  return (
    <tr>
      <td>{position}</td>
      <td>{displayDuration}</td>
      <td>{displayDistance}</td>
      <td>
        <i className="fas fa-map-marked-alt text-4xl"></i>
      </td>
    </tr>
  );
};

export default TableRow;
