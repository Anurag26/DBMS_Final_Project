import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap';
import img1 from '../../images/hotelCard.jpg';
import axios from 'axios';

class UnitCard extends Component {

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button href={`/hotel_detail/${this.props._id}`} variant="primary" onClick={this.handleSeeHotel}>See Hotel</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default UnitCard;