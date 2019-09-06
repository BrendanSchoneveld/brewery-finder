import React from "react";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table = props => {
  console.log(props);
  const { tableClasses, tableRows } = props;

  const displayTableRows = tableRows
    ? tableRows.map((tableRow, index) => {
        const { tableHead } = tableRow;

        console.log(tableHead);

        return tableHead ? (
          <TableHead {...this.props} />
        ) : (
          <TableBody {...this.props} />
        );
      })
    : [];

  return <table className={tableClasses}>{displayTableRows}</table>;
};

export default Table;
