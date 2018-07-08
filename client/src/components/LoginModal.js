import React , { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';


class LoginModal extends Component {
  constructor(props, context) {
    super(props,context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {show:false};
  }

  handleShow() {
    this.setState({show:true})
  };

  handleClose(){
    this.setState({show:false})
  };

  renderContent() {
    switch (this.props.auth) {
      case null: // browser still processing, does not know yet if user is logged in
        return;
      case false:
        return (
          <li key="1" onClick={this.handleShow}>
            <Navbar.Text>
                Login
            </Navbar.Text>
          </li>
        );
      default:
        return [
            <li key="2">
            <Navbar.Text>
                <Navbar.Link href="/api/logout">Logout</Navbar.Link>
            </Navbar.Text>

            </li>
      ];
    }
  }


  render() {
    //console.log(this.props);

    return (
      <div>
        <div>
          <ul>{this.renderContent()}</ul>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <ul>
              <li>
                  <a href="/auth/google">Login with Google</a>
              </li>
              <li>
                  <a href="/auth/facebook">Login with Facebook</a>
              </li>
          </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(LoginModal);
