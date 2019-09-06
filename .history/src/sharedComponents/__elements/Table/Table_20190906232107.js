import React from "react";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table = props => {
  const { tableRows, tableClasses } = props;

  const displayTableRows = tableRows
    ? tableRows.map((tableRow, index) => {
        const { tableHead } = tableRow;

        console.log(tableRow);

        return tableHead === true ? (
          <TableHead props={tableRow} key={index} />
        ) : (
          <TableBody props={tableRow} key={index} />
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
