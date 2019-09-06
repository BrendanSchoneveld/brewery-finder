import React from "react";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableRow/TableRow";

const Table = (props, { tableClasses, tableRows }) => {
  const displayTableRows = tableRows
    ? tableRows.map((tableRow, index) => {
        const { tableHead } = tableRow;

        return tableHead ? <TableHead {...props} /> : <TableBody {...props} />;
      })
    : [];

  return (
    <table className={tableClasses ? tableClasses : ""}>
      {displayTableRows}
    </table>
  );
};

export default Table;
