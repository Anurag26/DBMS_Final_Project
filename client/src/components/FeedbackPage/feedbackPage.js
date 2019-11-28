import React, {Component} from 'react';
import img1 from "../../images/feedbackb.jpg";
import {Form,Button} from 'react-bootstrap';
import axios from "axios";

class FeedbackPage extends Component {

    state={
        experience:'',
        comments:''
    }

    handleChange=(e)=>{
        this.setState({
                          [e.target.name]:e.target.value
                      })
    }

    handleSubmit = (e)=>{

    }


    render() {
        return (
            <div
                style={{
                    backgroundImage: `url(${img1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition:'center center',
                    backgroundAttachment: 'fixed',
                    height: `${window.innerHeight}px`
                }}
            >
                <div class='container justify-content-center'>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="textarea" className="form-control" id="exampleInputEmail1"
                                   name="experience"
                                   aria-describedby="emailHelp" placeholder="Your experience here"
                                   onChange={e=>this.handleChange(e)}
                                   value={this.state.experience}
                            />
                                <small id="emailHelp" className="form-text text-muted">We'll never
                                    share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Comments</label>
                            <input type="text" className="form-control"
                                   id="exampleInputPassword1" placeholder="Your comments here" onChange={e=>this.handleChange(e)}
                                   value={this.state.comments}
                                   name="comments"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default FeedbackPage;