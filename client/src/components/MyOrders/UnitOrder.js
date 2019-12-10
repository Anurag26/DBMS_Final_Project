import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap'
import img1 from '../../images/merged.jpg';

class UnitOrder extends Component {
    render() {
        return (
            <div>
                <Card.Body>
                    <div>
                        <Card.Img src={img1} style={{
                            width:'15rem'
                        }} />
                        <Card.Text> Product Id: {this.props.productId}  </Card.Text>
                        <Card.Text> Name: {this.props.productName}  </Card.Text>
                        <Card.Text> Price: ${this.props.productPrice}  </Card.Text>
                    </div>
                </Card.Body>
            </div>
        );
    }
}

export default UnitOrder;