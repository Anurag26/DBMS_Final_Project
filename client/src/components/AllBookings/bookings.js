import React, {Component} from 'react';
import axios from 'axios';
import BookingBlock from './BookingBlock';

class Bookings extends Component {

    state={
        bookings:[]
    }

    componentWillMount() {
        axios.get('http://localhost:3002/bookingsApp/bookings/all/allBookings').then(res=>{
            this.setState({
                        bookings:res.data
                          })
            console.log(this.state.bookings);
        }).catch(err=>{
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.bookings.length != 0 ?
                     <BookingBlock bookings={this.state.bookings}/> :
                     null
                    }
                </div>
            </div>
        );
    }
}

export default Bookings;