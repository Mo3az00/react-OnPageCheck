import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import NotFound from "./NotFound";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

class App extends React.Component {
  state = {
    userData: {
      firstName: "Mouaz",
      lastName: "Meda",
      email: "mouaz@meda.com",
      company: "DCI"
    },
    webSite: {
      url: "https://kostasdegaitas.de/",
      keywords: ["developer", "designer"]
    }
  };

  updateUserData = data => {
    this.setState(state => {
      state.userData = data;
      return state;
    });
  };

  updateWebSiteData = data => {
    this.setState(state => {
      state.webSite = data;
      return state;
    });
  };

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Nav />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Step1
                    userData={this.state.userData}
                    updateUserData={this.updateUserData}
                  />
                )}
              />
              <Route
                exact
                path="/2"
                render={() => (
                  <Step2
                    webSiteData={this.state.webSite}
                    updateWebSiteData={this.updateWebSiteData}
                  />
                )}
              />
              <Route
                exact
                path="/3"
                render={() => <Step3 webSiteData={this.state.webSite} />}
              />
              <Route component={NotFound} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
