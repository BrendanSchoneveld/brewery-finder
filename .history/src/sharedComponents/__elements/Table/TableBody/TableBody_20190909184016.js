import React from "react";
import TableRow from "../TableRow/TableRow";

const TableBody = props => {
  console.log(props);
  /* const displayResults = props.searchResults
    ? searchResults.map((result, index) => {
        return <TableRow {...result} key={index} />;
      })
    : []; */

  return <tbody></tbody>;
};

export default TableBody;
