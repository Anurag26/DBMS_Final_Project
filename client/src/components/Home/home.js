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
                <Link to="/hotels"> <button type="button" class="btn btn-primary btn-lg">Book Hotels</button></Link>
            </div>
        );
    }
}

export default Home;