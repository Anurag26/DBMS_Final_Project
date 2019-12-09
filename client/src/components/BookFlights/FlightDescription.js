// import React, {Component} from 'react';
// import axios from 'axios';
// import {Card,Button} from 'react-bootstrap';
// import firebase from '../../Firebase/fireBase';
//
// class FlightDescription extends Component {
//
//     state={
//         _id:'',
//         airline: '',
//         call_sign: '',
//         make_name: '',
//         origin_code: '',
//         origin_name: '',
//         origin_location: '',
//         destination_code: '',
//         destination_name: '',
//         destination_location: '',
//         capacity: 0,
//         dateTakeOff: '',
//         price: 0,
//         loginFirst:false
//     }
//
//     componentWillMount() {
//         const id = this.props.match.params.id;
//         console.log(id)
//         axios.get('http://localhost:3002/bookingsApp/flights/'+id).then(res=>{
//             // axios.get('http://localhost:3002/bookingsApp/users/'+res.data.vendor).then(vendor=>{
//             //     this.setState({
//             //                       id:id,
//             //                       name:res.data.name,
//             //                       description:res.data.description,
//             //                       hotel_location:res.data.hotel_location,
//             //                       price:res.data.price,
//             //                       room_number:res.data.room_number,
//             //                       room_type:res.data.room_type,
//             //                       vendor:vendor.data.email
//             //                   })
//             // }).catch(err=>{
//             //     console.log(err)
//             // })
//             console.log(res)
//             this.setState({
//                               airline: res.data.airline,
//                               call_sign: res.data.call_sign,
//                               make_name: res.data.make_name,
//                               origin_code: res.data.origin_code,
//                               origin_name: res.data.origin_name,
//                               origin_location: res.data.origin_location,
//                               destination_code: res.data.destination_code,
//                               destination_name: res.data.destination_name,
//                               destination_location: res.data.destination_location,
//                               capacity: res.data.capacity,
//                               dateTakeOff: res.data.dateTakeOff,
//                               price: res.data.price
//                           })
//         }).catch(err=>{
//             console.log(err)
//         })
//     }
//
//     handleItemToCart=()=>{
//         let dataToSubmit={
//             airline: this.state.airline,
//             price: this.state.price,
//             id:this.state._id
//         }
//
//         firebase.auth().onAuthStateChanged(user=> {
//             if(user) {
//                 axios.post('http://localhost:3002/bookingsApp/users/addToCart/' + user.email,
//                            dataToSubmit).then(res => {
//                     console.log('success')
//                 }).catch(err => {
//                     console.log('cannot add to cart')
//                 })
//             }
//             else{
//                 this.setState({
//                                   loginFirst:true
//                               })
//             }
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <Card>
//                     <Card.Header>{this.state.name}</Card.Header>
//                     <Card.Body>
//                         <Card.Img variant="top" style={{width:'18rem'}} src={img1} />
//                         <Card.Title>{this.state.airline}</Card.Title>
//                         {/*<Card.Text>*/}
//                         {/*    Phone: {this.state.phone}*/}
//                         {/*</Card.Text>*/}
//                         {/*<Card.Text>*/}
//                         {/*    Room Type: {this.state.room_type}*/}
//                         {/*</Card.Text>*/}
//                         <Card.Text>
//                             Price: {this.state.price}
//                         </Card.Text>
//                         <Button variant="primary" onClick={this.handleItemToCart} >Add to cart</Button>
//                         {
//                             this.state.loginFirst?
//                             <Card.Text>
//                                 You need to login before adding items to cart
//                             </Card.Text>:
//                             null
//                         }
//
//                     </Card.Body>
//                 </Card>
//             </div>
//         );
//     }
// }
//
// export default FlightDescription;