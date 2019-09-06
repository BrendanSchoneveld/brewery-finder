import React, { Component } from "react";
import FormGroup from "./FormGroup/FormGroup";
import Button from "../../__atoms/Button/Button";

class Form extends Component {
  state = {
    userInput: ""
  };

  render() {
    // Destructuring properties
    const {
        formProps: { formGroups, formClasses, formSubmit }
      } = this.props,
      // Displaying formgroups when formGroups has content
      displayFormGroups = formGroups.length
        ? formGroups.map((formGroup, index) => {
            const { labelProps, inputProps, formGroupProps } = formGroup;
            return (
              <FormGroup
                key={index}
                formGroupProps={formGroupProps}
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
