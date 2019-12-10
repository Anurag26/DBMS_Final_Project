import React, {Component} from 'react';
import axios from 'axios';
import {Card,Button} from 'react-bootstrap';

class UnitVendorFlight extends Component {

    state={
        updatePressed:false,
        fullDisplay:true,
        airline: '',
        displayAirline:'',
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
        axios.put('http://localhost:3002/bookingsApp/flights/'+this.props._id+'/update',dataToSubmit).then(res=>{
            this.setState({
                              displayAirline: this.state.airline,
                              airline:''
                          })
            this.toggleUpdate()
        }).catch(err=>{
            console.log(err)
        })
    }

    pushDelete=()=>{
        axios.delete('http://localhost:3002/bookingsApp/flights/'+this.props._id+'/delete').then(res=>{
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
                          displayAirline: this.props.airline
                      })
    }

    render() {
        return (
            <div>
                {
                    this.state.fullDisplay?
                    <div>
                        <Card.Header>{this.state.displayAirline} </Card.Header>
                        <Card.Text>{this.props.origin_location} </Card.Text>
                        <Card.Text>{this.props.destination_location} </Card.Text>
                        <Button variant="danger" onClick={this.pushDelete} > Delete Me</Button>
                        <Button variant="warning" onClick={this.toggleUpdate}> Update</Button>
                        {
                            this.state.updatePressed?
                            this.state.updateDone?
                            <div>
                                <input name="airline"
                                       type="text" id="inputupdated"
                                       className="form-control" placeholder="Enter new AirLine Name!"
                                       onChange={e => this.handleChange(e)}
                                       value={this.state.airline}
                                       required/>
                                <Button variant="success" onClick={this.pushUpdate}> Update It</Button>
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
                    <div> Loading......</div>
                }
            </div>
        );
    }
}

export default UnitVendorFlight;