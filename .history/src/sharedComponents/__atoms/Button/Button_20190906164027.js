import React from "react";

const Button = ({ type, text, customClasses }) => {
  const btnType = type ? type : "",
    btnText = text ? text : "";

  return (
    <button className={customClasses} type={btnType}>
      {btnText}
    </button>
  );
};

export default Button;
