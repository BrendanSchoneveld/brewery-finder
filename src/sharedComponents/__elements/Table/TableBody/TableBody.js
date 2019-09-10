import React from "react";
import TableRow from "../TableRow/TableRow";

import compareDistances from "../../../../services/compareDistances";

const TableBody = ({ destinationsDistances, userInput }) => {
  const displayResults =
    destinationsDistances.length &&
    destinationsDistances.status !== "ZERO_RESULTS"
      ? destinationsDistances.sort(compareDistances).map((result, index) => {
          return <TableRow {...result} key={index} />;
        })
      : [];

  return <tbody>{displayResults}</tbody>;
};

export default TableBody;
