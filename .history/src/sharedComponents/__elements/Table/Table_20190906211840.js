import React from "react";
import TableHead from "./TableHead/TableHead";

const Table = ({ tableClasses }) => {
  return (
    <table className={tableClasses ? tableClasses : ""}>
      <TableHead />
    </table>
  );
};

export default Table;
