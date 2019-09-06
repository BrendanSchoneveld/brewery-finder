import React from "react";

const TableTH = (props, { scope, text }) => {
  console.log(props);
  const thScope = scope ? scope : "";
  return <th scope={thScope}>{text}</th>;
};

export default TableTH;
