import React from "react";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table = props => {
  console.log(props);
  const { tableRows, tableClasses, searchResults } = props;

  const displaySearchResults

  const displayTableRows = tableRows
    ? tableRows.map((tableRow, index) => {
        const { tableHead } = tableRow;

        return tableHead === true ? (
          <TableHead {...tableRow} key={index} />
        ) : (
          <TableBody {...tableRow} key={index} />
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
