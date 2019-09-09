import React from "react";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table = ({ destinationsDistances }) => {
  const tableProps = {
    tableClasses: "table mt-5",
    tableHead: {
      customClasses: "thead-dark",
      tableColumns: {
        scope: "col",
        position: "#",
        duration: "Duur",
        distance: "Afstand",
        link: "Link"
      }
    }
  };

  const { tableClasses, tableHead } = tableProps;

  return (
    <table className={tableClasses ? tableClasses : ""}>
      <TableHead {...tableHead} />

      <TableBody
        {...destinationsDistances}
        searchResults={destinationsDistances}
      />
    </table>
  );
};

export default Table;
