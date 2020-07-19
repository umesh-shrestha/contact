import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navbars extends Component {
    render() {
        return (
            <header style={{ backgroundColor: "#f8f9fa" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <Navbar bg="light" expand="lg">
                                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Link to="/" className="nav-link">
                                            Home
                                        </Link>
                                        <Link to="/about" className="nav-link">
                                            About
                                        </Link>
                                        <Link to="/product" className="nav-link">
                                            Product
                                        </Link>
                                        <Link to="/services" className="nav-link">
                                            Services
                                        </Link>
                                        <Link to="/contact" className="nav-link">
                                            Contact
                                        </Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbars;
