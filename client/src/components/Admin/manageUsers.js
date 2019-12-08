import React, {Component} from 'react';
import axios from 'axios';
import UserBlock from './UserBlock';

class ManageUsers extends Component {

    state={
        users:[]
    }

    componentWillMount() {
        axios.get('http://localhost:3002/bookingsApp/users/user/all/all').then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log('api not working');
        })
    }

    render() {
        return (
            <div>
                <UserBlock />
            </div>
        );
    }
}

export default ManageUsers;