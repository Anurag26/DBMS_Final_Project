import React,{Component} from 'react';
import {Card,Button} from 'react-bootstrap'
import img1 from '../../images/hotelCard.jpg';
import axios from 'axios';

class CartBlock extends Component {

    state={
        show:this.props.productPrice===null?false:true
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

        }).catch(err=>{
            console.log(err)
        })
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
            </Card.Body>
        </Card>
        </div>
        );
    }
}

export default CartBlock;