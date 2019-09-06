import React from "react";

const FormLabel = ({ target, text, customClasses }) => {
  const labelTarget = target ? target : "",
    labelClasses = customClasses ? customClasses : "",
    labelText = text ? text : "";
  return (
    <label htmlFor={labelTarget} className={customClasses}>
      {labelText}
    </label>
  );
};

export default FormLabel;
