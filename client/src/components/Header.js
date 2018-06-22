import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown,MenuItem, Collapse, Toggle } from 'react-bootstrap';
import LoginModal from './LoginModal';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {

  render() {
    return (
      <div>
            <Navbar className="container" inverse>
                <Navbar.Header>
                  <Navbar.Brand>
                    <LinkContainer to={this.props.auth ? '/dashboard' : '/'}>
                        <div>Mong</div>
                    </LinkContainer>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav pullRight>
                      <LoginModal/>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Header);
