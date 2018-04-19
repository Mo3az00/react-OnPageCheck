import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class Step2 extends React.Component {
  fields = {
    url: React.createRef(),
    keywords: React.createRef()
  };

  handleUpdate = e => {
    e.preventDefault();
    const keywords = this.fields.keywords.current.value
      .split(",")
      .map(keyword => keyword.trim());

    const webSiteData = {
      url: this.fields.url.current.value.trim(),
      keywords
    };
    console.log(keywords);
    this.props.updateWebSiteData(webSiteData);
    // e.currentTarget.reset();
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <h3> Website Data </h3>
          <form onChange={this.handleUpdate}>
            <div className="form-group col-4">
              <input
                type="text"
                className="form-control"
                placeholder="URL"
                ref={this.fields.url}
                defaultValue={this.props.webSiteData.url || ""}
              />
            </div>

            <div className="form-group col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Keywords, comma separated"
                ref={this.fields.keywords}
                defaultValue={this.props.webSiteData.keywords || ""}
              />
            </div>

            <Link to="/" className="btn btn-secondary">
              Previous Step
            </Link>

            <Link to="/3" className="btn btn-primary">
              Next Step
            </Link>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Step2;
