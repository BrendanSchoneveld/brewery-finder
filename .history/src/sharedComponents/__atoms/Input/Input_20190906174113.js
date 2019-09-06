import React from "react";

const Input = ({
  type,
  id,
  name,
  value,
  customClasses,
  placeholder,
  handleChange
}) => {
  const inputType = type ? type : "text",
    inputID = id ? id : "",
    inputPlaceholder = placeholder ? placeholder : "",
    inputName = name ? name : "",
    inputValue = value ? value : "",
    inputClass = customClasses ? customClasses : "",
    inputWatch = handleChange ? handleChange : null;
  return (
    <input
      type={inputType}
      className={inputClass}
      id={inputID}
      name={inputName}
      value={inputValue}
      placeholder={inputPlaceholder}
      onChange={e => handleChange(e)}
    />
  );
};

export default Input;
