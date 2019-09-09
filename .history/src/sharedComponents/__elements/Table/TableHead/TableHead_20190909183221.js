import React from "react";
import TableRow from "../TableRow/TableRow";

const TableHead = ({ customClasses, tableColumns }) => {
  console.log(customClasses);
  return (
    <thead className={customClasses}>
      <TableRow {...tableColumns} />
    </thead>
  );
};

export default TableHead;
