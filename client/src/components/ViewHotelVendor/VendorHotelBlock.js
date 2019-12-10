import React, {Component} from 'react';
import UnitVendorHotel from './UnitVendorHotel';
import {Card} from 'react-bootstrap';

class VendorHotelBlock extends Component {
    render() {
        return (
            <div>
                {
                    this.props.hotels.map(hotel=>(
                        <div>
                            <Card style={{text:'center'}}>
                                <Card.Body>
                            <UnitVendorHotel
                                key={hotel._id}
                                {...hotel}
                            />
                                </Card.Body>

                            </Card>
                        </div>

                    )
                    )
                }
            </div>
        );
    }
}

export default VendorHotelBlock;