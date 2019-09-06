import React from "react";
import TableHead from "./TableHead/TableHead";

const Table = ({ tableClasses, tableRows }) => {
  console.log(tableRows);
  return (
    <table className={tableClasses ? tableClasses : ""}>
      <TableHead />
    </table>
  );
};

export default Table;
