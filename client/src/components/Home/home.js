import React, { Component } from 'react';
import img1 from '../../images/hotel.jpg';
import LoginRegister from "../LoginRegister/loginregister";
import ProductHomePageForm from "../ProductHomePage/productHomePageForm";

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
                <ProductHomePageForm />
            </div>
        );
    }
}

export default Home;