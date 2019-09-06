import React from "react";
import FormLabel from "../../../__atoms/FormLabel/FormLabel";
import Input from "../../../__atoms/Input/Input";

const FormGroup = () => {
  return (
    <div class="form-group">
      <FormLabel {...this.props} />

      <Input {...this.props} />
    </div>
  );
};

export default FormGroup;
