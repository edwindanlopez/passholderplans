import React, { Component} from "react";
import "./everyone.css";
import materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import axios from 'axios';
import Time from '../Time'
import API from "../../utils/API";
import firebase from "../../firebase";
import Share from "../Share"

class Everyone extends Component {

    state = {
        placehere: ""
    };

    componentDidMount() {
        this.waitTimesInfo();
        //Materialize accordion
        var elems = document.querySelectorAll('.collapsible');
        var instances = materialize.Collapsible.init(elems,{});
        //Generate firebase data
        setTimeout(()=>{ 
            this.generate();
        }, 1000);
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

    generate = () => {
        const event  = this.props.recieveEvent;
        let key = JSON.stringify(event.uniqueKey);
        let group = JSON.stringify(event.groupName);
        let user = JSON.stringify(event.username);
        let choices = JSON.stringify(event.userChoices);
        console.log("This is the Unique Key!!!!!!" + key);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="list-shell">
                        <h2>This is the very beginning of your groups day</h2>
                        <h6>Click the share button to invite friends, and see which ride they'd like to go on</h6>
                        <div className="collab-list">
                            <ul className="collapsible popout">
                                <li>
                                <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                            </ul>
                        </div>
                        <Share event={this.props.event} key={this.key} group={this.group} choices={this.choices}/>
                    </div>
                </div>
            </div>
        );
    }
};

export default Everyone;