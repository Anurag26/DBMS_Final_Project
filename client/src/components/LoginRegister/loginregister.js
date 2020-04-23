import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import firebase from '../../Firebase/fireBase';
import {Redirect,Link} from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';
import Home from '../Home/home';

class LoginRegister extends Component {

    state={
        registerEmail:'',
        registerPassword:'',
        registerUserName:'',
        registerFirstName:'',
        registerLastName:'',
        signInEmail:'',
        signInPassword:'',
        signInClicked:true,
        checkbox: false,
        checkboxType:false,
        userdb:false,
        loggedIn: false,
        role:''
    }

    toggleChange=()=>{
        this.setState({
            signInClicked:!(this.state.signInClicked)
                      })
    }

    handleChange=(e,role)=>{
        console.log(role)
        this.setState({
                          [e.target.name]:e.target.value,
            role:role
                      })
    }

    onSubmitRegister=(event)=>
    {
        if(!this.state.role){
            this.setState({
                role:'User'
            })
        }
        else{
            this.setState({
                role:this.state.role
            })
        }

        event.preventDefault();
        let type=-1;
        let dataToSubmitForRegistration={
            "email":this.state.registerEmail,
            "password":this.state.registerPassword,
            "userName":this.state.registerUserName,
            "firstName":this.state.registerFirstName,
            "lastName":this.state.registerLastName,
            "role":this.state.role
        };
        firebase.auth().createUserWithEmailAndPassword(this.state.registerEmail,this.state.registerPassword).then(
            (axios.post('http://localhost:3002/bookingsApp/users/create',
                           dataToSubmitForRegistration)
                    .then(response => {
                        console.log(response);
                        this.setState({
                                          registerEmail: '',
                                          registerPassword: '',
                                          registerUserName: '',
                                          registerFirstName:'',
                                          registerLastName:'',
                                          checkbox:false,
                                          checkboxType:false,
                                          loggedIn: true,
                                          role:''
                                      })
                    }).catch(err => {
                    console.log(err);
                }))
        )
    };

    onSubmitLogin=(event)=> {
        event.preventDefault();

        axios.get('http://localhost:3002/bookingsApp/users/email/' + this.state.signInEmail)
            .then(res => {
                      if (res != null) {
                          firebase.auth()
                              .signInWithEmailAndPassword(this.state.signInEmail,
                                                          this.state.signInPassword)
                              .then(res => {
                                  this.setState({
                                                    signInEmail: '',
                                                    signInPassword: '',
                                                    loggedIn: true
                                                })
                              }).catch(err => {
                              console.log(err);
                          })
                      } else {
                          console.log('hey')
                      }
                  }
            ).catch(err => {
            console.log('invalid user')
        })
    }


    componentWillMount() {
        firebase.auth().onAuthStateChanged(
            (user)=>{
                console.log(user);
            }
        )
    }

    render() {
        return (
            this.state.loggedIn ?
            <Alert variant="success" dismissible>
                <Alert.Heading>User Logged in successfully!</Alert.Heading>
                <p>
                    Kindly go to profile section to proceed !!
                </p>
            </Alert>
            :
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col sign-in-btn" id="sign-in"
                                             onClick={this.toggleChange}><h5
                                            className="card-title text-center">Sign In</h5></div>
                                        <div className="col register-btn" id="register"
                                             onClick={this.toggleChange}><h5
                                            className="card-title text-center">Register</h5></div>
                                    </div>
                                    {this.state.signInClicked ?
                                     <form className="form-signin" id="sign-in-form">
                                         <div className="form-label-group">
                                             <input name="signInEmail"
                                                    type="email" id="inputEmail"
                                                    className="form-control"
                                                    placeholder="Email address"
                                                    value={this.state.signInEmail}
                                                    onChange={e => this.handleChange(e)}
                                                    required autoFocus/>

                                         </div>

                                         <div className="form-label-group">
                                             <input name="signInPassword"
                                                    type="password" id="inputPassword"
                                                    className="form-control" placeholder="Password"
                                                    onChange={e => this.handleChange(e)}
                                                    value={this.state.signInPassword}
                                                    required/>

                                         </div>

                                         <Button
                                             className="btn btn-lg btn-primary btn-block text-uppercase"
                                             variant="warning"
                                             type="submit" onClick={this.onSubmitLogin}>Sign in
                                         </Button>
                                         <hr className="my-4"/>

                                     </form>
                                                              :
                                     <form className="form-signin" id="register-form"
                                           style={{
                                               display: 'block'
                                           }}>
                                         <div className="form-label-group">
                                             <input name="registerEmail" type="email" id="inputEmail"
                                                    className="form-control"
                                                    placeholder="Email address"
                                                    value={this.state.registerEmail}
                                                    onChange={e => this.handleChange(e)}
                                                    required autoFocus/>

                                         </div>

                                         <div className="form-label-group">
                                             <input name="registerPassword"
                                                    type="password" id="inputPassword"
                                                    className="form-control" placeholder="Password"
                                                    value={this.state.registerPassword}
                                                    onChange={e => this.handleChange(e)}
                                                    required />

                                         </div>

                                         <div className="form-label-group">
                                             <input name="registerUserName"
                                                 type="text" id="user-name"
                                                    className="form-control" placeholder="User Name"
                                                    onChange={e => this.handleChange(e)}
                                                    value={this.state.registerUserName}
                                                    required />

                                         </div>

                                         <div className="form-label-group">
                                             <input name="registerFirstName" type="text" id="registerFirstName"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    value={this.state.registerFirstName}
                                                    onChange={e => this.handleChange(e)}
                                                    required autoFocus/>

                                         </div>

                                         <div className="form-label-group">
                                             <input name="registerLastName" type="text" id="registerLastName"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    value={this.state.registerLastName}
                                                    onChange={e => this.handleChange(e)}
                                                    required autoFocus/>

                                         </div>

                                         <div className="form-check">
                                             <label className="form-check-label">
                                                 <input id="check" name="checkbox" type="checkbox" className="form-check-input"
                                                        onChange={e => this.handleChange(e,"Vendor-Hotel")}
                                                        value={this.state.checkbox}
                                                         />Hotel Vendor?
                                             </label>
                                         </div>

                                         <div className="form-check">
                                             <label className="form-check-label">
                                                 <input id="checkBOX" name="checkboxType" type="checkbox" className="form-check-input"
                                                        onChange={e => this.handleChange(e,"Vendor-Airline")}
                                                        value={this.state.checkboxType}
                                                 />Flight Vendor?
                                             </label>
                                         </div>

                                         <Button
                                             className="btn btn-lg btn-primary btn-block text-uppercase"
                                             variant="danger"
                                             type="submit" onClick={this.onSubmitRegister}>Register
                                         </Button>
                                         <hr className="my-4"/>

                                     </form>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginRegister;