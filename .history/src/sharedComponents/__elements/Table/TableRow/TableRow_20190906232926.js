import React from "react";
import TableTH from "./TableTH/TableTH";

const TableRow = (props, { tableColumns }) => {
  console.log(props);
  const displayColumns = tableColumns
    ? tableColumns.map(() => {
        return <TableTH {...props} />;
      })
    : [];
  return <tr>{displayColumns}</tr>;
};

export default TableRow;
