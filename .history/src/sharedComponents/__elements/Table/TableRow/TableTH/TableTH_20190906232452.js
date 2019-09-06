import React from "react";

const TableTH = ({ scope, text }) => {
  const thScope = scope ? scope : "";
  return <th scope={thScope}>{text}</th>;
};

export default TableTH;
