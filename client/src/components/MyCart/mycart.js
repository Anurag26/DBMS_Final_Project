import React, {Component} from 'react';
import axios from 'axios';
import firebase from '../../Firebase/fireBase';
import CartBlock from './CartBlock';

class Mycart extends Component {

    state={
        loggedIn:false,
        userId:'',
        userEmail:'',
        productName:'',
        productPrice:0,
        productId:'',
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
                        console.log("This is in cart"+user.email);
                        if(res.data[0].cart.length!=0) {
                            this.setState({
                                              userId: res.data[0]._id,
                                              productId: res.data[0].cart[0].id,
                                              productName: res.data[0].cart[0].name,
                                              productPrice: res.data[0].cart[0].price,
                                              userEmail: res.data[0].email,
                                show:true
                                          })
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
                               userEmail={this.state.userEmail}
                    />
                    :null
                    :
                    <div> Please log in first</div>
                }

            </div>
        );
    }
}

export default Mycart;