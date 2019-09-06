import React from "react";
import FormLabel from "../../../__atoms/FormLabel/FormLabel";
import Input from "../../../__atoms/Input/Input";

const FormGroup = ({ labelProps, inputProps }) => {
  return (
    <div className="form-group">
      <FormLabel {...labelProps} />

      <Input {...inputProps} />
    </div>
  );
};

export default FormGroup;
