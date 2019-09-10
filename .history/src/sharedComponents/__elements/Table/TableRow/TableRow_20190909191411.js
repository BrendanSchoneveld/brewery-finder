import React from "react";
import TableTH from "./TableTH/TableTH";

const TableRow = (
  props,
  { name, duration, distance, link, position, index }
) => {
  console.log("tableheader");
  console.log(props);
  const displayDuration = duration ? duration.text : "",
    displayDistance = distance ? distance.text : "";

  return (
    <tr>
      <td className="text-left">{position || name}</td>
      <td>{displayDuration}</td>
      <td>{displayDistance}</td>
      <td>
        <i className="fas fa-map-marked-alt text-4xl"></i>
      </td>
    </tr>
  );
};

export default TableRow;
