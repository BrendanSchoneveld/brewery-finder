import React, { Component } from "react";
import Form from "../../sharedComponents/__elements/Form/Form";
import Table from "../../sharedComponents/__elements/Table/Table";

import { fetchData } from "../../services/fetchData";

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
    tableRows: [
      {
        tableHead: true,
        customClasses: "thead-dark",
        tableColumns: [
          { position: "#", scope: "col" },
          { duration: "Duur", scope: "col" },
          { distance: "Afstand", scope: "col" },
          { link: "Link", scope: "col" }
        ]
      },
      {
        tableHead: false,
        tableColumns: [
          { position: 1 },
          { duration: "Duur" },
          { distance: "Afstand" },
          { link: "Link" }
        ]
      },
      {
        tableHead: false,
        tableColumns: [
          { position: 2 },
          { duration: "Duur" },
          { distance: "Afstand" },
          { link: "Link" }
        ]
      },
      {
        tableHead: false,
        tableColumns: [
          { position: 3 },
          { duration: "Duur" },
          { distance: "Afstand" },
          { link: "Link" }
        ]
      },
      {
        tableHead: false,
        tableColumns: [
          { position: 4 },
          { duration: "Duur" },
          { distance: "Afstand" },
          { link: "Link" }
        ]
      },
      {
        tableHead: false,
        tableColumns: [
          { position: 5 },
          { duration: "Duur" },
          { distance: "Afstand" },
          { link: "Link" }
        ]
      }
    ]
  };

  componentDidMount() {
    const fetchParams = {
      URL: `https://download.oberon.nl/opdracht/brouwerijen.js`,
      stateDescription: "breweryAdresses",
      component: this
    };

    fetchData(fetchParams);
  }

  render() {
    return (
      <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <Form formProps={this.formProps} />

        <Table {...this.tableProps} />
      </div>
    );
  }
}

export default HomeView;
