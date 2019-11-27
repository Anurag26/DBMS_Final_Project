import React from 'react';
// import {Carousel} from 'react-bootstrap';
import {BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
// import LoginRegister from './components/LoginRegister/loginregister';
// import {Image} from 'react-bootstrap';
import Home from './components/Home/home';
import NavBar from './components/Navbar/navbar'
import Hotels from './components/BookHotels/hotelHome'
import Flights from './components/BookFlights/bookFlights'
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
            <Route path="/hotels" component={Hotels} />
            <Route path="/flights" component={Flights} />
        </Switch>
    </div>    
    </BrowserRouter>
  );
}

export default App;
