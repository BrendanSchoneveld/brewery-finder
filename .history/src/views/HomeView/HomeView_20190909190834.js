import React, { Component } from "react";
import Form from "../../sharedComponents/__elements/Form/Form";
import Table from "../../sharedComponents/__elements/Table/Table";
import fetchData from "../../services/fetchData";
import compareDistances from "../../services/compareDistances";

import _ from "lodash";

class HomeView extends Component {
  state = {
    userInput: "",
    breweries: [],
    destinations: [],
    destinationsDistances: []
  };

  calcDestinationsDistances = () => {
    let resultsData = require("../../data/demoResults.json");

    const { breweries } = this.state,
      destinationInfo = [];

    if (breweries.length) {
      breweries.map(brewery => {
        const { address, city, zipcode } = brewery;
        destinationInfo.push([address, city, zipcode, "|"].join());
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
      destinationRows = results
        ? results.rows[0].elements.map((distanceResults, i) => {
            const mergedObject = { ...breweries[i], ...distanceResults };

            return mergedObject;
          })
        : [];
    this.setState(
      {
        destinationsDistances: destinationRows
      },
      () => {
        console.log(this.state.destinationsDistances);
      }
    );
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
        this.calcDestinationsDistances();
      }
    );
  }

  render() {
    const { userInput, destinationsDistances } = this.state;
    return (
      <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <Form handleChange={this.handleChange} userInput={userInput} />

        <Table destinationsDistances={destinationsDistances} />
      </div>
    );
  }
}

export default HomeView;
