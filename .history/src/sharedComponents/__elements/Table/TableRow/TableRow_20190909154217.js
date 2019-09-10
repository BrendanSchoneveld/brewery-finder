import React from "react";
import TableTH from "./TableTH/TableTH";

const TableRow = ({ text, duration, distance, index }) => {
  /* const displayColumns = tableColumns
    ? tableColumns.map((column, index) => {
        const { position, duration, distance, link, scope } = column;

        return (
          <tr>
            <td>{index}</td>
            <td>{distance.text}</td>
            <td>{duration.text}</td>
            <td>"Demo"</td>
          </tr>
        );
      })
    : []; */

  /* const displayColumns = tableColumns
    ? tableColumns.map((column, index) => {
        const { position, duration, distance, link, scope } = column;

        return (
          <TableTH
            text={position || duration || distance || link}
            scope={scope}
            key={index}
          />
        );
      })
    : []; */

  return (
    <tr>
      <td>{index}</td>
      <td>{distance.text}</td>
      <td>{duration.text}</td>
      <td>"Demo"</td>
    </tr>
  );
};

export default TableRow;
