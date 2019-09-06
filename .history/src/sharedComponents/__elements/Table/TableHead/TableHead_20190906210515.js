import React from "react";
import TableRow from "../TableRow/TableRow";

const TableHead = ({ customClasses }) => {
  return (
    <thead className={customClasses ? customClasses : ""}>
      <TableRow />
    </thead>
  );
};

export default TableHead;
