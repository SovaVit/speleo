import React from "react";
import { connect } from 'react-redux';
import {userActions} from '../redux/actions/user.actions';
import {withRouter} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

 class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle=() =>{
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  handleLogout = event => {
    const { token } = this.props.user;
    event.preventDefault();
    this.props.logout(token);
    return this.props.history.push({ pathname: `/` });
  };
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/admin/cave">Печери</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/expedition">Експедиції</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Фотогалерея
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="">Печери</DropdownItem>
                  <DropdownItem href="">Експедиції</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button color="primary" onClick ={this.handleLogout}>Log Out</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
};
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavMenu));