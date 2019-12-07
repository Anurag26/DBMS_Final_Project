import React from 'react';
// import {Carousel} from 'react-bootstrap';
import {BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
// import LoginRegister from './components/LoginRegister/loginregister';
// import {Image} from 'react-bootstrap';
import Home from './components/Home/home';
import NavBar from './components/Navbar/navbar'
import Hotels from './components/BookHotels/hotelHome'
import Flights from './components/BookFlights/bookFlights'
import Feedback from './components/FeedbackPage/feedbackPage';
// import LoginRegister from './components/LoginRegister/loginregister'
import LoginRegisterHome from "./components/LoginRegister/loginRegisterHome";
import Admin from './components/Admin/admin';
import User from './components/User/user';
import AddHotel from './components/AddHotel/addHotel';
import HotelDescription from './components/BookHotels/HotelDescription';

function App() {
  return (
  
    <BrowserRouter>
    <div>
        <NavBar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/hotelAdd" component={AddHotel} />
            <Route path="/loginRegister" component={LoginRegisterHome} />
            <Route path="/hotels" component={Hotels} />
            <Route path="/flights" component={Flights} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/hotel_detail/:id" component={HotelDescription} />
            <Route path="/master-control" component={Admin} />
            <Route path="/myprofile" component={User} />
        </Switch>
    </div>    
    </BrowserRouter>
  );
}

export default App;
