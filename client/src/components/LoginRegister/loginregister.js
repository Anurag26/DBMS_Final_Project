import React, { Component } from 'react';
import './login.css';
import axios from 'axios';

class LoginRegister extends Component {

    state={
        registerEmail:'',
        registerPassword:'',
        registerUserName:'',
        signInEmail:'',
        signInPassword:'',
        signInClicked:true
    }

    toggleChange=()=>{
        this.setState({
            signInClicked:!(this.state.signInClicked)
                      })
    }

    handleChange=(e)=>{
        this.setState({
                          [e.target.name]:e.target.value
                      })
    }

    onSubmitRegister=(event)=>
    {
        event.preventDefault();
        let dataToSubmitForRegistration={
            "registerEmail":this.state.registerEmail,
            "registerPassword":this.state.registerPassword,
            "registerUserName":this.state.registerUserName
        };

        axios.post('/api/bookingsApp/users/create',dataToSubmitForRegistration).then(response=>{
            console.log(response);
            this.props.history.push("/");
        }).catch(error=>{
            console.log(error)
        });
    }

    onSubmitLogin=(event)=>
    {
        event.preventDefault();
        let dataToSubmit={
            "signInEmail":this.state.signInEmail,
            "signInPassword":this.state.signInPassword
        };

        axios.post('/api/bookingsApp/users/login',dataToSubmit).then(response=>{
            console.log(response);
            this.props.history.push("/");
        }).catch(error=>{
            console.log(error)
        });
    }

    render() {
        return (
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

                                         <div className="custom-control custom-checkbox mb-3">
                                             <input type="checkbox" className="custom-control-input"
                                                    id="customCheck1"/>
                                             <label className="custom-control-label"
                                                    htmlFor="customCheck1">Remember
                                                 password</label>
                                         </div>
                                         <button
                                             className="btn btn-lg btn-primary btn-block text-uppercase"
                                             type="submit" onClick={this.onSubmitLogin}>Sign in
                                         </button>
                                         <hr className="my-4"/>

                                     </form>
                                                              :
                                     <form className="form-signin" id="register-form"
                                           style={{
                                               display: 'block'
                                           }}>
                                         <div className="form-label-group">
                                             <input type="email" id="inputEmail"
                                                    className="form-control"
                                                    placeholder="Email address"
                                                    value={this.state.registerEmail}
                                                    onChange={e => this.handleChange(e)}
                                                    required autoFocus/>

                                         </div>

                                         <div className="form-label-group">
                                             <input type="password" id="inputPassword"
                                                    className="form-control" placeholder="Password"
                                                    value={this.state.registerPassword}
                                                    onChange={e => this.handleChange(e)}
                                                    required/>

                                         </div>

                                         <div className="form-label-group">
                                             <input type="password" id="user-name"
                                                    className="form-control" placeholder="User Name"
                                                    onChange={e => this.handleChange(e)}
                                                    value={this.state.registerUserName}
                                                    required/>

                                         </div>

                                         <div className="custom-control custom-checkbox mb-3">
                                             <input type="checkbox" className="custom-control-input"
                                                    id="customCheck1"/>
                                             <label className="custom-control-label"
                                                    htmlFor="customCheck1">Remember
                                                 password</label>
                                         </div>
                                         <button
                                             className="btn btn-lg btn-primary btn-block text-uppercase"

                                             type="submit" onClick={this.onSubmitRegister}>Register
                                         </button>
                                         <hr className="my-4"/>

                                     </form>
                                    }
                                    <button
                                        className="btn btn-lg btn-google btn-block text-uppercase"
                                        type="submit"><i className="fab fa-google mr-2"></i> Google
                                        Authentication
                                    </button>
                                    <button
                                        className="btn btn-lg btn-facebook btn-block text-uppercase"
                                        type="submit"><i
                                        className="fab fa-facebook-f mr-2"></i> Facebook
                                        Authentication
                                    </button>
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