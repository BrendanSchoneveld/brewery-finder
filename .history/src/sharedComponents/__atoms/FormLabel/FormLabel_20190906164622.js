import React from "react";

const FormLabel = ({ target, text, customClasses }) => {
  console.log(text);
  const labelTarget = target ? target : "",
    labelText = text ? text : "";
  return (
    <label htmlFor={labelTarget} className={customClasses}>
      {labelText}
    </label>
  );
};

export default FormLabel;
