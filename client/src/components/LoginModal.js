import React , { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

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

  render() {
    return (
      <div >
        <div onClick={this.handleShow}>
          Login
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Login with Google
            </p>
            <p>
              Login with Facebook
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default LoginModal;
