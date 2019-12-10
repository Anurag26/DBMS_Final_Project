import React, {Component} from 'react';
import axios from 'axios';
import {Card,Button} from 'react-bootstrap';
import firebase from '../../Firebase/fireBase';

import img1 from '../../images/Hotels.jpg';

import Alert from 'react-bootstrap/Alert';


class HotelDescription extends Component {

    state={
        _id:'',
        name:'',
        phone:'',
        country:'',
        address_street:'',
        address_city:'',
        price:0,
        room_number:0,
        room_type:'',
        manager:'',
        loginFirst:false,
        productAddedToCart: false
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        console.log(id)
        axios.get('http://localhost:3002/bookingsApp/hotels/id/'+id).then(res=>{
            // axios.get('http://localhost:3002/bookingsApp/users/'+res.data.vendor).then(vendor=>{
            //     this.setState({
            //                       id:id,
            //                       name:res.data.name,
            //                       description:res.data.description,
            //                       hotel_location:res.data.hotel_location,
            //                       price:res.data.price,
            //                       room_number:res.data.room_number,
            //                       room_type:res.data.room_type,
            //                       vendor:vendor.data.email
            //                   })
            // }).catch(err=>{
            //     console.log(err)
            // })
            console.log("hotel"+res)
            this.setState({
                    _id:res.data._id,
                    name:res.data.name,
                    phone:res.data.phone,
                    country:res.data.country,
                    address_street:res.data.address_street,
                    address_city:res.data.address_city,
                    price: res.data.price[0],
                    room_type: res.data.room_type[0],
                    room_number: res.data.room_number,
                    manager: res.data.manager

                          })
        }).catch(err=>{
            console.log(err)
        })
    }


    handleItemToCart=()=>{
        let dataToSubmit={
            name: this.state.name,
            price: this.state.price,
            id:this.state._id,
            manager:this.state.manager
        }

        firebase.auth().onAuthStateChanged(user=> {
            if(user) {
                axios.post('http://localhost:3002/bookingsApp/users/addToCart/' + user.email,
                           dataToSubmit).then(res => {
                    console.log('success');
                    this.setState({
                           productAddedToCart: true
                    })

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
            this.state.productAddedToCart?
            <div> <>
                <Alert  variant="success">
                    <Alert.Heading>Product successfully added to cart.</Alert.Heading>
                    <p>
                        Kindly checkout and complete payment of the cart...
                    </p>
                    <hr />
                </Alert>
            </> </div>
              :
            <div>
                <Card>
                    <Card.Header>{this.state.name}</Card.Header>
                    <Card.Body>
                        <Card.Img variant="top" style={{width:'18rem'}} src={img1} />
                        <Card.Title>{this.state.address_street}, {this.state.address_city}, {this.state.country}</Card.Title>
                        <Card.Text>
                            Phone: {this.state.phone}
                        </Card.Text>
                        <Card.Text>
                            Room Type: {this.state.room_type}
                        </Card.Text>
                        <Card.Text>
                            Price: {this.state.price}
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