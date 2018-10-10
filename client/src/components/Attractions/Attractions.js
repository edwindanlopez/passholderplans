import React, { Component } from "react";
import "./attractions.css";
import Materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

import Navigation from "../Navigation";
import Time from '../Time'
import API from "../../utils/API";

class Attractions extends Component {
    state = {
        waitTimes: []
    };

    componentDidMount() {
        this.waitTimesInfo();
        console.log(this.waitTimes);
    }

    waitTimesInfo = () => {
        API.getWaitTimes()
            .then(res => {
                this.setState({
                    waitTimes: res.data
                })
                console.log("This is logging the res.data" + res);
            })
            .catch(err => console.log(err));    
    };


    render() {
        return (
            <div>

                <div className="container">
                    <h1>These are the attractions that you're seeing now</h1>
                    {this.state.waitTimes.map(waitTime => (
                        <Time
                            key={waitTime._id}
                            _id={waitTime._id}
                            name={waitTime.name}
                            waitTime={waitTime.waitTime}
                            status={waitTime.status}
                        />
                    
                    ))}
                </div>
            </div>
        );
    }
};

export default Attractions;