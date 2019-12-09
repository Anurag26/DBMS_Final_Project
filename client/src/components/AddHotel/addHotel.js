import React, {Component} from 'react';
import firebase from '../../Firebase/fireBase';
import {Card,Button} from 'react-bootstrap';
import axios from 'axios';

class AddHotel extends Component {

    state={
        name:'',
        description:'',
        hotel_location:'',
        price:0,
        room_number:0,
        room_type:''
    }

    handleChange=(e)=>{
        this.setState({
                          [e.target.name]:e.target.value
                      })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        let vendorId='';
        firebase.auth().onAuthStateChanged(user=> {
            axios.get('http://localhost:3002/bookingsApp/users/email/' + user.email)
                .then(res => {
                    vendorId = res.data[0]._id
                    let dataToSubmit = {
                        "name": this.state.name,
                        "description": this.state.description,
                        "hotel_location": this.state.hotel_location,
                        "vendor": vendorId,
                        "price": this.state.price,
                        "room_number": this.state.room_number,
                        "room_type": this.state.room_type
                    }
                    axios.post('http://localhost:3002/bookingsApp/hotels/create', dataToSubmit)
                        .then(res => {
                            console.log(res)
                            this.setState({
                                              name: '',
                                              description: '',
                                              hotel_location: '',
                                              price: 0,
                                              room_number: 0,
                                              room_type: ''
                                          })
                        }).catch(err => {
                        console.log(err)
                    })
                }).catch(err => {
                console.log(err);
            })
        })
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header as="h5">Add new Hotel</Card.Header>
                    <Card.Body>
                        <Card.Title>Enter name</Card.Title>
                        <input name="name"
                               type="text" id="name"
                               className="form-control"
                               placeholder="Enter name"
                               value={this.state.name}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>
                        <Card.Title>Enter description</Card.Title>
                        <input name="description"
                               type="text" id="des"
                               className="form-control"
                               placeholder="Enter Description"
                               value={this.state.description}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>
                        <Card.Title>Enter location</Card.Title>
                        <input name="hotel_location"
                               type="text" id="loc"
                               className="form-control"
                               placeholder="Enter Location"
                               value={this.state.hotel_location}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>
                        <Card.Title>Enter Price</Card.Title>
                        <input name="price"
                               type="text" id="price"
                               className="form-control"
                               placeholder="Enter Location"
                               value={this.state.price}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>
                        <Card.Title>Room Number</Card.Title>
                        <input name="room_number"
                               type="text" id="room_number"
                               className="form-control"
                               placeholder="Enter room number"
                               value={this.state.room_number}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>
                        <Card.Title>Room type</Card.Title>
                        <input name="room_type"
                               type="text" id="room_type"
                               className="form-control"
                               placeholder="Enter room type"
                               value={this.state.room_type}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>
                        <br />
                        <Button variant="primary" onClick={this.handleSubmit}>Add this Hotel</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default AddHotel;