import React from "react";
import TableRow from "../TableRow/TableRow";

const TableBody = ({ destinationsDistances }) => {
  console.log(destinationsDistances);
  const displayResults = destinationsDistances.length
    ? destinationsDistances.map((result, index) => {
        return <TableRow {...result} key={index} />;
      })
    : [];

  return <tbody>{displayResults}</tbody>;
};

export default TableBody;
