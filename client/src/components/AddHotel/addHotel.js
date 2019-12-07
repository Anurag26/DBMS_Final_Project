import React, {Component} from 'react';
import firebase from '../../Firebase/fireBase';

class AddHotel extends Component {

    state={
        name:'',
        description:'',
        hotel_location:'',
        vendor:'',
        price:0,
        room_number:0,
        room_type:''
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default AddHotel;