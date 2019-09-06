import React from "react";

const Button = props => {
  const { type, text, customClasses } = props,
    btnType = type ? type : "",
    btnText = text ? text : "";

  console.log(props.customClasses);

  return (
    <button className={customClasses} type={btnType}>
      {btnText}
    </button>
  );
};

export default Button;
