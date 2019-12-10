import React, {Component} from 'react';
import {Card} from 'react-bootstrap';

class UnitBooking extends Component {
    render() {
        return (
            <div>
                <Card.Body>
                    <Card.Text>Product Id: {this.props.productId}</Card.Text>
                    <Card.Text>User Id: {this.props.userId}</Card.Text>
                    <Card.Text>Vendor Id: {this.props.vendorId}</Card.Text>
                </Card.Body>
            </div>
        );
    }
}

export default UnitBooking;