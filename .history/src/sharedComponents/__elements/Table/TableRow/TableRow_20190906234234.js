import React from "react";
import TableTH from "./TableTH/TableTH";

const TableRow = ({ tableColumns }) => {
  console.log(tableColumns);
  const displayColumns = tableColumns
    ? tableColumns.map((column, index) => {
        const { id, duration, distance, link, scope } = column;

        return (
          <TableTH
            id={id}
            text={duration || distance || link}
            scope={scope}
            key={index}
          />
        );
      })
    : [];
  return <tr>{displayColumns}</tr>;
};

export default TableRow;
