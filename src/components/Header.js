import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="header-container">
        <div className="container">
          <Navbar className="bg-white" light expand="md">
          <div className="container nav-container">
            <NavbarBrand href="/">Hindustan Daily</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/news">News</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/entertainment">Entertainment</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            </div>
          </Navbar>
        </div>
      </div>
    );
  }
}
