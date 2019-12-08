import React, {Component} from 'react';
import axios from 'axios';
import firebase from '../../Firebase/fireBase';
import CartBlock from './CartBlock';

class Mycart extends Component {

    state={
        loggedIn:false,
        userId:'',
        productId:'',
        productPrice:0,
        show:false,
        productName:''
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user=> {
            if(user) {
                this.setState({
                                  loggedIn: true
                              })
                axios.get('http://localhost:3002/bookingsApp/users/email/' + user.email)
                    .then(res => {
                        if(res.data[0].cart.length!=0) {
                            this.setState({
                                              userId: res.data[0]._id,
                                              productId: res.data[0].cart[0].id
                                          })
                            axios.get('http://localhost:3002/bookingsApp/hotels/id/'
                                      + this.state.productId).then(res => {
                                this.setState({
                                                  show:true,
                                                  productName: res.data.name,
                                                  productPrice: res.data.price
                                              })
                            }).catch(err => {

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
                    <CartBlock productName={this.state.productName} price={this.state.productPrice} userId={this.state.userId} />
                    :null
                    :
                    <div> Please log in first</div>
                }

            </div>
        );
    }
}

export default Mycart;