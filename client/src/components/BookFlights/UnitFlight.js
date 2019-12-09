import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap';
import axios from 'axios';

class UnitFlight extends Component {

    handleBookFlight=()=>{
        let dataToSubmit={
            id:this.props._id
        }
        axios.post('',dataToSubmit).then(res=>{

        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <Card.Header>{this.props._source.airline}</Card.Header>
                <Card.Body>
                    <Card.Title>Origin Location: {this.props._source.origin_location}</Card.Title>
                    <Card.Title>Destination Location: {this.props._source.destination_location}</Card.Title>
                    <Card.Text>
                        Price: {this.props._source.price}
                    </Card.Text>
                    <Button variant="primary" onClick={this.handleBookFlight}>Book this flight</Button>
                </Card.Body>
            </div>
        );
    }
}

export default UnitFlight;