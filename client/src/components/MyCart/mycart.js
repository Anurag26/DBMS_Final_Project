import React, {Component} from 'react';
import axios from 'axios';
import firebase from '../../Firebase/fireBase';
import CartBlock from './CartBlock';

class Mycart extends Component {

    state={
        loggedIn:false,
        products:[]
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user=> {
            if(user) {
                this.setState({
                                  loggedIn: true
                              })
                axios.get('http://localhost:3002/bookingsApp/users/email/' + user.email)
                    .then(res => {
                        this.setState({
                            products: res.data[0].cart
                                      })
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
                    <CartBlock products={this.state.products} />
                    :
                    <div> Please log in first</div>
                }

            </div>
        );
    }
}

export default Mycart;