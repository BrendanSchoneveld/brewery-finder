import React from "react";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table = props => {
  const { tableRows, tableClasses, searchResults } = props;

  return (
    <table className={tableClasses ? tableClasses : ""}>
      <TableHead {...tableRow} key={index} />

      <TableBody {...tableRow} searchResults={searchResults} key={index} />
    </table>
  );
};

export default Table;
