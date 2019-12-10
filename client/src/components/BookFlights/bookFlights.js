import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import FlightBlock from './FlightBlock';
import axios from 'axios';

class BookFlights extends Component {

    state={
        from:'',
        to:'',
        dateOfFlight:'',
        flights:[],
        search:false
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
                      })
    }

    handleSearchButton=()=>{
        let dataToSubmit =
            {
                "index_name": "flights_bookings",
                "type": "flights",
                "payload": {
                "from": 0,
                    "size": 10000,
                    "query": {
                    "bool": {
                        "must": [
                            {
                                "match": {
                                    "origin_location": this.state.from
                                }
                            },
                            {
                                "match": {
                                    "destination_location": this.state.to
                                }
                            },
                            {
                                "match": {
                                    "dateTakeOff": this.state.dateOfFlight
                                }
                            }
                        ]
                    }
                }
            }
            }

        axios.post('http://localhost:3002/bookingsApp/elastic/search',dataToSubmit).then(res=> {
            var arr = {...res};
            this.setState({
                flights: arr.data.hits.hits
                          })
        }).catch(err=>{
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <input name="from"
                       style={{width:'15rem',float:'left'}}
                       type="text" id="from"
                       className="form-control" placeholder="Source"
                       onChange={e => this.handleChange(e)}
                       value={this.state.from}
                       required/>
                <input name="to"
                       type="text" id="to"
                       style={{width:'15rem',float:'left'}}
                       className="form-control" placeholder="Destination"
                       onChange={e => this.handleChange(e)}
                       value={this.state.to}
                       required/>

                <input name="dateOfFlight"
                       type="date" id="dateOfFlight"
                       style={{width:'15rem',float:'left'}}
                       className="form-control" placeholder="Date: YYYY-MM-DD"
                       onChange={e => this.handleChange(e)}
                       value={this.state.dateOfFlight}
                       required/>

                <Button variant="primary" onClick={this.handleSearchButton}>Search</Button>

                {
                    this.state.flights.length!=0?
                    <FlightBlock
                    flights={this.state.flights}
                    />
                    :
                    null
                }
                {
                    this.state.search?
                    <div>No search results</div>
                    :
                    null
                }
            </div>
        );
    }
}

export default BookFlights;