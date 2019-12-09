import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap'
import img1 from '../../images/hotelCard.jpg';

class OrderBlock extends Component {

    state={
        show:this.props.productPrice===null?false:true
    }

    render() {
        return (
            <div>
                <Card className="text-center">
                    <Card.Header>Your Orders</Card.Header>
                    <Card.Body>
                        {
                            this.state.show?
                            <div>
                                <Card.Img src={img1} style={{
                                    width:'15rem'
                                }} />
                                <Card.Text> Product Id: {this.props.productId}  </Card.Text>
                                <Card.Text> Name: {this.props.productName}  </Card.Text>
                                <Card.Text> Price: {this.props.productPrice}  </Card.Text>
                            </div>   :
                            null
                        }
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default OrderBlock;