import React from "react";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table = (props, { tableRows, tableClasses }) => {
  console.log(props);
  const displayTableRows = tableRows
    ? tableRows.map((tableRow, index) => {
        //const { tableHead } = tableRow;

        console.log(tableRow);

        return tableRow.tableHead ? (
          <TableHead {...this.props} key={index} />
        ) : (
          <TableBody {...this.props} key={index} />
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
