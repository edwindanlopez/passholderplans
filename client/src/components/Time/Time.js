import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./time.css";


class Time extends Component{

    state = {
        picked: [],
        switch: false,
        id:0
    };

    toggleSwitch = (event) => {
        //Store id value to pass as prop to parent in the input callback
        let rideId = event.target.value;
        let active = event.target.checked;

        const parentFunction = () =>{
            this.props.choice(rideId, active, event)
        }
        //Immediately call this
        parentFunction();
    }

    render(props) {
        return (
            <div className="col m12 l6">
                <ul className="collection">
                    <li className="collection-item avatar">
                        <div className="list-content">
                            <i className="material-icons circle">drag_handle</i>
                            <span className="title">{this.props.name}</span>
                            <p id="rideWaitTime">{"Wait Time: " + this.props.waitTime}</p>
                            <p id="rideStatus">{"Status: " + this.props.status}</p>
                            <div className="secondary-content">
                                <div className="switch">
                                    <label>
                                        {/* Off */}
                                        <input id={this.props.id} type="checkbox" value={this.props.name} onClick={this.toggleSwitch}/>
                                        <span className="lever"></span>
                                        {/* On */}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Time;