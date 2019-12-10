import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import UnitBooking from './UnitBooking';

class BookingBlock extends Component {
    render() {
        return (
            <div>
                <Card className="text-center">
                    <Card.Header>Total Bookings on your website</Card.Header>
                    {this.props.bookings.map(booking=>(
                        <UnitBooking
                            productId={booking.product_id}
                            userId={booking.user_id}
                            vendorId={booking.vendor_id}
                        />
                        ))}
                    <Card.Footer className="text-muted">Number of Bookings: {this.props.bookings.length}</Card.Footer>
                </Card>
            </div>
        );
    }
}

export default BookingBlock;