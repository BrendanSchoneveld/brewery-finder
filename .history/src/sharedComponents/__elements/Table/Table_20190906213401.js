import React from "react";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table = ({ tableClasses, tableRows }) => {
  console.log(tableClasses);

  const displayTableRows = tableRows
    ? tableRows.map((tableRow, index) => {
        const { tableHead } = tableRow;

        return tableHead ? (
          <TableHead {...this.props} />
        ) : (
          <TableBody {...this.props} />
        );
      })
    : [];

  return (
    <table className={tableClasses ? tableClasses : ""}>
      {displayTableRows}
    </table>
  );
};

export default Table;
