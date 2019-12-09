import React, {Component} from 'react';
import axios from 'axios';
import UserBlock from './UserBlock';

class ManageUsers extends Component {

    state={
        users:[]
    }

    componentWillMount() {
        axios.get('http://localhost:3002/bookingsApp/users/user/all/all').then(res=>{
            this.setState({
                users:res.data
                          })
        }).catch(err=>{
            console.log('api not working');
        })
    }

    render() {
        return (
            <div>
                 <UserBlock users={this.state.users}/>
            </div>
        );
    }
}

export default ManageUsers;