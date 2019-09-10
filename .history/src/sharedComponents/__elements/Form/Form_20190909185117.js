import React from "react";
import FormGroup from "./FormGroup/FormGroup";
import Button from "../../__atoms/Button/Button";

const Form = ({ formSubmit, userInput, handleChange }) => {
  /*
   * Static content for the form elements
   */
  const formProps = {
      formClasses: "form bg-blue-700 mt-5 px-5 py-5 rounded-full",
      formGroups: [
        {
          formGroupProps: {
            customClasses: "mb-0"
          },
          inputProps: {
            type: "text",
            customClasses: "form-control form-control-lg mb-0",
            id: "1",
            name: "userInput",
            placeholder: "Voer een lokatie in"
          }
        }
      ]
    },
    /*
     * Destructuring formprops for readability enhancement
     */
    { formClasses, formGroups } = formProps,
    /*
     * Loop over formGroups and display on screen
     */
    displayFormGroups = formGroups.length
      ? formGroups.map((formGroup, index) => {
          const { labelProps, inputProps, formGroupProps } = formGroup;
          /*
           *  Return each FormGroup element that exists
           */
          return (
            <FormGroup
              key={index}
              value={userInput}
              handleChange={handleChange}
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
