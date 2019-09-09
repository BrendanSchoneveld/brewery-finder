import React from "react";
import TableRow from "../TableRow/TableRow";

const TableBody = ({ customClasses, searchResults }) => {
  const displaySearchResults = searchResults
    ? searchResults.map((result, index) => {
        return <TableRow {...result} key={index} index={index} />;
      })
    : [];

  return (
    <tbody className={customClasses ? customClasses : ""}>
      {displaySearchResults}
    </tbody>
  );
};

export default TableBody;
