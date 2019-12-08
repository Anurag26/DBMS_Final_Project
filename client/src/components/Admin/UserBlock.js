import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap';
import UnitUser from './UnitUser';

class UserBlock extends Component {

    state={
        numberOfUsers:0
    }

    renderUserCards=()=>{
        
    }

    render() {
        return (
            <div>
                <Card className="text-center">
                    <Card.Header>Users</Card.Header>
                    {/*<Card.Body>*/}
                    {/*    <Card.Text>*/}
                    {/*        With supporting text below as a natural lead-in to additional content.*/}
                    {/*    </Card.Text>*/}
                    {/*    <Button variant="primary">Go somewhere</Button>*/}
                    {/*</Card.Body>*/}
                    {this.renderUserCards}
                    <Card.Footer className="text-muted">Number of Users: {this.state.numberOfUsers}</Card.Footer>
                </Card>
            </div>
        );
    }
}

export default UserBlock;