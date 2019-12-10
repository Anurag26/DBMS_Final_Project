import React, {Component} from 'react';
import UnitVendorFlight from './UnitVendorFlight';
import {Card} from 'react-bootstrap';

class VendorFlightBlock extends Component {
    render() {
        return (
            <div>
                <Card style={{text:'center'}}>
                    <Card.Body>
                        {
                            this.props.flights.map(flight=>(
                                                      <UnitVendorFlight
                                                          key={flight._id}
                                                          {...flight}
                                                      />
                                                  )
                            )
                        }
                    </Card.Body>
                    <Card.Footer className="text-muted">Number of Flights: {this.props.flights.length}</Card.Footer>
                </Card>
            </div>
        );
    }
}

export default VendorFlightBlock;