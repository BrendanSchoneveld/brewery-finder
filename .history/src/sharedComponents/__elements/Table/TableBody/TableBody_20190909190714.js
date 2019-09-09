import React from "react";
import TableRow from "../TableRow/TableRow";

import compareDistances from "../../../../services/compareDistances";

const TableBody = ({ destinationsDistances }) => {
  console.log(destinationsDistances);
  const displayResults = destinationsDistances.length
    ? destinationsDistances.sort(compareDistances).map((result, index) => {
        return <TableRow {...result} key={index} />;
      })
    : [];

  return <tbody>{displayResults}</tbody>;
};

export default TableBody;
