import React, { Component } from "react";
import Form from "../../sharedComponents/__elements/Form/Form";
import Table from "../../sharedComponents/__elements/Table/Table";
import fetchData from "../../services/fetchData";

import _ from "lodash";

class HomeView extends Component {
  state = {
    userInput: "",
    breweries: [],
    destinations: [],
    searchResults: []
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
    tableHead: {
      customClasses: "thead-dark",
      tableColumns: [
        { position: "#", scope: "col" },
        { duration: "Duur", scope: "col" },
        { distance: "Afstand", scope: "col" },
        { link: "Link", scope: "col" }
      ]
    }
  };

  getDestinations = () => {
    let resultsData = require("../../data/demoResults.json");

    const { breweries } = this.state,
      destinationInfo = [];

    if (breweries.length) {
      breweries.map(brewery => {
        const { address, city, name, zipcode } = brewery;
        destinationInfo.push([address, city, name, zipcode, "|"].join());
      });
    }

    this.setState(
      {
        // destinations: [...destinationInfo]
        destinations: [...destinationInfo]
      },
      () => {
        this.displayResults(resultsData);
      }
    );
  };

  displayResults = results => {
    const { breweries } = this.state,
      breweryNames = breweries.length
        ? breweries.map(brewery => {
            return brewery.name;
          })
        : [];

    const dataRows = results
      ? results.rows[0].elements.map(distanceResults => {
          return distanceResults;
        })
      : [];
    this.setState({
      searchResults: [...dataRows]
    });
  };

  search = _.debounce(searchQuery => {
    const { destinations } = this.state,
      fetchParams = {
        endpoint: `https://maps.googleapis.com/maps/api/distancematrix/`,
        format: `json`,
        units: `metric`,
        origins: `${searchQuery}+ON`,
        destinations: `${destinations}`,
        mode: `car`,
        language: `nl-NL`,
        API_KEY: `AIzaSyDt8TIB9kS6PblFh0CCR3epTkOF6OryOlY`,
        stateDescription: "searchResults",
        component: this
      };

    fetchData(fetchParams);
  }, 1000);

  handleChange = e => {
    const { userInput } = this.state,
      target = e.target,
      value = target.type === "checkbox" ? target.checked : target.value,
      name = target.name;

    this.setState(
      {
        [name]: value
      },
      () => {
        this.search(userInput);
      }
    );
  };

  componentDidMount() {
    let breweryData = require("../../data/brouwerijen.json");

    this.setState(
      {
        breweries: [...breweryData.breweries]
      },
      () => {
        this.getDestinations();
      }
    );
  }

  render() {
    const { userInput, searchResults } = this.state;
    return (
      <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <Form
          {...this.formProps}
          handleChange={this.handleChange}
          userInput={userInput}
        />

        <Table {...this.tableProps} searchResults={searchResults} />
      </div>
    );
  }
}

export default HomeView;
