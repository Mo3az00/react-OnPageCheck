import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router";

class Step1 extends React.Component {
  fields = {
    firstName: React.createRef(),
    lastName: React.createRef(),
    company: React.createRef(),
    email: React.createRef()
  };

  handleChange = e => {
    e.preventDefault();
    const userData = {
      firstName: this.fields.firstName.current.value.trim(),
      lastName: this.fields.lastName.current.value.trim(),
      company: this.fields.company.current.value.trim(),
      email: this.fields.email.current.value.trim()
    };

    // console.log(userData);
    this.props.updateUserData(userData);
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <h3>Personal Data</h3>
          <form onChange={this.handleChange}>
            <div className="form-group col-4">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                ref={this.fields.firstName}
                defaultValue={this.props.userData.firstName || ""}
              />
            </div>

            <div className="form-group col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                ref={this.fields.lastName}
                defaultValue={this.props.userData.lastName || ""}
              />
            </div>

            <div className="form-group col-4">
              <input
                type="text"
                className="form-control "
                placeholder="Company"
                ref={this.fields.company}
                defaultValue={this.props.userData.company || ""}
              />
            </div>

            <div className="form-group col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                ref={this.fields.email}
                defaultValue={this.props.userData.email || ""}
              />
            </div>

            <Link to="/2" className="btn btn-primary">
              Next Step >>
            </Link>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Step1;
