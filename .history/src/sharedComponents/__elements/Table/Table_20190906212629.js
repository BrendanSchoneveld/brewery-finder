import React from "react";
import TableHead from "./TableHead/TableHead";
import TableRow from "./TableRow/TableRow";

const Table = (props, { tableClasses, tableRows }) => {
  const displayTableRows = tableRows
    ? tableRows.map((tableRow, index) => {
        const { tableHead } = tableRow;

        return tableHead ? <TableHead {...props} /> : <TableRow {...props} />;
      })
    : [];

  return (
    <table className={tableClasses ? tableClasses : ""}>
      {displayTableRows}
    </table>
  );
};

export default Table;
