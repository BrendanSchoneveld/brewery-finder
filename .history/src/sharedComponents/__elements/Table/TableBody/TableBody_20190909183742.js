import React from "react";
import TableRow from "../TableRow/TableRow";

const TableBody = (props, { customClasses, searchResults }) => {
  console.log(props);
  const displaySearchResults = searchResults
    ? searchResults.map((result, index) => {
        return <TableRow {...result} key={index} />;
      })
    : [];

  return (
    <tbody className={customClasses ? customClasses : ""}>
      {displaySearchResults}
    </tbody>
  );
};

export default TableBody;
