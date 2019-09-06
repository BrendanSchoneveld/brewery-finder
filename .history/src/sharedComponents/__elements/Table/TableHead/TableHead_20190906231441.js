import React from "react";
import TableRow from "../TableRow/TableRow";

const TableHead = (props, { customClasses, tableRows }) => {
  console.log("test " + props);
  return (
    <thead className={customClasses ? customClasses : ""}>
      <TableRow tableRows={tableRows} />
    </thead>
  );
};

export default TableHead;
