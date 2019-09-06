import React, { Component } from "react";
import FormGroup from "./FormGroup/FormGroup";
import Button from "../../__atoms/Button/Button";

class Form extends Component {
  state = {
    userInput: ""
  };

  static formProps = {
    formClasses: "form-inline",
    formGroups: [
      {
        label: {
          text: "",
          customClasses: "",
          target: ""
        },
        input: {
          type: "text",
          customClasses: "",
          id: "",
          name: "",
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
        formClasses,
        formClasses: { formGroups }
      } = this.props,
      displayFormGroups = formGroups.length
        ? formGroups.map((formGroup, index) => {
            return <FormGroup />;
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
