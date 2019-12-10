import React,{Component} from 'react';
import axios from 'axios';
import {Card,Button} from 'react-bootstrap';
import img1 from '../../images/hotelCard.jpg';

class CartBlock extends Component {

    state={
        show:this.props.productPrice===null?false:true,
        paymentDone:false
    }

    handleDelete=()=>{
        axios.get('http://localhost:3002/bookingsApp/users/deleteCart/'+this.props.userId).then(res=>{
            console.log('success')
            this.setState({
                show:false
                          })
        }).catch(err=>{
            console.log('delete failed')
        })
    }

    handlePayment=()=>{
        let dataToSubmit={
            id: this.props.productId,
            name:this.props.productName,
            price:this.props.productPrice
        }

        axios.put('http://localhost:3002/bookingsApp/users/addToOrder/'+this.props.userId,dataToSubmit).then(res=>{
            this.setState({
                paymentDone:true,
                show:false
                          })
        }).catch(err=>{
            console.log(err)
        })

        let dataToSubmitBooking={
            user_id:this.props.userId,
            product_id:this.props.productId,
            product_name: this.props.productName,
            product_price:this.props.productPrice,
            vendor_id:this.props.manager
        }

        axios.post('http://localhost:3002/bookingsApp/bookings/create',dataToSubmitBooking).then(res=>{
            // console.log(res)
            console.log('hey')
        }).catch(err=>{
            console.log(err)
        })

        console.log(dataToSubmitBooking);

    }

    render() {
        return (
            <div>
        <Card className="text-center">
            <Card.Header>Your Cart</Card.Header>
            <Card.Body>
                {
                    this.state.show?
                    <div>
                    <Card.Img src={img1} style={{
                        width:'15rem'
                    }} />

                    <Card.Text> Name: {this.props.productName}  </Card.Text>
                    <Card.Text> Price: {this.props.productPrice}  </Card.Text>
                     <Button onClick={this.handleDelete} > Delete </Button>
                     <Button onClick={this.handlePayment} > Pay </Button>
                    </div>   :
                    null
                }
                {
                    this.state.paymentDone?
                    <div>
                        Thankyou for the payment
                    </div>
                    :
                    null
                }
            </Card.Body>
        </Card>
        </div>
        );
    }
}

export default CartBlock;