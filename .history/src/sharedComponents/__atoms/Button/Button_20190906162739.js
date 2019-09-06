import React from "react";

const Button = ({ type, text, customClasses }) => {
  console.log(this.props);
  const btnType = type ? type : "text",
    btnText = text ? text : "Zoek",
    btnClasses = customClasses ? customClasses : "";

  return (
    <button className={"btn btn-primary" + btnClasses} type={btnType}>
      {btnText}
    </button>
  );
};

export default Button;
