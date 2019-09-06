import React from "react";
import TableTH from "./TableTH/TableTH";

const TableRow = ({ tableColumns }) => {
  console.log(tableColumns);
  const displayColumns = tableColumns
    ? tableColumns.map((column, index) => {
        const { id, duration, distance, link } = column;

        return <TableTH {...column} id={id} text={id} key={index} />;
      })
    : [];
  return <tr>{displayColumns}</tr>;
};

export default TableRow;
