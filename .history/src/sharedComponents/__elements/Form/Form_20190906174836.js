import React, { Component } from "react";
import FormGroup from "./FormGroup/FormGroup";
import Button from "../../__atoms/Button/Button";

class Form extends Component {
  state = {
    userInput: ""
  };

  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    /*
     *  Destructuring properties
     */
    const {
        formProps: { formGroups, formClasses, formSubmit }
      } = this.props,
      /*
       *  Displaying formgroups when formGroups has content
       */
      displayFormGroups = formGroups.length
        ? formGroups.map((formGroup, index) => {
            const { labelProps, inputProps, formGroupProps } = formGroup,
              { userInput } = this.state;
            return (
              <FormGroup
                key={index}
                value={userInput}
                handleChange={this.handleChange}
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
        {this.state.userInput}

        {displayFormGroups}

        {displaySubmitButton}
      </form>
    );
  }
}

export default Form;
