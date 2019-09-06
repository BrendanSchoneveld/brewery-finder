import React, { Component } from "react";
import FormGroup from "./FormGroup/FormGroup";
import Button from "../../__atoms/Button/Button";

class Form extends Component {
  state = {
    userInput: ""
  };

  formProps = {
    formClasses: "form-inline",
    formGroups: [
      {
        labelProps: {
          text: "",
          customClasses: "sr-only",
          target: "locationInput"
        },
        inputProps: {
          type: "text",
          customClasses: "form-control",
          id: "1",
          name: "locationInput",
          value: this.state.userInput
        }
      },
      {}
    ],
    formSubmit: {
      type: "submit",
      customClasses: "btn btn-primary mb-2",
      text: "Zoek"
    }
  };

  render() {
    const {
        formProps,
        formProps: { formGroups, formClasses }
      } = this,
      displayFormGroups = formGroups.length
        ? formGroups.map((formGroup, index) => {
            return <FormGroup {...this.props} />;
          })
        : null;

    return (
      <form className={formClasses}>
        {displayFormGroups}

        <Button {...this.props} />
      </form>
    );
  }
}

export default Form;
