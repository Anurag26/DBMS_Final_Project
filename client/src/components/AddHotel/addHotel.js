import React, {Component} from 'react';
import firebase from '../../Firebase/fireBase';
import {Card,Button} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

class AddHotel extends Component {

    state={
        name:'',
        total_rooms:0,
        totalCapacity:0,
        phone:'',
        country:'',
        show:false,
        room_type:0,
        manager:'',
        price:0,
        address_street:'',
        address_city:'',
        managerId:''
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
                        "total_rooms": this.state.total_rooms,
                        "totalCapacity": this.state.totalCapacity,
                        "phone": this.state.phone,
                        "country": this.state.country,
                        "room_type": this.state.room_type,
                        "manager": vendorId,
                        "price": this.state.price,
                        "address_street": this.state.address_street,
                        "address_city": this.state.address_city,
                        "managerId": vendorId
                    }
                    axios.post('http://localhost:3002/bookingsApp/hotels/create', dataToSubmit)
                        .then(res => {
                            console.log(res)
                            this.setState({
                                              name:'',
                                              total_rooms:0,
                                              totalCapacity:0,
                                              phone:'',
                                              country:'',
                                              show:true,
                                              room_type:0,
                                              price:0,
                                              address_street:'',
                                              address_city:''
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
            this.state.show?
            <div> <>
                <Alert  variant="success">
                    <Alert.Heading>Hotel has been created successfullyk.</Alert.Heading>
                    <p>
                        Kindly navigate to profile page to view details...
                    </p>
                    <hr />
                </Alert>
            </> </div>

                 :
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

                        <Card.Title>Enter available number of rooms</Card.Title>
                        <input name="total_rooms"
                               type="number" id="total_rooms"
                               className="form-control"
                               placeholder="Enter number of rooms"
                               value={this.state.total_rooms}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>

                        <Card.Title>Enter number of rooms</Card.Title>
                        <input name="totalCapacity"
                               type="number" id="totalCapacity"
                               className="form-control"
                               placeholder="Enter number of rooms available"
                               value={this.state.totalCapacity}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>

                        <Card.Title>Enter Contact details</Card.Title>
                        <input name="phone"
                               type="text" id="phone"
                               className="form-control"
                               placeholder="Enter phone number of hotel"
                               value={this.state.phone}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>

                        <Card.Title>Enter country</Card.Title>
                        <input name="country"
                               type="text" id="country"
                               className="form-control"
                               placeholder="Enter Country"
                               value={this.state.country}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>


                        <Card.Title>Enter room type</Card.Title>
                        <input name="room_type"
                               type="text" id="room_type"
                               className="form-control"
                               placeholder="Enter room type ex- suite"
                               value={this.state.room_type}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>


                        <Card.Title>Enter price details</Card.Title>
                        <input name="price"
                               type="number" id="price"
                               className="form-control"
                               placeholder="Enter price"
                               value={this.state.price}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>

                        <Card.Title>Enter Street address</Card.Title>
                        <input name="address_street"
                               type="text" id="address_street"
                               className="form-control"
                               placeholder="Enter street address ex - 233 park drive"
                               value={this.state.address_street}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>

                        <Card.Title>Enter City</Card.Title>
                        <input name="address_city"
                               type="text" id="address_city"
                               className="form-control"
                               placeholder="Enter city"
                               value={this.state.address_city}
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