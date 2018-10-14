import React, { Component, PropTypes } from "react";
import "./attractions.css";
import Materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

import Navigation from "../Navigation";
import Time from '../Time'
import API from "../../utils/API";

class Attractions extends Component {

    state = {
        waitTimes: [],
        picked: [],
        totalPicks: 0
    };

    //Function that allows the time component to update the state.picked key.
    picked = (rideId, active, event) => {
        //Pass the this to other funcitons inside
        const that = this;
        
        //Store the state's picked array here
        let pickedArray = that.state.picked;
        let totalPicked = pickedArray.length;
        let idIsInArray = pickedArray.includes(rideId);

        //Remove the picked ride ID to the picked array in the state
        let removePick = (pickedArray, rideId) => {
            if(pickedArray.length <= 1){
                return pickedArray = [];
            } else if(pickedArray.length > 1){
                return pickedArray.filter((ele) => {
                    return ele != rideId;
                });
            }
        }
        
        //If rideId is NOT the array and picked.length < 6, and turning toggle ON, then add it to the array.
        if(!idIsInArray && totalPicked<5 && active){
            pickedArray.push(rideId);
            that.setState({
                picked: pickedArray
            });
            console.log(that.state.picked);
        //If rideId IS in the array and turning toggle OFF, then remove it from the array.
        } else if(idIsInArray && !active) { 
            let newArr = removePick(pickedArray, rideId);
            //Promise function to verify true change to the state
            that.setState({
                picked: newArr
            });
            console.log(newArr);
        //User has selected too many deactivate the toggle
        } else if(!idIsInArray && totalPicked>=5 && active) {
            let toggle = event.target;
            let returnToggle = event.target.checked = false;
            toggle.onchange = () => {
                console.log("Trying to re run the toggle here: ");
                return returnToggle;
            };
        };
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
                    <h3>Pick up to 5 attractions you'd like to go for the day.</h3>

                    <div className="counter-dial"><h2>{this.state.picked.length}</h2></div>
                    {

                    }

                    <div className="row">
                        {this.state.waitTimes.map((waitTime, index) => (
                            <Time
                                key={waitTime.id}
                                // _id={waitTime._id}
                                rideId={waitTime.id}
                                choice={this.picked}
                                name={waitTime.name}
                                id={"switch" + index}
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