import React, { Component } from "react";
import Form from "../../sharedComponents/__elements/Form/Form";

class HomeView extends Component {
  state = {
    userInput: ""
  };

  formProps = {
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
          value: this.state.userInput,
          placeholder: "Voer een lokatie in"
        }
      }
    ]
  };

  /* handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }; */

  render() {
    return (
      <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <Form formProps={this.formProps} />
      </div>
    );
  }
}

export default HomeView;
