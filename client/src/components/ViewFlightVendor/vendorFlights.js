import React, {Component} from 'react';

import axios from 'axios';
import firebase from '../../Firebase/fireBase';
import VendorFlightBlock from './VendorFlightBlock';

class VendorFlights extends Component {

    state={
        vendor_id:'',
        role:'User',
        flights:[]
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                axios.get('http://localhost:3002/bookingsApp/users/email/'+user.email).then(res=> {
                    this.setState({
                                      role : res.data[0].role,
                                      vendor_id: res.data[0]._id
                                  })
                    axios.get('http://localhost:3002/bookingsApp/flights/flight/vendor/'+res.data[0]._id).then(res=>{
                        this.setState({
                                          flights: res.data
                                      })
                    }).catch(err=>{
                        console.log(err);
                    })
                }).catch(err=>{
                    console.log(err);
                })
            }})
    }

    render() {
        return (
            <div>
                {
                    this.state.flights.length != 0 ?
                    <VendorFlightBlock
                        flights={this.state.flights}
                    />
                                                  :
                    null
                }
            </div>
        );
    }
}

export default VendorFlights;