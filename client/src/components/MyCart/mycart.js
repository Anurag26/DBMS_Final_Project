import React, {Component} from 'react';
import axios from 'axios';
import firebase from '../../Firebase/fireBase';
import Alert from 'react-bootstrap/Alert';
import CartBlock from './CartBlock';

class Mycart extends Component {

    state={
        loggedIn:false,
        userId:'',
        userEmail:'',
        productName:'',
        productPrice:0,
        productId:'',
        manager:'',
        type:'',
        show:false
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user=> {
            if(user) {
                this.setState({
                                  loggedIn: true
                              })
                axios.get('http://localhost:3002/bookingsApp/users/email/' + user.email)
                    .then(res => {
                        console.log(res)
                        if(res.data[0].cart.length!=0) {
                            if(res.data[0].cart[0].type==="Flight"){
                                console.log("Flight id is "+res.data[0]._id);
                                // console.log("This is in cart"+res.data[0].cart[0].type);
                                this.setState({
                                                  userId: res.data[0]._id,
                                                  productId: res.data[0].cart[0].id,
                                                  productName: res.data[0].cart[0].origin_location+' -> '+res.data[0].cart[0].destination_location,
                                                  productPrice: res.data[0].cart[0].price,
                                                  userEmail: res.data[0].email,
                                                  manager:res.data[0].cart[0].manager,
                                                  type:res.data[0].cart[0].type,
                                                  show:true
                                              })
                            }
                            else{
                                // console.log("This is in cart"+res.data[0].cart[0].type);
                                this.setState({
                                                  userId: res.data[0]._id,
                                                  productId: res.data[0].cart[0].id,
                                                  productName: res.data[0].cart[0].name,
                                                  productPrice: res.data[0].cart[0].price,
                                                  userEmail: res.data[0].email,
                                                  type:res.data[0].cart[0].type,
                                                  manager:res.data[0].cart[0].manager,
                                                  show:true
                                              })
                            }

                        }
                    }).catch(err => {
                    console.log(err);
                })
            }

        })
    }

    render() {
        return (
            <div>

                {
                    this.state.loggedIn ?
                        this.state.show?
                    <CartBlock productName={this.state.productName} productPrice={this.state.productPrice}
                               userId={this.state.userId} productId={this.state.productId}
                               userEmail={this.state.userEmail} manager={this.state.manager}
                               type={this.state.type}
                    />
                    :null
                    :
                    <div>
                        <Alert variant="danger" dismissible>
                            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                            <p>
                               Kindly login first !!
                            </p>
                        </Alert>
                    </div>
                }

            </div>
        );
    }
}

export default Mycart;