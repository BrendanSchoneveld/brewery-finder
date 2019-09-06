import React from "react";
import TableRow from "../TableRow/TableRow";

const TableBody = (props, { customClasses }) => {
  return (
    <tbody className={customClasses ? customClasses : ""}>
      <TableRow {...props} />
    </tbody>
  );
};

export default TableBody;
