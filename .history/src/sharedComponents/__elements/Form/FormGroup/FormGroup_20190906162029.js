import React from "react";
import FormLabel from "../../../__atoms/FormLabel/FormLabel";
import Input from "../../../__atoms/Input/Input";

const FormGroup = ({ ...props }) => {
  return (
    <div class="form-group">
      <FormLabel {...props} />

      <Input {...props} />
    </div>
  );
};

export default FormGroup;
