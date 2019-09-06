import React from "react";
import TableTH from "./TableTH/TableTH";

const TableRow = props => {
  console.log(props);
  return (
    <tr>
      <TableTH />
    </tr>
  );
};

export default TableRow;
