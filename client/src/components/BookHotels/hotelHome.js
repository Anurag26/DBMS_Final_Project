import React, {Component} from 'react';
import CardBlock from './CardBlock';
import axios from 'axios';

class HotelHome extends Component {

    state={
        products:[]
    }

    componentWillMount() {
        axios.get('http://localhost:3002/bookingsApp/hotels/allHotels').then(res=>{
            this.setState({
                products : res.data
                          })
        }).catch(err=>{
            console.log(err);
        })
    }

    render() {

        return (
            <div>
                <CardBlock products={this.state.products} />
            </div>
        );
    }
}

export default HotelHome;