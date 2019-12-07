import React, {Component} from 'react';
import firebase from '../../Firebase/fireBase';
import {Card,Button} from 'react-bootstrap';

class AddHotel extends Component {

    state={
        name:'',
        description:'',
        hotel_location:'',
        vendor:'',
        price:0,
        room_number:0,
        room_type:''
    }

    handleChange=(e)=>{
        this.setState({
                          [e.target.name]:e.target.value
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
                        <Card.Title>Vendor username</Card.Title>
                        <input name="vendor"
                               type="text" id="vendor"
                               className="form-control"
                               placeholder="Enter vendor username"
                               value={this.state.vendor}
                               onChange={e => this.handleChange(e)}
                               required autoFocus/>
                         <br/>
                        <Button variant="primary">Add this Hotel</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default AddHotel;