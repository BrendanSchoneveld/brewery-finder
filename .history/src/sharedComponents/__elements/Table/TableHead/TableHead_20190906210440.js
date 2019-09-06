import React from "react";

const TableHead = ({ customClasses }) => {
  return <thead className={customClasses ? customClasses : ""}></thead>;
};

export default TableHead;
