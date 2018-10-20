import React, { Component} from "react";
import "./everyone.css";
import materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import firebase from "../../firebase";

class Everyone extends Component {

    state = {
        currentUser: []
    };

    componentDidMount() {
        //Generate firebase data
        setTimeout(()=>{ 
            this.generate();
            // this.listenForListing();
            //Materialize accordion
                var elems = document.querySelectorAll('.collapsible');
                var instances = materialize.Collapsible.init(elems,{});
        }, 2000);
    }

    generate = () => {
        setTimeout(()=>{ 
            //Initiate Materialize
            var elems = document.querySelectorAll('.collapsible');
            var instances = materialize.Collapsible.init(elems,{});
        }, 2000);
        //Grab the unique event key to populate the group name
        console.log("User id coming from home: " + this.props.creds.userId)
        console.log("Username coming from home: " + this.props.creds.username)
        console.log("Latestevent coming from home: " + this.props.recieveEvent)

        const event = this.props.recieveEvent;
        //Target the unique event key for referencing in firebase
        let groupnameRef = firebase.database().ref("events/" + event);
        groupnameRef.once("value").then((snapshot)=> { 
            
            let groupName =  snapshot.val().groupName;
            const userId = this.props.creds.userId;
            const username = this.props.creds.username;
            
            //Do another firebase call to get the user choices
            let userChoiceRef = firebase.database().ref("users/" + userId);
            userChoiceRef.once("value").then((snapshot)=>{
                //Store user choices
                let choices= snapshot.val().choices;

                //Trigger list open and close
                let expandList = ()=> {
                    document.addEventListener('DOMContentLoaded', function() {
                        var elem = document.querySelector("popable");
                        let instance = new materialize.Collapsible.getInstance(elem,{});
                        instance.open();
                    });
                }

                const displayOnPage = () => {
                    //Display that data on the page
                    let listShell = document.getElementById("list-holder");
                    let ul = document.createElement("ul");
                    ul.setAttribute("class","collapsible popout");
                    //Call Trigger function here
                    ul.addEventListener('click', ()=> {
                        expandList();
                    }, false)
                    let li = document.createElement("li")
                    li.setAttribute("id", "user-list-item popable");
                    li.setAttribute("class", "active");
                    let header = document.createElement("div")
                    header.setAttribute("class", "collapsible-header");
                    let body = document.createElement("div")
                    body.setAttribute("class", "collapsible-body");
                    //Place user name into the header portion of div
                    header.innerText = username;
                    //Place user choices into body portion of div
                    body.innerText = choices;
                    //Append both header & body into the list item
                    li.appendChild(header);
                    li.appendChild(body);
                    //Append list item into unordered list
                    ul.appendChild(li);
                    //Finally, append unordered list into div shell where all will be populated
                    listShell.appendChild(ul);
                }
                displayOnPage();

            });//userchoice end
        })        
    }

    listenForListing = ()=> {
        setTimeout(()=>{ 
            //Initiate Materialize
            var elems = document.querySelectorAll('.collapsible');
            var instances = materialize.Collapsible.init(elems,{});
        }, 1000);

        const event = this.props.recieveEvent;
        //Target the unique event key for referencing in firebase
        let groupnameRef = firebase.database().ref("events/" + event);
        groupnameRef.on("value", (snapshot)=> { 

            //For each user id in the event branch, get the username and their choices
            snapshot.forEach((childsnapshot)=>{
                const userId = childsnapshot.key;

                //make another snapshot call yet again, but this time for the users branch
                let userNameRef = firebase.database().ref("users/" + userId);
                userNameRef.once("value").then((grandchildSnap)=> {

                    let user = JSON.stringify(grandchildSnap.val().username);
                    let username = user;
                    
                    let choosy = JSON.stringify(grandchildSnap.val().choices);
                    let choices = choosy;

                    //Trigger list open and close
                    let expandList = ()=> {
                        document.addEventListener('DOMContentLoaded', function() {
                            var elem = document.querySelector("popable");
                            let instance = new materialize.Collapsible.getInstance(elem,{});
                            instance.open();
                        });
                    }             

                    const displayOnPage = () => {
                        //Display that data on the page
                        let listShell = document.getElementById("list-holder");
                        let ul = document.createElement("ul");
                        ul.setAttribute("class","collapsible popout");
                        //Call Trigger function here
                        ul.addEventListener('click', ()=> {
                            expandList();
                        }, false)
                        let li = document.createElement("li")
                        li.setAttribute("id", "user-list-item popable");
                        let header = document.createElement("div")
                        header.setAttribute("class", "collapsible-header");
                        let body = document.createElement("div")
                        body.setAttribute("class", "collapsible-body");
                        //Place user name into the header portion of div
                        header.innerText = username;
                        //Place user choices into body portion of div
                        body.innerText = choices;
                        //Append both header & body into the list item
                        li.appendChild(header);
                        li.appendChild(body);
                        //Append list item into unordered list
                        ul.appendChild(li);
                        //Finally, append unordered list into div shell where all will be populated
                        listShell.appendChild(ul);
                    }
                    displayOnPage();
                    

                    
                })
            })
        });
    }

    render(content) {
        return (
            <div>
                <div className="container">
                    <div className="list-shell">
                        <div className="row">
                            <h2>This is the very beginning of your groups day</h2>
                            <h6>Click the share button to invite friends, and see which ride they'd like to go on</h6>
                        </div>
                        <div id="list-holder">{/*Items populated dynamically here*/}</div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Everyone;