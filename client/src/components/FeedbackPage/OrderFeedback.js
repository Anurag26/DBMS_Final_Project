import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
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
                show:false
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
                <Button variant="primary" onClick={this.handleSearchButton}>Search</Button>

                {/*{*/}
                {/*    this.state.flights.length!=0?*/}
                {/*    <FlightBlock*/}
                {/*    flights={this.state.flights}*/}
                {/*    />*/}
                {/*    :*/}
                {/*    null*/}
                {/*}*/}
                {/*{*/}
                {/*    this.state.search?*/}
                {/*    <div>No search results</div>*/}
                {/*    :*/}
                {/*    null*/}
                {/*}*/}
            </div>
        );
    }
}

export default OrderFeedback;