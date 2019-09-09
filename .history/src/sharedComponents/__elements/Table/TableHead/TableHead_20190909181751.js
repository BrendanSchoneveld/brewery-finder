import React from "react";
import TableRow from "../TableRow/TableRow";

const TableHead = props => {
  console.log(props);
  return (
    <thead>
      <TableRow {...props} />
    </thead>
  );
};

export default TableHead;
