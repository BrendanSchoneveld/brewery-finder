import React from "react";
import TableTH from "./TableTH/TableTH";

const TableRow = ({ text, distance, index }) => {
  const displayColumns = tableColumns
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
    : [];

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

  return <tr>{displayColumns}</tr>;
};

export default TableRow;
