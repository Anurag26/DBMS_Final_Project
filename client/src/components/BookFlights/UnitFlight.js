import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap';
import axios from 'axios';
import firebase from '../../Firebase/fireBase';

class UnitFlight extends Component {
    //
    // state={
    //     _id:'',
    //     airline: '',
    //     call_sign: '',
    //     make_name: '',
    //     origin_code: '',
    //     origin_name: '',
    //     origin_location: '',
    //     destination_code: '',
    //     destination_name: '',
    //     destination_location: '',
    //     capacity: 0,
    //     dateTakeOff: '',
    //     price: 0,
    //     loginFirst:false
    // }


    //     handleBookFlight=()=>{
    //     let dataToSubmit={
    //         id:this.props._id
    //     }
    //     axios.post('http://localhost:3002/bookingsApp/users/addToCart/'+user.email,dataToSubmit).then(res=>{
    //
    //     }).catch(err=>{
    //         console.log(err)
    //     })
    // }


    handleBookFlight=()=>{

        let dataToSubmit={
            name: this.props.origin_location,
            price: this.props.price,
            id:this.props._id
        }

        firebase.auth().onAuthStateChanged(user=> {
            if(user) {
                axios.post('http://localhost:3002/bookingsApp/users/addToCart/' + user.email,
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