import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormControl,NavDropdown} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import firebase from '../../Firebase/fireBase';
import axios from 'axios';
import userIcon from '../../images/user1.png';

class NavbarClass extends Component {

    state={
        role:0
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                axios.get('http://localhost:3002/bookingsApp/users/email/'+user.email).then(res=> {
                    this.setState({
                                      role : res.data[0].role
                                  })
                }).catch(err=>{

                })
            }})
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Wanderer</Navbar.Brand>
    <Nav className="mr-auto">
        <NavDropdown title="Options" id="basic-nav-dropdown">
            <NavDropdown.Item href="/loginRegister">Login/Register</NavDropdown.Item>
            {
                this.state.role===0?
                <div>
                <NavDropdown.Item href="/hotels">Hotels</NavDropdown.Item>
                <NavDropdown.Item href="/flights">Flights</NavDropdown.Item>
                    <NavDropdown.Item href="/mycart">My Cart</NavDropdown.Item>
                </div>
                :
                null
            }
            {
                this.state.role===2?
                <NavDropdown.Item href="/hotelAdd">Add Hotel</NavDropdown.Item>
                :
                null
            }
            {
                this.state.role===3?
                <NavDropdown.Item href="/usersCrud">Manage Users</NavDropdown.Item> :
                null
            }
            <NavDropdown.Item href="/feedback">Feedback</NavDropdown.Item>
        </NavDropdown>
    </Nav>
                    <Navbar.Brand href="/myprofile"><img src={userIcon}></img></Navbar.Brand>
  </Navbar>
            </div>
        );
    }
}

export default NavbarClass;