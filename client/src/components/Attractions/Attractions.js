import React, { Component } from "react";
import "./attractions.css";
import Materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

import Navigation from "../Navigation";
import Time from '../Time'
import API from "../../utils/API";

const selectedAmount = 1;

class Attractions extends Component {
    state = {
        waitTimes: []
    };

    componentDidMount() {
        this.waitTimesInfo();
    }

    waitTimesInfo = () => {
        API.getWaitTimes()
            .then(res => {
                this.setState({
                    waitTimes: res.data
                })
            })
            .catch(err => console.log(err));    
    };

    render() {
        return (
            <div>

                <div className="container">
                    <h1>Pick up to 5 attractions you'd like to go for the day.</h1>
                    <a className="waves-effect waves-light btn-large">{selectedAmount}</a>
                    <div className="row">
                        {this.state.waitTimes.map(waitTime => (
                            <Time
                                key={waitTime.id}
                                _id={waitTime._id}
                                name={waitTime.name}
                                waitTime={waitTime.waitTime}
                                status={waitTime.status}
                            />
                        
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};

export default Attractions;