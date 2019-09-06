import React from "react";

const TableTH = ({ scope }) => {
  const thScope = scope ? scope : "";
  return <th scope={thScope} />;
};

export default TableTH;
