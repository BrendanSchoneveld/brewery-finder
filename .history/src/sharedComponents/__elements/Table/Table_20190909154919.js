import React from "react";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table = ({ tableClasses, tableHead, searchResults }) => {
  return (
    <table className={tableClasses ? tableClasses : ""}>
      <TableHead {...tableHead} />

      <TableBody {...searchResults} searchResults={searchResults} />
    </table>
  );
};

export default Table;
