import React, { Component } from "react";
import Form from "../../sharedComponents/__elements/Form/Form";
import Table from "../../sharedComponents/__elements/Table/Table";

import _ from "lodash";

class HomeView extends Component {
  state = {
    userInput: "",
    didUserSearch: false,
    breweries: []
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
    tableClasses: "table mt-5",
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

  getDestinations = () => {
    const { breweries } = this.state;
    let destinations = [];

    return breweries.length
      ? breweries.map((brewery, index) => {
          const { address, city, name } = brewery;
          console.log({ address, city, name });
          destinations.push({ address, city, name });
        })
      : [];
  };

  search = _.debounce(searchQuery => {
    const { userInput } = this.state;
    const fetchParams = {
      endpoint: `https://maps.googleapis.com/maps/api/distancematrix/`,
      format: `json`,
      origins: `${userInput}`,
      destinations: this.getDestinations(),
      URL: `https://api.spotify.com/v1/search?q=${searchQuery}&type=track`,
      stateDescription: "searchResults",
      component: this
    };

    console.log(fetchParams);

    //fetchData(fetchParams);
  }, 1000);

  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    const { userInput } = this.state,
      breweryData = require("../../data/brouwerijen.json");

    this.setState(
      {
        breweries: { ...breweryData.breweries }
      },
      () => {
        this.search(userInput);
      }
    );

    /* const fetchParams = {
      URL: `https://download.oberon.nl/opdracht/brouwerijen.js`,
      stateDescription: "breweryAdresses",
      component: this
    };

    fetchData(fetchParams); */
  }

  render() {
    const { userInput } = this.state;
    return (
      <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <Form
          {...this.formProps}
          handleChange={this.handleChange}
          userInput={userInput}
        />

        <Table {...this.tableProps} />
      </div>
    );
  }
}

export default HomeView;
