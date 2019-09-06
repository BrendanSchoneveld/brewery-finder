import React from "react";
import TableHead from "./TableHead/TableHead";

const Table = (props, { tableClasses, tableRows }) => {
  console.log(props);
  return (
    <table className={tableClasses ? tableClasses : ""}>
      <TableHead />
    </table>
  );
};

export default Table;
