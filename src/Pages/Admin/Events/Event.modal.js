import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';

export default class Contactus extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
 
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {

    return (
      <div>

        {/* Modal trigger */}
        <Button className="btn btn-info my-4" onClick={this.toggle} href="#">
          Message
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Send your Message</ModalHeader>
          <ModalBody>
            <div className="container">
              
            </div>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}