import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap';
import axios from 'axios';

class UnitVendorHotel extends Component {

    state={
        updatePressed:false,
        fullDisplay:true,
        name: '',
        displayName:'',
        updateDone:true
    }

    toggleUpdate=()=>{
        this.setState({
                updatePressed: !this.state.updatePressed
                      })
    }

    pushUpdate=()=>{

        let dataToSubmit ={
            name: this.state.name
        }
        axios.put('http://localhost:3002/bookingsApp/hotels/'+this.props._id+'/update',dataToSubmit).then(res=>{
            this.setState({
                            displayName: this.state.name,
                            name:''
                          })
            this.toggleUpdate()
        }).catch(err=>{
            console.log(err)
        })
    }

    pushDelete=()=>{
        axios.delete('http://localhost:3002/bookingsApp/hotels/'+this.props._id+'/delete').then(res=>{
            this.setState({
                fullDisplay:false
                          })
        }).catch(err=>{
            console.log(err)
        })
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
                      })
    }

    componentWillMount() {
        this.setState({
            displayName: this.props.name
                      })
    }

    render() {
        return (
            <div>
                {
                    this.state.fullDisplay?
                        <div>
                            <Card.Header>{this.state.displayName} </Card.Header>
                            <Card.Text>{this.props.address_street}, {this.props.address_city}, {this.props.country}</Card.Text>
                            <Button variant="danger" onClick={this.pushDelete} > Delete Me</Button>
                            <Button variant="warning" onClick={this.toggleUpdate}> Update</Button>
                            {
                                this.state.updatePressed?
                                this.state.updateDone?
                                <div>
                                    <input name="name"
                                           type="text" id="inputupdated"
                                           className="form-control" placeholder="Enter new Name!"
                                           onChange={e => this.handleChange(e)}
                                           value={this.state.name}
                                           required/>
                                    <Button variant="warning" onClick={this.pushUpdate}> Update It</Button>
                                <div>
                                </div>
                                </div>
                                :
                                null
                                                        :
                                null
                            }
                        </div>
                    :
                    null
                }
            </div>
        );
    }
}

export default UnitVendorHotel;

