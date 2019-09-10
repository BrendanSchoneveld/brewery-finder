import React from "react";
import TableRow from "../TableRow/TableRow";

const TableBody = (props, { customClasses, searchResults }) => {
  console.log(props);
  const displayResults = searchResults
    ? searchResults.map((result, index) => {
        return <TableRow {...result} key={index} />;
      })
    : [];

  return (
    <tbody className={customClasses ? customClasses : ""}>
      {displayResults}
    </tbody>
  );
};

export default TableBody;
