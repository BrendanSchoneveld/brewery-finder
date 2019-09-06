import React, { Component } from "react";
import FormGroup from "./FormGroup/FormGroup";
import Button from "../../__atoms/Button/Button";

class Form extends Component {
  state = {};

  static formProps = {
    formClasses: "form-inline",
    formGroups: [
        {},
        {}
    ],
    formSubmit: {
        type: "submit",
        customClasses: "btn btn-primary mb-2",
        text: "Zoek"
    }
  };

  render() {
    const { formClasses } = this.props,
    displayFormGroups = formGroups.length ? formGroups.map((formGroup, index) => {
         return (<FormGroup />)
    })

    return (
      <form className={formClasses}>
        {displayFormGroups}

        <Button {...props} />
      </form>
    );
  }
}

export default Form;
