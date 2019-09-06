import React, { Component } from "react";
import FormGroup from "./FormGroup/FormGroup";
import Button from "../../__atoms/Button/Button";

class Form extends Component {
  state = {
    userInput: ""
  };

  formProps = {
    formClasses: "form-inline bg-blue-700 mt-5 px-3 py-5 rounded-full",
    formGroups: [
      {
        labelProps: {
          text: "Lokatie",
          customClasses: "",
          target: "locationInput"
        },
        inputProps: {
          type: "text",
          customClasses: "form-control",
          id: "1",
          name: "locationInput",
          value: this.state.userInput,
          placeholder: "Vul je lokatie in om te zoeken"
        }
      }
    ],
    formSubmit: {
      type: "submit",
      customClasses: "btn btn-primary mb-2",
      text: "Zoek"
    }
  };

  render() {
    // Destructuring properties
    const {
        formProps: { formGroups, formClasses, formSubmit }
      } = this,
      // Displaying formgroups when formGroups has content
      displayFormGroups = formGroups.length
        ? formGroups.map((formGroup, index) => {
            const { labelProps, inputProps } = formGroup;
            return (
              <FormGroup
                key={index}
                labelProps={labelProps}
                inputProps={inputProps}
              />
            );
          })
        : null;

    return (
      <form className={formClasses}>
        {displayFormGroups}

        <Button {...formSubmit} />
      </form>
    );
  }
}

export default Form;
