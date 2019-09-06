import React from "react";
import TableTH from "./TableTH/TableTH";

const TableRow = props => {
  return (
    <tr>
      <TableTH {...props} />
    </tr>
  );
};

export default TableRow;
