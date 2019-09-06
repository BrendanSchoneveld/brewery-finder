import React from "react";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table = props => {
  console.log(props);
  const displayTableRows = props.tableRows
    ? props.tableRows.map((tableRow, index) => {
        const { tableHead } = tableRow;

        console.log(tableHead);

        return tableHead ? (
          <TableHead {...this.props} />
        ) : (
          <TableBody {...this.props} />
        );
      })
    : [];

  return (
    <table className={props.tableClasses ? props.tableClasses : ""}>
      {displayTableRows}
    </table>
  );
};

export default Table;
