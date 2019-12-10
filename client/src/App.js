import React from 'react';
// import {Carousel} from 'react-bootstrap';
import {BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
// import LoginRegister from './components/LoginRegister/loginregister';
// import {Image} from 'react-bootstrap';
import Home from './components/Home/home';
import NavBar from './components/Navbar/navbar'
import Hotels from './components/BookHotels/hotelHome'
import Flights from './components/BookFlights/bookFlights'
import OrderFeedback from './components/FeedbackPage/OrderFeedback';
// import LoginRegister from './components/LoginRegister/loginregister'
import LoginRegisterHome from "./components/LoginRegister/loginRegisterHome";
import User from './components/User/user';
import AddHotel from './components/AddHotel/addHotel';
import AddFlight from './components/AddFlight/addFlight';
import HotelDescription from './components/BookHotels/HotelDescription';
import MyCart from './components/MyCart/mycart';
import ManageUsers from './components/Admin/manageUsers';
import MyOrders from './components/MyOrders/myorder';
import Bookings from './components/AllBookings/bookings';
import VendorHotels from './components/ViewHotelVendor/vendorHotels';
import VendorFlights from './components/ViewFlightVendor/vendorFlights';

function App() {
  return (
  
    <BrowserRouter>
    <div>
        <NavBar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/hotelAdd" component={AddHotel} />
            <Route path="/loginRegister" component={LoginRegisterHome} />
            <Route path="/myflights" component={VendorFlights} />
            <Route path="/myorders" component={MyOrders} />
            <Route path="/addFlight" component={AddFlight} />
            <Route path="/hotels" component={Hotels} />
            <Route path="/usersCrud" component={ManageUsers} />
            <Route path="/flights" component={Flights} />
            <Route path="/allBookings" component={Bookings} />
            <Route path="/myhotels" component={VendorHotels} />
            {/*<Route path="/feedback" component={Feedback} />*/}
            <Route path="/feedback" component={OrderFeedback} />
            <Route path="/mycart" component={MyCart} />
            <Route path="/hotel_detail/:id" component={HotelDescription} />
            <Route path="/myprofile" component={User} />
        </Switch>
    </div>    
    </BrowserRouter>
  );
}

export default App;
