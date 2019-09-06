import React from "react";

const Button = (props, { type, text, customClasses }) => {
  console.log(props);
  console.log(type, text, customClasses);
  const btnType = type ? type : "",
    btnText = text ? text : "",
    btnClasses = customClasses ? customClasses : "";

  return (
    <button className={"btn btn-primary" + btnClasses} type={btnType}>
      {btnText}
    </button>
  );
};

export default Button;
