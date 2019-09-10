import React, { Component } from "react";
import Form from "../../sharedComponents/__elements/Form/Form";
import Table from "../../sharedComponents/__elements/Table/Table";
import fetchData from "../../services/fetchData";

import _ from "lodash";

class HomeView extends Component {
  state = {
    userInput: "",
    searchOrigin: "",
    breweries: [],
    destinations: [],
    searchResults: {},
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
          this.createDestinationsData();
        }
      }
    );
  };

  createDestinationsData = () => {
    const { breweries } = this.state;

    const destinationsData = breweries.map(({ address, city, zipcode }) => {
      return [address, city, zipcode, "|"].join();
    });

    this.setState({
      destinations: [...destinationsData]
    });
  };

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
        if (userInput.length !== 0) {
          this.search();
        }
      }
    );
  };

  search = _.debounce(() => {
    const { destinations, userInput, searchResults } = this.state,
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

  componentDidUpdate = (prevProps, prevState) => {
    const { searchResults } = this.state;
    const distanceRowArray = [];

    if (
      this.state.searchResults !== prevState.searchResults &&
      this.state.searchResults.status === "OK"
    ) {
      /*
       * Fill distanceRowArray with
       */
      searchResults.rows.map(subarray => {
        for (let row of subarray.elements) {
          if (row.status === "OK") {
            distanceRowArray.push(row);
          }
        }
        return null;
      });

      this.displayResults(distanceRowArray);
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

        <Table
          destinationsDistances={distanceRowsToDisplay}
          userInput={userInput}
        />
      </div>
    );
  }
}

export default HomeView;
