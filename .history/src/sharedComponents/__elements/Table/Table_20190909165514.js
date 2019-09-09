import React from "react";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table = ({ tableClasses, tableHead, destinationsDistances }) => {
  return (
    <table className={tableClasses ? tableClasses : ""}>
      <TableHead {...tableHead} />

      <TableBody
        {...destinationsDistances}
        searchResults={destinationsDistances}
      />
    </table>
  );
};

export default Table;
