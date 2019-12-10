import React, {Component} from 'react';
import OrderBlock from './OrderBlock';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import firebase from '../../Firebase/fireBase';

class Myorder extends Component {

    state={
        loggedIn:false,
        // productName:'',
        // productPrice:0,
        // productId:'',
        history:[],
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
                                              // productId: res.data[0].history[0].id,
                                              // productName: res.data[0].history[0].name,
                                              // productPrice: res.data[0].history[0].price,
                                              history:res.data[0].history,
                                              show:true
                                          })
                            console.log(this.state.history);
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
                    (<OrderBlock history={this.state.history} />)
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

export default Myorder;