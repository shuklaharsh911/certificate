import React, { Component } from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

class SignUpModal extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header>
                <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form id="myform" onSubmit={(event) => {
                   event.preventDefault()
                   console.log("fuck")
                   this.props.sendAccountdata()
                 }}>

                    
                <Form.Group controlId="formBasicName">
                    <Form.Label>Organisation Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <button type="submit" className="btn btn-primary">Send</button>
                </Form>

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Close
                </Button>
                <Button form="myform" key="submit" htmltype="submit" variant="primary" onClick={this.props.handleClose}>
                    Submit
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

class Sample extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}


export default SignUpModal;
