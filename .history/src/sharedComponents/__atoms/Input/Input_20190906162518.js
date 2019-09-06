import React from "react";

const Input = ({ type, id, name, value, customClasses }) => {
  const inputType = type ? type : "text",
    inputID = id ? id : "",
    inputName = name ? name : "",
    inputValue = value ? value : "",
    inputClass = customClasses ? customClasses : "";
  return (
    <input
      type={inputType}
      className={inputClass}
      id={inputID}
      name={inputName}
      value={inputValue}
    />
  );
};

export default Input;
