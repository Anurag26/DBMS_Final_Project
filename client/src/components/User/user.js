import React, {Component} from 'react';
import firebase from '../../Firebase/fireBase';
import axios from 'axios';
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import img1 from '../../images/default_user.jpg'
import Alert from 'react-bootstrap/Alert';

class User extends Component {

    state={
        exist:false,
        userName:'',
        email:'',
        firstName:'',
        lastName:'',
        update:false,
        updateUserName:'',
        deleteError:false,
        logout: false
    }

    handleChange=(e)=>{
        this.setState({
                          [e.target.name]:e.target.value
                      })
    }

    handleLogOut=()=>{
        firebase.auth().signOut().then(res=>{
            this.setState({
                exist:false,
                logout:true
                          })
        }).catch(err=>{
            console.log(err);
        })
    }

    handleDeleteAccount=()=>{
        firebase.auth().currentUser.delete().then(res=>{
            axios.delete('http://localhost:3002/bookingsApp/users/'+this.state.email+'/delete').then(res=>{
               this.setState({
                    exist:false,
                    userName:'',
                    email:''
                              })
            }).catch(err=>{
                console.log('db delete error')
            })
        }).catch(err=>{
            this.setState({
                deleteError:true
                          })

        })
    }

    handleUpdateAccount=()=>{
        this.setState({
            update:true
                      })
    }

    updatePush=()=>{
        let dataToSubmit = {
            "userName":this.state.updateUserName
        }
        axios.put('http://localhost:3002/bookingsApp/users/'+this.state.email+'/update',
                   dataToSubmit).then(res=>{
            this.setState({
                update:false,
                userName:dataToSubmit.userName,
                updateUserName:''
                          })
        }).catch(err=>{
            console.log('error updating')
        })
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user=>{
           axios.get('http://localhost:3002/bookingsApp/users/email/'+user.email).then(res=> {
               this.setState({
                                 firstName: res.data[0].firstName,
                                 lastName: res.data[0].lastName,
                                 userName: res.data[0].userName,
                                 email: res.data[0].email,
                                 exist: true
                             })

            }).catch(err=>{
                console.log('not a customer')
            })
        })
    }

    render() {
        return (
            <div>
                { this.state.exist ?
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Hi {this.state.firstName} {this.state.lastName}</Card.Title>
                            <Card.Text>
                                username: {this.state.userName}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Email: {this.state.email}</ListGroupItem>
                            {/*<ListGroupItem>Dapibus ac facilisis in</ListGroupItem>*/}
                            {/*<ListGroupItem>Vestibulum at eros</ListGroupItem>*/}
                        </ListGroup>
                        {/*<Card.Body>*/}
                            {/*<Card.Link href="#">Update Account</Card.Link>*/}
                            {/*<Card.Link href="#">Delete Account</Card.Link>*/}
                            <Button variant="warning" onClick={this.handleUpdateAccount}>Update Account</Button>
                            <Button variant="secondary" onClick={this.handleDeleteAccount}>Delete Account</Button>
                            <Button variant="danger" onClick={this.handleLogOut}>Log out</Button>
                        {
                            this.state.update?
                            <div>
                            <input name="updateUserName"
                                   type="text" id="inputupdated"
                                   className="form-control" placeholder="Enter new UserName!"
                                   onChange={e => this.handleChange(e)}
                                   value={this.state.signInPassword}
                                   required/>
                            <Button variant="success" onClick={this.updatePush}>Update it</Button>
                            </div>
                                :
                            null
                        }
                        {
                            this.state.deleteError?
                            <div> This is a sensitive operation. We need a recent login. Please login now</div>
                            :
                            null
                        }
                    </Card>

                  : this.state.logout?
                  <div>
                      <Alert variant="success" dismissible>
                          <Alert.Heading>User Logged out successfully!</Alert.Heading>
                          <p>
                              Kindly close this browser to complete logout!!
                          </p>
                      </Alert>
                  </div>
                    :                   <div>
                        <Alert variant="danger" dismissible>
                            <Alert.Heading>User not logged In!</Alert.Heading>
                            <p>
                                Kindly login to proceed!!
                            </p>
                        </Alert>
                    </div>
                }
                <div style={{float:'right'}}></div>
            </div>
        );
    }
}

export default User;