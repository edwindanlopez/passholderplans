import React, { Component} from "react";
import "./everyone.css";
import materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import API from "../../utils/API";
import firebase from "../../firebase";

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
        // let key = "-LP3bWQw6heItSbIEBrh";
        let group = JSON.stringify(event.groupName);
        let user = JSON.stringify(event.username);
        let choices = JSON.stringify(event.userChoices);
        console.log(key);

        // IN PROCESS
        let everyonesChoices = firebase.database().ref("events" + key);
        everyonesChoices.on('child_added', (data)=>{
            console.log("This is the data group: " + data.group);
            // displayListing(data.group, data.user, data.choices.val());
        });

        let displayListing = ()=> {

        }
    }

    sendInvite = () => {
        let uniqueKey = this.props.recieveEvent.uniqueKey
        let ref = firebase.database().ref("events/" + uniqueKey);
        ref.once("value")
            .then(function (snapshot) {
                let groupName = snapshot.child("groupName").val();
                let user = snapshot.child("user").val();
                let id = snapshot.child("user/id").val();
                let choices = snapshot.child("user/choices").val();
                let userName = snapshot.child("user/userName").val();
                console.log(snapshot);
                console.log("Group Name: " + groupName + "\n" + "Choices: " + choices);
            });
    }

    render() {
        console.log(this.props);
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
                                <div className="collapsible-body"><span>{this.props.recieveEvent.userChoices}</span></div>
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
                        <button onClick={() => this.sendInvite(this.key)}>
                            Send Invite
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Everyone;