import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap';
import img1 from '../../images/Hotels.jpg';
import axios from 'axios';

class UnitCard extends Component {

    state={
        hotel_id:''
    }

    componentWillMount() {
        axios.get('http://localhost:3002/bookingsApp/hotels/name/'+this.props._source.name).then(res=>{
            var result = {...res}
            var final= result.data[0]._id
            this.setState({
                hotel_id:final
                          })
        }).catch(err=>{
            console.log(err);
        })
    }

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
                        <Button href={`/hotel_detail/${this.state.hotel_id}`} variant="primary" onClick={this.handleSeeHotel}>See Hotel</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default UnitCard;