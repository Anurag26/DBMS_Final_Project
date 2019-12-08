import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap';
import UnitUser from './UnitUser';

class UserBlock extends Component {

    render() {
        return (
            <div>
                <Card className="text-center">
                    <Card.Header>Users</Card.Header>
                    {this.props.users.length!=0 ?
                     this.props.users.map(user=>(
                         <UnitUser
                             key={user._id}
                             {...user}
                         />
                     )) :
                     null
                    }
                    <Card.Footer className="text-muted">Number of Users: {this.props.users.length}</Card.Footer>
                </Card>
            </div>
        );
    }
}

export default UserBlock;