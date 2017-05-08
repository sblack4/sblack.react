import * as React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
// import { CSSTransitionGroup } from "react-transition-group";
import "./NavBar.css";

interface NavBarProps {
  PagesList: string[];
}

class NavBar extends React.Component<NavBarProps, void> {
  constructor(props: NavBarProps) {
    super(props);
  }
  renderPageTabs(page: string, i: number) {
    return (
      <LinkContainer to={`/${page}`} key={page + i.toString()}>
        <NavItem>{page}</NavItem>
      </LinkContainer>
    );
  }
  render() {
    const that = this;
    return (
        <Navbar bsStyle="default" collapseOnSelect={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/Home" id="nav/Home">sblack.rocks</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {/* creates nav-items */}
            <Nav>
              {this.props.PagesList.map((page: string, i: number) => that.renderPageTabs(page, i))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export { NavBar };
