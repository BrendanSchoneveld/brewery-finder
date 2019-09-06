import React from "react";
import TableRow from "../TableRow/TableRow";

const TableHead = (props, { customClasses }) => {
  return (
    <thead className={customClasses + "henkie"}>
      <TableRow {...props} />
    </thead>
  );
};

export default TableHead;
