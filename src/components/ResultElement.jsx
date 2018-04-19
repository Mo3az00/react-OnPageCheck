import React, { Fragment } from "react";

class Result extends React.Component {
  render() {
    const result = this.props.result;
    return (
      <Fragment>
        <h4>{this.props.title}</h4>
        {result.message}
      </Fragment>
    );
  }
}

export default Result;
