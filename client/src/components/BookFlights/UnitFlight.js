import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap';
import axios from 'axios';
import firebase from '../../Firebase/fireBase';

class UnitFlight extends Component {

state={
    flight_id:'',
    manager:''
};

    sendBooking = () =>{
        let dataToSubmit={
            dateTakeOff: this.props._source.dateTakeOff,
            origin_location: this.props._source.origin_location,
            destination_location: this.props._source.destination_location,
            price: this.props._source.price,
            id:this.state.flight_id,
            manager:this.state.manager
        };
    console.log(dataToSubmit)
        firebase.auth().onAuthStateChanged(user=> {
            if(user) {
                axios.post('http://localhost:3002/bookingsApp/users/addToCartFlight/' + user.email,
                    dataToSubmit).then(res => {
                    console.log('success')
                }).catch(err => {
                    console.log('cannot add to cart')
                })
            }
            else{
                alert("You need to Login to Book this flight!")
                this.setState({
                    loginFirst:true
                })
            }
        })
    };

    handleBookFlight=()=>{
        axios.get('http://localhost:3002/bookingsApp/flights/flight_details/'+this.props._source.call_sign+'/'+this.props._source.make_name+'/'+this.props._source.price)
            .then(res=>{
                console.log(res)
                this.setState({
                    flight_id:res.data[0]._id,
                    manager:res.data[0].managerId
                })}).then(this.sendBooking);
    };



    render() {
        return (
            <div>
                {/*{console.log(this.props)}*/}
                <Card.Header>{this.props._source.airline}</Card.Header>
                <Card.Body>
                    <Card.Title>Origin Location: {this.props._source.origin_location}</Card.Title>
                    <Card.Title>Destination Location: {this.props._source.destination_location}</Card.Title>
                    <Card.Text>Date: {this.props._source.dateTakeOff}</Card.Text>
                    <Card.Text>Price: {this.props._source.price}</Card.Text>
                    <Button variant="primary" onClick={this.handleBookFlight}>Book this flight</Button>
                </Card.Body>
            </div>
        );
    }
}

export default UnitFlight;