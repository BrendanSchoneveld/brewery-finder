import React from "react";
import TableRow from "../TableRow/TableRow";

const TableBody = ({ customClasses, tableRows }) => {
  return (
    <tbody className={customClasses ? customClasses : ""}>
      <TableRow tableRows={tableRows} />
    </tbody>
  );
};

export default TableBody;
