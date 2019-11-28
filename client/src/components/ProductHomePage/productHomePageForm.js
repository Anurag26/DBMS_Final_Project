import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class ProductHomePageForm extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-md-10 col-lg-10 mx-auto">
                            <div className="card product-card">
                                <div className="row card-buttons">
                                    <div className="col-md-5 option-icons" style={{margin:'2%', padding:'1%'}}>
                                        <Button type="button" className="btn btn-outline-info"><i
                                            className="material-icons"

                                            >flight_takeoff</i></Button>
                                        <Button type="button" className="btn btn-outline-info"><i
                                            className="material-icons"
                                            >hotel</i></Button>
                                    </div>
                                </div>
                                <div className="row flight-routes">
                                    <div className="col-md-5 origin-city">
                                        <input type="text" id="origin-city" className="form-control"
                                               placeholder="Origin City" required autoFocus
                                        />
                                    </div>
                                    <div className="col-md-5 destination-city">
                                        <input type="text" id="destination-city"
                                               className="form-control"
                                               placeholder="Destination City" required autoFocus />
                                    </div>
                                    <div className="col-md-2"></div>
                                </div>

                                <div className="row flight-dates">
                                    <div className="col-md-2 departure-date">
                                        <div className="input-group date">
                                            <input type="text" className="form-control"
                                                   id="js-date" />
                                                <div className="input-group-addon">
                                                    <span className="glyphicon glyphicon-th"></span>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 return-date">
                                        <div className="input-group date" data-provide="datepicker">
                                            <input type="text" className="form-control" />
                                                <div className="input-group-addon">
                                                    <span className="glyphicon glyphicon-th"></span>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductHomePageForm;