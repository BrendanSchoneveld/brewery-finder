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
    searchResults: {},
    searchOrigin: "",
    distanceRowsToDisplay: []
  };

  componentDidMount = () => {
    const breweryData = require("../../data/brouwerijen.json"),
      { breweries } = breweryData;

    this.setState(
      {
        breweries: [...breweries]
      },
      () => {
        if (breweries.length) {
          this.createDestinationsData(breweries);
        }
      }
    );
  };

  createDestinationsData = breweries => {
    const destinationsData = [];

    breweries.map(brewery => {
      const { address, city, zipcode } = brewery;
      destinationsData.push([address, city, zipcode, "|"].join());
      return null;
    });

    this.setState({
      destinations: [...destinationsData]
    });
  };

  handleChange = e => {
    const target = e.target,
      value = target.type === "checkbox" ? target.checked : target.value,
      name = target.name;

    this.setState(
      {
        [name]: value
      },
      () => {
        this.search();
      }
    );
  };

  search = _.debounce(() => {
    const { destinations, userInput } = this.state,
      fetchParams = {
        endpoint: `/maps-api/maps/api/distancematrix/`,
        format: `json`,
        units: `metric`,
        origins: `${userInput}+ON`,
        destinations: `${destinations}`,
        mode: `car`,
        language: `nl-NL`,
        API_KEY: `AIzaSyDt8TIB9kS6PblFh0CCR3epTkOF6OryOlY`,
        setStateOf: "searchResults",
        component: this
      };

    fetchData(fetchParams);
  }, 1000);

  componentDidUpdate = () => {
    const { searchResults } = this.state;

    if (!_.isEmpty(searchResults)) {
      this.displayResults(searchResults.rows[0].elements);
    }
  };

  displayResults = _.debounce(results => {
    const { breweries } = this.state,
      destinationRows = results
        ? results.map((distanceResults, i) => {
            const mergedObject = {
              ...breweries[i],
              ...distanceResults
            };

            return mergedObject;
          })
        : [];
    this.setState({
      distanceRowsToDisplay: destinationRows
    });
  }, 1000);

  render() {
    const { userInput, distanceRowsToDisplay } = this.state;
    return (
      <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <Form handleChange={this.handleChange} userInput={userInput} />

        <Table destinationsDistances={distanceRowsToDisplay} />
      </div>
    );
  }
}

export default HomeView;
