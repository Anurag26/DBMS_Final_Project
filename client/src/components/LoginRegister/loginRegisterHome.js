import React, {Component} from 'react';
import img1 from "../../images/air.jpg";
import LoginRegister from "./loginregister";

class LoginRegisterHome extends Component {
    render() {
        return (
            <div style={{
                backgroundImage: `url(${img1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition:'center center',
                backgroundAttachment: 'fixed',
                height: `${window.innerHeight}px`
            }}>
                <LoginRegister />
            </div>
        );
    }
}

export default LoginRegisterHome;