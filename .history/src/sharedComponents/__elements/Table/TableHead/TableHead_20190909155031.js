import React from "react";
import TableRow from "../TableRow/TableRow";

const TableHead = props => {
  return (
    <thead>
      <TableRow {...props} />
    </thead>
  );
};

export default TableHead;
