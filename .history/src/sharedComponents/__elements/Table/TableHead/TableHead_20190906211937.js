import React from "react";
import TableRow from "../TableRow/TableRow";

const TableHead = ({ customClasses, tableRows }) => {
  return (
    <thead className={customClasses ? customClasses : ""}>
      <TableRow tableRows={tableRows} />
    </thead>
  );
};

export default TableHead;
