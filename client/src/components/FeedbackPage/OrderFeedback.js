import React, {Component} from 'react';
import {Form,Button} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import img1 from "../../images/feedbackb.jpg";
import axios from 'axios';

class OrderFeedback extends Component {

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

    handleSearchButton=()=>{
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
            <div> <>
                <Alert  variant="success">
                    <Alert.Heading>Thanks for the feedBack.</Alert.Heading>
                    <p>
                        One of our team will be in contact with you shortly...
                    </p>
                    <hr />
                </Alert>
            </> </div>

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
                <Form>
                    <Form.Group name="email" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="name@example.com"
                                      onChange={e => this.handleChange(e)}
                                      value={this.state.email}
                                      required />
                    </Form.Group>
                    <Form.Group controlId="order">
                        <Form.Label>Order ID</Form.Label>
                        <Form.Control name="order" type="text" placeholder="123456789"
                                      onChange={e => this.handleChange(e)}
                                      value={this.state.order}
                                      required/>
                    </Form.Group>
                    <Form.Group controlId="type">
                        <Form.Label>FeedBack Type</Form.Label>
                        <Form.Control as="select">
                            <option>Complaint</option>
                            <option>Review</option>
                            <option>Appreciation</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group  controlId="comments">
                        <Form.Label>Comments</Form.Label>
                        <Form.Control name="comments" as="textarea" rows="4"
                                      onChange={e => this.handleChange(e)}
                                      value={this.state.comments}
                                      required/>
                    </Form.Group>
                </Form>
                <Button variant="primary" onClick={this.handleSearchButton}>Submit FeedBack</Button>
            </div>
        );
    }
}

export default OrderFeedback;