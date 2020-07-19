import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

class PageHeader extends Component {
  render() {
    return (
        <div>
          <Jumbotron className="text-center">
            <h1>{this.props.title}</h1>
            <h4>{this.props.subTitle}</h4>
          </Jumbotron>
        </div>
    );
  }
}

export default PageHeader;