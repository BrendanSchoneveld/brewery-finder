import React, { Component } from "react";
import FormGroup from "./FormGroup/FormGroup";
import Button from "../../__atoms/Button/Button";

class Form extends Component {
  state = {
    userInput: ""
  };

  formProps = {
    formClasses: "form bg-blue-700 mt-5 px-5 py-5 rounded-full",
    formGroups: [
      {
        /* labelProps: {
          text: "Lokatie",
          customClasses: "",
          target: "locationInput"
        }, */
        inputProps: {
          type: "text",
          customClasses: "form-control form-control-lg",
          id: "1",
          name: "locationInput",
          value: this.state.userInput,
          placeholder: "Vul je lokatie in om te zoeken"
        }
      }
    ]
    /* formSubmit: {
      type: "submit",
      customClasses: "btn btn-primary mb-2",
      text: "Zoek"
    } */
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
        : null,
      displaySubmitButton = formSubmit ? <Button {...formSubmit} /> : null;

    return (
      <form className={formClasses}>
        {displayFormGroups}

        {displaySubmitButton}
      </form>
    );
  }
}

export default Form;
