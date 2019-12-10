import React, {Component} from 'react';
import firebase from '../../Firebase/fireBase';
import axios from 'axios';

class VendorHotels extends Component {

    state={
        vendor_id:'',
        role:'User'
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                axios.get('http://localhost:3002/bookingsApp/users/email/'+user.email).then(res=> {
                    this.setState({
                                      role : res.data[0].role,
                                      vendor_id: res.data[0]._id
                                  })
                    axios.get('http://localhost:3002/bookingsApp/hotels/hotel/vendor/'+res.data[0]._id).then(res=>{
                        console.log(res);
                    }).catch(err=>{

                    })
                }).catch(err=>{
                    console.log(err);
                })
            }})
    }

    render() {
        return (
            <div>
                Rad
            </div>
        );
    }
}

export default VendorHotels;