import React, {Component} from 'react';
import UnitVendorHotel from './UnitVendorHotel';
import {Card} from 'react-bootstrap';

class VendorHotelBlock extends Component {
    render() {
        return (
            <div>
                <Card style={{text:'center'}}>
                    <Card.Body>
                {
                    this.props.hotels.map(hotel=>(
                            <UnitVendorHotel
                                key={hotel._id}
                                {...hotel}
                            />
                    )
                    )
                }
                    </Card.Body>
                    <Card.Footer className="text-muted">Number of Hotels: {this.props.hotels.length}</Card.Footer>
                </Card>
            </div>
        );
    }
}

export default VendorHotelBlock;