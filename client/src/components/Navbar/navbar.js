import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormControl,NavDropdown} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import userIcon from '../../images/user.png';

class NavbarClass extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Wanderer</Navbar.Brand>
    <Nav className="mr-auto">
        <NavDropdown title="Options" id="basic-nav-dropdown">
            <NavDropdown.Item href="/loginRegister">Login/Register</NavDropdown.Item>
            <NavDropdown.Item href="/hotels">Hotels</NavDropdown.Item>
            <NavDropdown.Item href="/flights">Flights</NavDropdown.Item>
            <NavDropdown.Item href="/feedback">Feedback</NavDropdown.Item>
        </NavDropdown>
    </Nav>
                    <Navbar.Brand href="/myprofile"><img src={userIcon}></img></Navbar.Brand>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
            </div>
        );
    }
}

export default NavbarClass;