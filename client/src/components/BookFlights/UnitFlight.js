import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap';
import axios from 'axios';
import firebase from '../../Firebase/fireBase';

class UnitFlight extends Component {



    handleBookFlight=()=>{
        console.log({...this.props._source})
        let dataToSubmit={
            dateTakeOff: this.props._source.dateTakeOff,
            origin_location: this.props._source.origin_location,
            price: this.props._source.price,
            destination_location: this.props._source.destination_location,
            price: this.props._source.price,
            id:this.props._source._id
        }

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
                this.setState({
                                  loginFirst:true
                              })
            }
        })
    }



    render() {
        return (
            <div>
                {console.log(this.props._source)}
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