import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap';
import img1 from '../../images/hotelCard.jpg';
import axios from 'axios';

class UnitCard extends Component {

    render() {
        return (
            <div>
                <Card style={{ width: '18rem', float:'left' }}>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>{this.props._source.name}</Card.Title>

                        <Card.Text>
                            {this.props._source.address_city}
                        </Card.Text>
                        <Card.Text>
                            {this.props._source.address_street}
                        </Card.Text>
                        <Button href={`/hotel_detail/${this.props._id}`} variant="primary" onClick={this.handleSeeHotel}>See Hotel</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default UnitCard;