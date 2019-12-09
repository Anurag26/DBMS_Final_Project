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
        role:'',
        fullDisplay:true,
        accessPermission:0
    }

    updatePushUserName=()=>{
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

    onBoard=()=>{
        axios.put('http://localhost:3002/bookingsApp/users/onboard/'+this.state.email).then(res=>{
            this.setState({
                accessPermission:1
                          })
        }).catch(err=>{
            console.log(err);
        })
    }

    offBoard=()=>{
        axios.put('http://localhost:3002/bookingsApp/users/offboard/'+this.state.email).then(res=>{
            this.setState({
                              accessPermission:0
                          })
        }).catch(err=>{
            console.log(err)
        })
    }

    componentWillMount() {
        if(this.props.userName){
            this.setState({
                username: this.props.userName,
                email:this.props.email,
                role:this.props.role
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
                        <Button variant="success" onClick={this.updatePushUserName}>Update it</Button>
                        </div>
                        :
                        null
                        }
                        {
                            this.state.role==='Vendor-Hotel' || this.state.role==='Vendor-Airline' ?
                            (
                                this.state.accessPermission===0?
                            <Button variant="success" onClick={this.onBoard}>On Board</Button>:
                                <Button variant="danger" onClick={this.offBoard}>Off Board</Button>
                            ):
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