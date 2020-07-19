import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            company: "",
            address: "",
            error: {},
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
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
        this.props.insert(this.state);
        this.setState({ name: "", phone: "", email: "", company: "", address: "", error: "" });
    };
    render() {
        const { error } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="w-50 mt-3 mx-auto">
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
    }
}

export default Forms;
