import React from "react";
import TableRow from "../TableRow/TableRow";

const TableHead = ({ customClasses }) => {
  return (
    <thead className={customClasses + "henkie"}>
      <TableRow {...this.props} />
    </thead>
  );
};

export default TableHead;
