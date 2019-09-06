import React, { Component } from "react";
import Form from "../../sharedComponents/__elements/Form/Form";

class HomeView extends Component {
  state = {};
  render() {
    return (
      <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <Form />
      </div>
    );
  }
}

export default HomeView;
