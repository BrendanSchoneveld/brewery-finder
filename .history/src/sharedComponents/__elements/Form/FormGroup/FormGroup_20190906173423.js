import React from "react";
import FormLabel from "../../../__atoms/FormLabel/FormLabel";
import Input from "../../../__atoms/Input/Input";

const FormGroup = ({
  handleChange,
  labelProps,
  inputProps,
  formGroupProps: { customClasses }
}) => {
  const hasLabel = labelProps ? <FormLabel {...labelProps} /> : null,
    hasInput = inputProps ? (
      <Input {...inputProps} handleChange={handleChange} />
    ) : null;

  return (
    <div className={customClasses + "form-group"}>
      {hasLabel}

      {hasInput}
    </div>
  );
};

export default FormGroup;
