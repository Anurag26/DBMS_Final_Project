import React, {Component} from 'react';
import OrderBlock from './OrderBlock';
import axios from 'axios';
import firebase from '../../Firebase/fireBase';

class Myorder extends Component {

    state={
        loggedIn:false,
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
                        if(res.data[0].history.length!=0) {
                            this.setState({
                                              productId: res.data[0].cart[0].id,
                                              productName: res.data[0].cart[0].name,
                                              productPrice: res.data[0].cart[0].price,
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
                    <OrderBlock productName={this.state.productName} productPrice={this.state.productPrice} userId={this.state.userId} productId={this.state.productId} />
                                   :null
                                        :
                    <div> Please log in first</div>
                }
            </div>
        );
    }
}

export default Myorder;