import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap';
import axios from 'axios';
import firebase from '../../Firebase/fireBase';

class UnitUser extends Component {

    state={
        updateShow:false,
        updateUserName:'',
        email:'',
        username:'',
        fullDisplay:true
    }

    updatePush=()=>{
        let dataToSubmit = {
            "userName":this.state.updateUserName
        }
        axios.put('http://localhost:3002/bookingsApp/users/'+this.props.email+'/update',
                  dataToSubmit).then(res=>{
            this.setState({
                              updateShow:false,
                              username:dataToSubmit.userName,
                              updateUserName:''
                          })
        }).catch(err=>{
            console.log('error updating')
        })
    }

    handleChange=(e)=>{
        this.setState({
                          [e.target.name]:e.target.value
                      })
    }

    handleUpdateAccount=()=>{
        this.setState({
                          updateShow:true
                      })
    }

    handleDeleteAccount=()=>{
            axios.delete('http://localhost:3002/bookingsApp/users/'+this.state.email+'/delete').then(res=>{
                this.setState({
                                  email:'',
                                  username:'',
                                  fullDisplay:false
                              })
            }).catch(err=>{
                console.log('db delete error')
            })
    }

    componentWillMount() {
        if(this.props.userName){
            this.setState({
                username: this.props.userName,
                email:this.props.email
                          })
        }
    }

    render() {
        return (
            <div>
                <Card.Body>
                    {
                        this.state.fullDisplay?
                        <div>
                        <Card.Text>
                            {this.state.username}
                        </Card.Text>
                        <Card.Text>
                        {this.props.email}
                        </Card.Text>
                        <Button variant="warning" onClick={this.handleUpdateAccount}>update</Button>
                        {
                        this.state.updateShow?
                        <div>
                        <input name="updateUserName"
                        type="text" id="inputupdated"
                        className="form-control" placeholder="Enter new UserName!"
                        onChange={e => this.handleChange(e)}
                        value={this.state.updateUserName}
                        required/>
                        <Button variant="success" onClick={this.updatePush}>Update it</Button>
                        </div>
                        :
                        null
                        }
                        <Button variant="danger" onClick={this.handleDeleteAccount} >delete</Button>
                        </div>:
                        null
                    }
                </Card.Body>
            </div>
        );
    }
}

export default UnitUser;