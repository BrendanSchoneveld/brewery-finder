import React from "react";
import TableTH from "./TableTH/TableTH";

const TableRow = ({ name, duration, distance, link, position, index }) => {
  const displayDuration = duration ? duration.text : "",
    displayDistance = distance ? distance.text : "";

  console.log("tableheader");
  console.log(distance);

  return (
    <tr>
      <td className="text-left">{position || name}</td>
      <td>{displayDuration || duration}</td>
      <td>{displayDistance || distance}</td>
      <td>
        <i className="fas fa-map-marked-alt text-4xl"></i>
      </td>
    </tr>
  );
};

export default TableRow;
