import React, {Component} from 'react';
import CardBlock from './CardBlock';
import axios from 'axios';
import {Button} from 'react-bootstrap';

class HotelHome extends Component {

    state={
        products:[],
        name:''
    }

// {
//     "index_name": "flights_bookings",
//     "type": "flights",
//     "payload": {
//         "from": 0,
//         "size": 10000,
//         "query": {
//             "match":{
//                 "origin_location": "Boston"
//             }
//         }
//     }
// }

    state={
        name:''
    }

    componentWillMount() {
        // axios.get('http://localhost:3002/bookingsApp/hotels/allHotels').then(res=>{
        //     this.setState({
        //         products : res.data
        //                   })
        // }).catch(err=>{
        //     console.log(err);
        // })
        let dataToSubmit =
        {
            "index_name": "hotels_bookings",
            "type": "hotels",
            "payload": {
            "from": 0,
            "size": 10000,
            "query": {
                "match":{
                    "name": this.state.name
                    }
                }
            }
        }

        axios.post('http://localhost:3002/bookingsApp/elastic/search',dataToSubmit).then(res=> {
            var arr = res.data.hits.hits;
            this.setState({
                              products: arr
                          })
        }).catch(err=>{
            console.log(err);
        })
    }

    render() {

        return (
            <div>
                <input name="name"
                       style={{width:'24rem',float:'left'}}
                       type="text" id="name"
                       className="form-control" placeholder="Hotel name"
                       onChange={e => this.handleChange(e)}
                       value={this.state.name}
                       required/>
                <Button variant="primary" onClick={this.handleSearchButton}>Search</Button>
                <CardBlock products={this.state.products} />
            </div>
        );
    }
}

export default HotelHome;