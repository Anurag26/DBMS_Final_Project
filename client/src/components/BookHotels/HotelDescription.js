import React, {Component} from 'react';
import axios from 'axios';
import {Card,Button} from 'react-bootstrap';
import firebase from '../../Firebase/fireBase';
import img1 from '../../images/hotelCard.jpg';

class HotelDescription extends Component {

    state={
        id:'',
        name:'',
        description:'',
        hotel_location:'',
        price:0,
        room_number:0,
        vendor:'',
        room_type:'',
        loginFirst:false
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        axios.get('http://localhost:3002/bookingsApp/hotels/id/'+id).then(res=>{
            axios.get('http://localhost:3002/bookingsApp/users/'+res.data.vendor).then(vendor=>{
                this.setState({
                                  id:id,
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

    handleItemToCart=()=>{
        let dataToSubmit={
            id: this.state.id
        }
        firebase.auth().onAuthStateChanged(user=> {
            if(user) {
                axios.post('http://localhost:3002/bookingsApp/users/addToCart/' + user.email,
                           dataToSubmit).then(res => {
                    console.log('success')
                }).catch(err => {
                    console.log('cannot add to cart')
                })
            }
            else{
                this.setState({
                    loginFirst:true
                              })
            }
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
                        <Button variant="primary" onClick={this.handleItemToCart} >Add to cart</Button>
                        {
                            this.state.loginFirst?
                            <Card.Text>
                                You need to login before adding items to cart
                            </Card.Text>:
                            null
                        }

                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default HotelDescription;