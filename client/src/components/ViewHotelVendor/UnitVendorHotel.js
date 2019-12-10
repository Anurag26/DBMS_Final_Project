import React, {Component} from 'react';
import {Card,Button} from 'react-bootstrap';
import axios from 'axios';

class UnitVendorHotel extends Component {

    state={
        updatePressed:false,
        fullDisplay:true
    }

    toggleUpdate=()=>{
        this.setState({
                updatePressed: !this.state.updatePressed
                      })
    }

    pushUpdate=()=>{

    }

    pushDelete=()=>{
        axios.delete('http://localhost:3002/bookingsApp/').then(res=>{

        }).catch(err=>{

        })
    }

    render() {
        return (
            <div>
                {
                    this.state.fullDisplay?
                        <div>
                            <Card.Header>{this.props.name} </Card.Header>
                            <Card.Text>{this.props.address_street}, {this.props.address_city}, {this.props.country}</Card.Text>
                            <Button variant="danger"> Delete Me</Button>
                            <Button variant="warning" onClick={this.toggleUpdate}> Update</Button>
                            {
                                this.state.updatePressed?
                                <div>
                                    <Button variant="warning" onClick={this.pushUpdate}> Update It</Button>
                                </div> :
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

