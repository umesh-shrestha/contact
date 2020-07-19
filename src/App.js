import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: "Ram",
                    phone: 123456789,
                    email: "ram@example.com",
                    company: "Google Inc.",
                    address: "Kathmandu, Nepal",
                },
                {
                    id: 2,
                    name: "Shyam",
                    phone: 123456789,
                    email: "shyam@example.com",
                    company: "Apple Inc.",
                    address: "Birgunj, Nepal",
                },
                {
                    id: 3,
                    name: "Sital",
                    phone: 123456789,
                    email: "sital@example.com",
                    company: "Microsoft Inc.",
                    address: "Pokhara, Nepal",
                },
                {
                    id: 4,
                    name: "Hari",
                    phone: 123456789,
                    email: "hari@example.com",
                    company: "Huawei Inc.",
                    address: "Lalitpur, Nepal",
                },
                {
                    id: 5,
                    name: "Sabhona",
                    phone: 123456789,
                    email: "sabhona@example.com",
                    company: "Xiaomi Inc.",
                    address: "Bhaktapur, Nepal",
                },
            ],
        };
    }

    handleDelete = (id) => {
        const rows = this.state.contacts.filter((contact) => {
            return contact.id !== id;
        });
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                this.setState({ contacts: rows });
                toast.success("Your data has been successfully deleted.");
                Swal.fire("Deleted!", "Your data has been successfully deleted.", "success");
            }
        });
    };

    handleInsert = (row) => {
        // const id = this.state.contacts.length + 1;
        const rows = { id: uuidv4(), ...row };
        this.setState({ contacts: [rows, ...this.state.contacts] });
        toast.success("Data has been successfully inserted.");
    };

    handleUpdate = (row) => {
        const updateContact = this.state.contacts.map((contact) => {
            if (contact.id === row.id) {
                return row;
            }
            return contact;
        });
        this.setState({ contacts: updateContact });
        toast.success("Data has been successfully updated.");
    };

    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Form insert={this.handleInsert} />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/product" component={Product} />
                    <Route path="/services" component={Services} />
                    {/* <Route path="/contact" component={Contact} /> */}
                    <Route
                        path="/contact"
                        render={() =>
                            this.state.contacts.map((contacts) => (
                                <Contact
                                    contact={contacts}
                                    key={contacts.id}
                                    delete={this.handleDelete}
                                    update={this.handleUpdate}
                                />
                            ))
                        }
                    />
                </Switch>
                <ToastContainer />
            </BrowserRouter>
        );
    }
}

export default App;
