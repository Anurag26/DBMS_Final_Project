import React, {Component} from 'react';
import axios from 'axios';
import {Card,Button} from 'react-bootstrap';

import img1 from '../../images/hotelCard.jpg';

class HotelDescription extends Component {

    state={
        name:'',
        description:'',
        hotel_location:'',
        price:0,
        room_number:0,
        vendor:'',
        room_type:''
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        axios.get('http://localhost:3002/bookingsApp/hotels/id/'+id).then(res=>{
            axios.get('http://localhost:3002/bookingsApp/users/'+res.data.vendor).then(vendor=>{
                this.setState({
                                  name:res.data.name,
                                  description:res.data.description,
                                  hotel_location:res.data.hotel_location,
                                  price:res.data.price,
                                  room_number:res.data.room_number,
                                  room_type:res.data.room_type,
                                  vendor:vendor.data.email
                              })
            }).catch(err=>{
                console.log(err)
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.state.name}</Card.Header>
                    <Card.Body>
                        <Card.Img variant="top" style={{width:'18rem'}} src={img1} />
                        <Card.Title>{this.state.description}</Card.Title>
                        <Card.Text>
                            {this.state.hotel_location}
                        </Card.Text>
                        <Card.Text>
                            Price: {this.state.price}
                        </Card.Text>
                        <Card.Text>
                            Room number: {this.state.room_number}
                        </Card.Text>
                        <Card.Text>
                            Room type: {this.state.room_type}
                        </Card.Text>
                        <Card.Text>
                            Vendor: {this.state.vendor}
                        </Card.Text>
                        <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default HotelDescription;