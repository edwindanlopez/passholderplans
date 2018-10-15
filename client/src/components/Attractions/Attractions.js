import React, { Component} from "react";
import "./attractions.css";
import materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import axios from 'axios';
import Time from '../Time'
import API from "../../utils/API";
import firebase from "../../firebase";

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

    commitChoices = () =>{
        //Materialize modal trigger
        let options = {inDuration: 250}
        let elems = document.querySelectorAll('.modal');
        let instances = materialize.Modal.init(elems, options);
        let elem = document.getElementById('modal1');
        let instance = materialize.Modal.getInstance(elem);
        //Open modal
        instance.open();
    }

    sendChoices = () => {

        const fetchId = "";//Hit backend route to get the current logged in user's id 

        //Store data for firebase and mongo
        let groupName = document.getElementById("group_name").value;
        let userId = fetchId;
        let userName = this.props.auth;
        let pickedArray = this.state.picked;

        console.log("This is the group name: " + groupName);
        console.log("UserId: " + userId);
        console.log("Username: " + userName);
        console.log("Picked array: " + pickedArray);

        //Push to firebase
        const createEvent= ()=> {
            firebase.database().ref("events/").push({
                groupName: groupName,
                user : {
                    id: userId,
                    choices : pickedArray,
                    userName: userName
                }
            });

        }
        createEvent();

        //Materialize modal trigger
        let options = {inDuration: 250}
        let elems = document.querySelectorAll('.modal');
        let instances = materialize.Modal.init(elems, options);        
        let elem = document.getElementById('modal1');
        let instance = materialize.Modal.getInstance(elem);
        //Close modal
        instance.close();
    }

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
                    {/*<!-- Modal Trigger -->*/}
                    <div className="col s12">
                        <a className="waves-effect waves-light btn-large send-btn" onClick={this.commitChoices}><i className="material-icons right">navigate_next</i>Create my Day</a>
                    </div>
                    {/*<!-- Modal Structure -->*/}
                    <div id="modal1" className="modal bottom-sheet">
                        <div className="modal-content">
                        <h4>Your planning is half-way done!</h4>
                        <p>Share this with your friends in the next screen, and we'll take care of coordinating thigns for you.</p>
                        <div className="input-shell">
                            <div className="input-field col s6">
                            <input className="center" placeholder="Mickey's Squad" id="group_name" type="text"/>
                            <label className="active">ENTER YOUR GROUPS NAME</label>
                            </div>
                        </div>
                        </div>
                        <div className="modal-footer">
                            <div className="col s12">
                                <a className="waves-effect waves-light btn-large send-btn" onClick={this.sendChoices}><i className="material-icons right">navigate_next</i>Let's do it!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Attractions;