import React,{Component} from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import {Card,Button} from 'react-bootstrap';
import Hotel from '../../images/Hotels.jpg';
import Flight from '../../images/merged.jpg';

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
        console.log("Id2 "+this.props.userId)
        let dataToSubmit={
            id: this.props.userId,
            name:this.props.productName,
            price:this.props.productPrice,
            type: this.props.type
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
                    <Card.Img src={Flight} style={{
                        width:'15rem'
                    }} />
                        <Card.Text> {this.props.type}  </Card.Text>
                    <Card.Text> {this.props.productName}  </Card.Text>
                    <Card.Text> Price: {this.props.productPrice+'$'}  </Card.Text>
                     <Button onClick={this.handleDelete} > Delete </Button>
                     <Button onClick={this.handlePayment} > Pay </Button>
                    </div>   :
                    null
                }
                {
                    this.state.paymentDone?
                    <div>
                        <>
                            <Alert  variant="success">
                                <Alert.Heading>Payment done successfully.</Alert.Heading>
                                <p>
                                    Payment done from default payment mode...
                                </p>
                                <hr />
                            </Alert>
                        </>
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