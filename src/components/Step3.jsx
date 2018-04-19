import React, { Fragment } from "react";
import OnPageCheck from "../OnPageCheck";
import Axios from "axios";
import ResultElement from "./ResultElement";

class Step3 extends React.Component {
  state = {
    loading: true,
    results: {}
  };

  async componentDidMount() {
    const website = this.props.webSiteData.url;
    // console.log(website);
    const proxiedWebsite = `http://cors-proxy.htmldriven.com/?url=${website}`;

    let response = "";

    try {
      response = await Axios.get(proxiedWebsite);
    } catch (error) {
      console.error(error);
    }

    const results = OnPageCheck(response.data.body);
    // console.log(`this is the result ${results}`);
    this.setState(state => {
      state.loading = false;
      state.results = results;

      return state;
      // console.log(state);
    });

    // console.log(this.state.results.meta.description);
    // console.log(this.state.results.title);
  }

  render() {
    return (
      <Fragment>
        {this.state.loading === false && (
          <div className="container">
            <h2>General</h2>
            <ResultElement
              title="Page Title"
              result={this.state.results.title}
            />
            <br />
            <br />
            <h2>Meta Elements</h2>
            <ResultElement
              title="Description"
              result={this.state.results.meta.description}
            />
          </div>
        )}
      </Fragment>
    );
  }
}

export default Step3;
