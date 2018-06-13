import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown,MenuItem, Collapse, Toggle } from 'react-bootstrap';
import LoginModal from './LoginModal';

class Header extends Component {

  render() {

    return (
      <div>
            <Navbar className="container" inverse>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#brand">Mong</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav pullRight>
                    <NavItem>
                      <LoginModal/>
                    </NavItem>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
      </div>
    )
  }
}

export default Header;
