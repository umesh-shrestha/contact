import React, { Component } from "react";
import { Form, Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.contact.name,
            phone: this.props.contact.phone,
            email: this.props.contact.email,
            company: this.props.contact.company,
            address: this.props.contact.address,
            isShowing: false,
            isEditing: false,
            error: {},
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleShow = () => {
        this.setState({ isShowing: !this.state.isShowing });
    };

    handleDelete = () => {
        this.props.delete(this.props.contact.id);
    };

    handleEdit = () => {
        this.setState({ isEditing: true });
    };

    handleSubmit = (e) => {
        const { name, phone, email, company, address } = this.state;
        e.preventDefault();
        if (name === "") {
            return this.setState({ error: { name: "Enter Your Name." } });
        } else if (phone === "") {
            return this.setState({ error: { phone: "Enter Your Phone Number." } });
        } else if (email === "") {
            return this.setState({ error: { email: "Enter Your E-mail Adddress." } });
        } else if (company === "") {
            return this.setState({ error: { company: "Enter Your Company Name." } });
        } else if (address === "") {
            return this.setState({ error: { address: "Enter Your Address" } });
        }
        const updataContact = { name, phone, email, company, address, id: this.props.contact.id };
        this.props.update(updataContact);
        this.setState({ error: "", isEditing: false });
    };

    render() {
        const arrow = this.state.isShowing ? "fas fa-chevron-up mr-3" : "fas fa-chevron-down mr-3";
        const { error } = this.state;
        if (this.state.isEditing) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="w-50 mt-3 mx-auto">
                                <h3>Editing Contact Form</h3>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="name">
                                        <Form.Label>Name:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={this.state.name}
                                            placeholder="Enter Your Name"
                                            onChange={this.handleChange}
                                        />
                                        {error.name}
                                    </Form.Group>
                                    <Form.Group controlId="phone">
                                        <Form.Label>Phone Number:</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="phone"
                                            value={this.state.phone}
                                            placeholder="Enter Yout Phone Number"
                                            onChange={this.handleChange}
                                        />
                                        {error.phone}
                                    </Form.Group>
                                    <Form.Group controlId="email">
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            placeholder="Enter email"
                                            onChange={this.handleChange}
                                        />
                                        {error.email}
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="companyname">
                                        <Form.Label>Company Name:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="company"
                                            value={this.state.company}
                                            placeholder="Enter Your Company Name"
                                            onChange={this.handleChange}
                                        />
                                        {error.company}
                                    </Form.Group>
                                    <Form.Group controlId="address">
                                        <Form.Label>Address:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            value={this.state.address}
                                            placeholder="Enter Your Address"
                                            onChange={this.handleChange}
                                        />
                                        {error.address}
                                    </Form.Group>

                                    <Button variant="outline-secondary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <Card className="w-50 mt-5 mx-auto" style={{ borderRadius: "0" }}>
                                <Card.Header style={{ borderBottom: "none" }}>
                                    <h3 style={{ margin: "0" }}>
                                        {this.props.contact.name}
                                        <span style={{ float: "right", fontSize: "17px", marginTop: "7px" }}>
                                            <i className={arrow} onClick={this.handleShow}></i>
                                            <i className="far fa-edit mr-3" onClick={this.handleEdit}></i>
                                            <i className="far fa-trash-alt" onClick={this.handleDelete}></i>
                                        </span>
                                    </h3>
                                </Card.Header>
                                {this.state.isShowing ? (
                                    <Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem style={{ padding: "10px 0" }}>
                                                <i className="fas fa-phone-alt mr-2"></i> {this.props.contact.phone}
                                            </ListGroupItem>
                                            <ListGroupItem style={{ padding: "10px 0" }}>
                                                <i className="far fa-envelope-open mr-2"></i>
                                                {this.props.contact.email}
                                            </ListGroupItem>
                                            <ListGroupItem style={{ padding: "10px 0" }}>
                                                <i className="far fa-building mr-2"></i>
                                                {this.props.contact.company}
                                            </ListGroupItem>
                                            <ListGroupItem style={{ padding: "10px 0" }}>
                                                <i className="fas fa-location-arrow mr-2"></i>
                                                {this.props.contact.address}
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card.Body>
                                ) : null}
                            </Card>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Contact;
