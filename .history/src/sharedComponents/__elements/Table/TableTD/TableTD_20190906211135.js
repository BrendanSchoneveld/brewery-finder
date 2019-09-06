import React from "react";

const TableTD = ({ customClasses, text }) => {
  const tdClasses = customClasses ? customClasses : "";
  return <td className={tdClasses}>{text}</td>;
};

export default TableTD;
