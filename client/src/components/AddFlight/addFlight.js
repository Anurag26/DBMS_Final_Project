import React, {Component} from 'react';
import firebase from '../../Firebase/fireBase';
import {Card,Button} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

class AddFlight extends Component {

    state={
        airline:'',
        call_sign:'',
        make_name:'',
        origin_code:'',
        origin_name:'',
        show:false,
        manager:'',
        origin_location:'',
        destination_code:'',
        destination_name:'',
        destination_location:'',
        dateTakeOff:'',
        price:0,
        capacity:0,
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
                        "airline": this.state.airline,
                        "call_sign": this.state.call_sign,
                        "make_name": this.state.make_name,
                        "origin_code": this.state.origin_code,
                        "origin_name": this.state.origin_name,
                        "origin_location": this.state.origin_location,
                        "manager": vendorId,
                        "destination_code": this.state.destination_code,
                        "destination_name": this.state.destination_name,
                        "destination_location": this.state.destination_location,
                        "dateTakeOff": this.state.dateTakeOff,
                        "price": this.state.price,
                        "capacity": this.state.capacity,
                        "managerId": vendorId
                    }
                    axios.post('http://localhost:3002/bookingsApp/flights/create', dataToSubmit)
                        .then(res => {
                            console.log(res)
                            this.setState({
                                              airline:'',
                                              call_sign:'',
                                              make_name:'',
                                              origin_code:'',
                                              origin_name:'',
                                              show:true,
                                              manager:'',
                                              origin_location:'',
                                              destination_code:'',
                                              destination_name:'',
                                              destination_location:'',
                                              dateTakeOff:'',
                                              price:0,
                                              capacity:0,
                                              managerId:''
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
                    <Alert.Heading>Flight has been created successfully.</Alert.Heading>
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
                        <Card.Title>Enter Flight Name</Card.Title>
                        <input name="airline"
                               type="text" id="airline"
                               className="form-control"
                               placeholder="ex- Jet Airways"
                               value={this.state.airline}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>

                        <Card.Title>Enter Call Sign</Card.Title>
                        <input name="call_sign"
                               type="text" id="call_sign"
                               className="form-control"
                               placeholder="ex-2211"
                               value={this.state.call_sign}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>

                        <Card.Title>Enter make of flight</Card.Title>
                        <input name="make_name"
                               type="text" id="make_name"
                               className="form-control"
                               placeholder="ex- A350"
                               value={this.state.make_name}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>

                        <Card.Title>Enter Origin Code</Card.Title>
                        <input name="origin_code"
                               type="text" id="origin_code"
                               className="form-control"
                               placeholder="ex- BOS"
                               value={this.state.origin_code}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>

                        <Card.Title>Enter origin airport name</Card.Title>
                        <input name="origin_name"
                               type="text" id="origin_name"
                               className="form-control"
                               placeholder="ex- Logan International Airport"
                               value={this.state.origin_name}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>


                        <Card.Title>Enter origin location</Card.Title>
                        <input name="origin_location"
                               type="text" id="origin_location"
                               className="form-control"
                               placeholder="ex- Boston, Massachusetts, United States"
                               value={this.state.origin_location}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>


                        <Card.Title>Enter Destination Code</Card.Title>
                        <input name="destination_code"
                               type="text" id="destination_code"
                               className="form-control"
                               placeholder="ex- MCO"
                               value={this.state.destination_code}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>

                        <Card.Title>Enter destination airport name</Card.Title>
                        <input name="destination_name"
                               type="text" id="destination_name"
                               className="form-control"
                               placeholder="ex- Orlando International Airport"
                               value={this.state.destination_name}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>

                        <Card.Title>Enter destination airport city</Card.Title>
                        <input name="destination_location"
                               type="text" id="destination_location"
                               className="form-control"
                               placeholder="ex-Orlando, Florida, United States"
                               value={this.state.destination_location}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>


                        <Card.Title>Enter date of take off</Card.Title>
                        <input name="dateTakeOff"
                               type="date" id="dateTakeOff"
                               className="form-control"
                               placeholder="ex- 2019-12-14"
                               value={this.state.dateTakeOff}
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

                        <Card.Title>Enter capacity</Card.Title>
                        <input name="capacity"
                               type="text" id="capacity"
                               className="form-control"
                               placeholder="flight capacity"
                               value={this.state.capacity}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>
                        <br />
                        <Button variant="primary" onClick={this.handleSubmit}>Add This Flight</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default AddFlight;