import React, { Component } from 'react';
import img1 from '../../images/mix.jpg';
import LoginRegister from "../LoginRegister/loginregister";
import {Link} from 'react-router-dom';

// import ProductHomePageForm from "../ProductHomePage/productHomePageForm";

class Home extends Component {


    render() {
        return (
            <div  style={{
                backgroundImage: `url(${img1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition:'center center',
                backgroundAttachment: 'fixed',
                height: `${window.innerHeight}px`
              }}>
                {/*<ProductHomePageForm />*/}
                <Link to="/hotels"> <button style={{float:'left',marginTop: `${20}%`,marginLeft: `${15}%`}} type="button" class="btn btn-warning btn-lg">Book Hotels</button></Link>
                <Link to="/flights"> <button style={{float:'right',marginTop: `${20}%`,marginRight: `${15}%`}} type="button" class="btn btn-success btn-lg">Book Flights</button></Link>
            </div>
        );
    }
}

export default Home;