import React from "react";
import TableRow from "../TableRow/TableRow";

const TableHead = (props, { customClasses }) => {
  return (
    <thead className={customClasses}>
      <TableRow {...props} />
    </thead>
  );
};

export default TableHead;
