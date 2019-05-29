import React from "react";
import { connect } from "react-redux";
import { userActions } from "../Redux/actions/user.actions";
import { NavLink as RRNavLink, withRouter } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleLogout = event => {
    const { token } = this.props.user;
    event.preventDefault();
    this.props.logout(token);
    return this.props.history.push({ pathname: `/` });
  };
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavLink to="/" tag={RRNavLink}>
          Home
        </NavLink>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                to="/admin/cave"
                tag={RRNavLink}
                activeClassName="active"
              >
                Печери
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/admin/expedition"
                tag={RRNavLink}
                activeClassName="active"
              >
                Експедиції
              </NavLink>
            </NavItem>

            <NavItem>
              <Button color="primary" onClick={this.handleLogout}>
                Log Out
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
const mapStateToProps = store => {
  return {
    user: store.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: token => dispatch(userActions.logout(token))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavMenu)
);
