import React,{Component} from 'react';
import {Card,Button} from 'react-bootstrap'
import UnitCartBlock from './unitCartBlock'
import img1 from '../../images/hotelCard.jpg';
import axios from 'axios';

class CartBlock extends Component {

    state={
        show:this.props.price===null?false:true
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
                    <Card.Text> Name: {this.props.name}  </Card.Text>
                    <Card.Text> Name: {this.props.price}  </Card.Text>
                    <Button onClick={this.handleDelete} > Delete </Button>
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