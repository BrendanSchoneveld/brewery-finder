import React from "react";
import TableRow from "../TableRow/TableRow";

const TableHead = ({ customClasses, tableColumns }) => {
  return (
    <thead className={customClasses}>
      <TableRow {...tableColumns} />
    </thead>
  );
};

export default TableHead;
