import React from "react";
import TableRow from "../TableRow/TableRow";

const TableBody = ({ customClasses, searchResults }) => {
  const displaySearchResults = searchResults
    ? searchResults.map(result => {
        return <TableRow {...result} />;
      })
    : [];

  return (
    <tbody className={customClasses ? customClasses : ""}>
      {displaySearchResults}
    </tbody>
  );
};

export default TableBody;
