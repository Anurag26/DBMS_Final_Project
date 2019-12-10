import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import UnitBooking from './UnitBooking';

class BookingBlock extends Component {
    render() {
        return (
            <div>
                <Card className="text-center">
                    <Card.Header>Your Bookings</Card.Header>
                    {this.props.bookings.map(booking=>(
                        <UnitBooking
                            productId={booking.product_id}
                            userId={booking.user_id}
                            vendorId={booking.vendor_id}
                        />
                        ))}
                </Card>
            </div>
        );
    }
}

export default BookingBlock;