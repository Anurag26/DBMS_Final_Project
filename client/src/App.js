import React from 'react';
// import {Carousel} from 'react-bootstrap';
import {BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
// import LoginRegister from './components/LoginRegister/loginregister';
// import {Image} from 'react-bootstrap';
import Home from './components/Home/home';
import NavBar from './components/Navbar/navbar'
// import LoginRegister from './components/LoginRegister/loginregister'
import LoginRegisterHome from "./components/LoginRegister/loginRegisterHome";

function App() {
  return (
  
    <BrowserRouter>
    <div>
        <NavBar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/loginRegister" component={LoginRegisterHome} />
        </Switch>
    </div>    
    </BrowserRouter>
  );
}

export default App;
