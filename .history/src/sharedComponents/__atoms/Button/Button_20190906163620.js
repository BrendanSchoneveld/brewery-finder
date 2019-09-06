import React from "react";

const Button = props => {
  const { type, text, customClasses } = props,
    btnType = type ? type : "",
    btnText = text ? text : "",
    btnClasses = customClasses ? customClasses : "";

  console.log(type, text, customClasses);

  return (
    <button className={"btn btn-primary" + btnClasses} type={btnType}>
      {btnText}
    </button>
  );
};

export default Button;
