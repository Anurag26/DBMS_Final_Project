import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap';
import UnitFlight from './UnitFlight';

class FlightBlock extends Component {
    render() {
        return (
            <div>
                <Card className="text-center">
                    {this.props.flights.map(flight=>(
                     <UnitFlight
                        key={flight._id}
                        {...flight}
                    />
                    ))}
                </Card>

            </div>
        );
    }
}

export default FlightBlock;