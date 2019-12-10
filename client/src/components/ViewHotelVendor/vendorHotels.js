import React, {Component} from 'react';
import firebase from '../../Firebase/fireBase';
import axios from 'axios';
import VendorHotelBlock from './VendorHotelBlock';

class VendorHotels extends Component {

    state={
        vendor_id:'',
        role:'User',
        hotels:[]
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
                            this.setState({
                                hotels: res.data
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
                this.state.hotels.length != 0 ?
                <VendorHotelBlock
                    hotels={this.state.hotels}
                />
                :
                null
            }
            </div>
        );
    }
}

export default VendorHotels;