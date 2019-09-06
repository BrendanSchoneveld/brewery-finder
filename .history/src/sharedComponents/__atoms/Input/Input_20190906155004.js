import React from "react";

const Input = ({ type, id, name, value, customClasses }) => {
  const inputType = type ? type : "text",
    inputID = id ? id : "",
    inputName = name ? name : "",
    inputValue = value ? value : null,
    inputClass = customClasses ? customClasses : "";
  return (
    <input
      type={inputType}
      class={inputClass + "form-control-plaintext"}
      id={inputID}
      name={inputName}
      value={inputValue}
    />
  );
};

export default Input;
