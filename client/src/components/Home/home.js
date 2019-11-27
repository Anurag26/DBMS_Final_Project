import React, { Component } from 'react';
import img1 from '../../images/hotel.jpg';

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
                
            </div>
        );
    }
}

export default Home;