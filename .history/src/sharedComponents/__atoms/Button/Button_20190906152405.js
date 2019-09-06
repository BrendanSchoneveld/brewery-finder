import React from "react";

const Button = ({ type, text }) => {
  const btnType = type ? type : "text",
    btnText = text ? text : "Zoek";

  return <button type={btnType}>{btnText}</button>;
};

export default Button;
