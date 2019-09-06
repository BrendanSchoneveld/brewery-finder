import React, { Component } from "react";
import Form from "../../sharedComponents/__elements/Form/Form";

class HomeView extends Component {
  state = {
    userInput: "",
    breweryAdresses: []
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
          placeholder: "Voer een lokatie in"
        }
      }
    ]
  };

  tableProps = {
    tableClasses: "table",
    tableHead: {
      index: "#",
      duration: "Duur",
      distance: "Afstand"
    }
  };

  componentDidMount() {}

  render() {
    return (
      <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <Form formProps={this.formProps} />
      </div>
    );
  }
}

export default HomeView;
