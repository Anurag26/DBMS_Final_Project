import React, {Component} from 'react';
import img1 from "../../images/feedbackb.jpg";
import {Form,Button} from 'react-bootstrap';
import axios from "axios";

class FeedbackPage extends Component {

    state={
        email:'',
        order:'',
        comments:'',
        show:false
    }

    handleChange=(e)=>{
        this.setState({
                          [e.target.name]:e.target.value
                      })
    }

    handleFeedbackSubmit=()=>{
        let dataToSubmit = {
            "email": this.state.email,
            "comment": this.state.comments,
            "order": this.state.order
        }

        axios.post('http://localhost:3002/bookingsApp/feedback/create',dataToSubmit).then(res=> {
            var arr = {...res};
            this.setState({
             show:true
                          })
        }).catch(err=>{
            console.log(err);
        })
    }

    render() {
        return (
            this.state.show?
            <div><label htmlFor="successfull submission">Thanks for the feedback !!</label> </div>
            :
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
                                   aria-describedby="emailHelp" placeholder="Type your registered email id"
                                   onChange={e=>this.handleChange(e)}
                                   value={this.state.email} name="email"
                            />
                                <small id="emailHelp" className="form-text text-muted">We'll never
                                    share your Email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputOrderId">Order ID</label>
                            <input type="textarea" className="form-control" id="exampleInputOrderId"
                                   placeholder="Type your order id"
                                   onChange={e=>this.handleChange(e)}
                                   value={this.state.order} name="order"
                            />
                            <small id="orderHelp" className="form-text text-muted">We'll never
                                share your Order ID with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Comments</label>
                            <input type="text" className="form-control"
                                   id="exampleInputPassword1" placeholder="Your comments here" onChange={e=>this.handleChange(e)}
                                   value={this.state.comments}
                                   name="comments"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleFeedbackSubmit} >Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default FeedbackPage;