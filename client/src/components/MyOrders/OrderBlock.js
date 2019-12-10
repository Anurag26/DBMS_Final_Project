import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap'
import Hotel from '../../images/Hotels.jpg';
import UnitOrder from './UnitOrder';

class OrderBlock extends Component {

    state={
        show:this.props.history.length===0?false:true
    }

    // handleRenderUnitOrders=()=>{
    //     this.props.history.map(order=>(
    //         <UnitOrder />
    //     ))
    // }

    render() {
        return (
            <div>

                {
                    this.state.show?
                    <Card className="text-center">
                        <Card.Header>Your Orders</Card.Header>
                        {this.props.history.map(order=>(
                        <UnitOrder

                        key={order.id}
                        productId={order.id}
                        productName={order.name}
                        productPrice={order.price}
                        />
                    ))}
                    </Card>
                                   :
                    null
                }
                {/*<Card className="text-center">*/}
                {/*    <Card.Header>Your Orders</Card.Header>*/}
                {/*    <Card.Body>*/}
                {/*        {*/}
                {/*            this.state.show?*/}
                {/*            <div>*/}
                {/*                <Card.Img src={img1} style={{*/}
                {/*                    width:'15rem'*/}
                {/*                }} />*/}
                {/*                <Card.Text> Product Id: {this.props.productId}  </Card.Text>*/}
                {/*                <Card.Text> Name: {this.props.productName}  </Card.Text>*/}
                {/*                <Card.Text> Price: {this.props.productPrice}  </Card.Text>*/}
                {/*            </div>   :*/}
                {/*            null*/}
                {/*        }*/}
                {/*    </Card.Body>*/}
                {/*</Card>*/}
            </div>
        );
    }
}

export default OrderBlock;