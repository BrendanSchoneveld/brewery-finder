import React from "react";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table = props => {
  const { tableRows, tableClasses } = props;

  console.log(tableRows);

  const displayTableRows = tableRows
    ? tableRows.map((tableRow, index) => {
        const { tableHead } = tableRow;

        console.log(tableRow);

        return tableHead ? (
          <TableHead {...props} key={index} />
        ) : (
          <TableBody {...props} key={index} />
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
