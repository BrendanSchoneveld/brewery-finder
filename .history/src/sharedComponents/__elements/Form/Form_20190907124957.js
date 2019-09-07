import React, { Component } from "react";
import FormGroup from "./FormGroup/FormGroup";
import Button from "../../__atoms/Button/Button";

const Form = ({ formGroups, formClasses, formSubmit, userInput }) => {
  const displayFormGroups = formGroups.length
      ? formGroups.map((formGroup, index) => {
          const { labelProps, inputProps, formGroupProps } = formGroup,
            { userInput } = t;
          /*
           *  Return each FormGroup element that exists
           */
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
      {displayFormGroups}

      {displaySubmitButton}
    </form>
  );
};

export default Form;
