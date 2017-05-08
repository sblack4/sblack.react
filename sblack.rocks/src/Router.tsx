import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group";
import "./index.css";
import { NavBar } from "./NavBar";
import { About, Contact, Home, Portfolio, Resume } from "./pages";

class TransitionGroupWrapper extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <CSSTransitionGroup
        component="div"
        className="transitionGroup"
        transitionName="fade"
        transitionAppear={true}
        transitionEnter={true}
        transitionLeave={false}
        transitionAppearTimeout={300}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {React.cloneElement(this.props.children, { key: location.pathname })}
      </CSSTransitionGroup>
    );
  }
}

class RockinRouter extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const that = this;
    return (
      <BrowserRouter basename={that.props.basePath}>
        <div>
          <NavBar PagesList={that.props.pages} />
          <a className="forkMe" href="https://github.com/sblack4/sblack.react">
            <img className="forkMe" src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png" alt="Fork me on Github" />
          </a>
            <main className="app-body">
              <TransitionGroupWrapper>
                <Switch>
                  <Route key={"/Home"} path="/Home"      component={Home} />
                  <Route key={"/About"} path="/About"     component={About} />
                  <Route key={"/Contact"} path="/Contact"   component={Contact} />
                  <Route key={"/Portfolio"} path="/Portfolio" component={Portfolio} />
                  <Route key={"/Resume"} path="/Resume"    component={Resume} />
                  <Redirect from="*" to={"/Home"}>
                    <Route key="/Home" path="/Home" component={Home} />
                  </ Redirect>
                </Switch>
              </TransitionGroupWrapper>
            </main>
        </div>
      </BrowserRouter>
    );
  }
}

export { RockinRouter };
