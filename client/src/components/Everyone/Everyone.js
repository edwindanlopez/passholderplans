import React, { Component} from "react";
import "./everyone.css";
import materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import API from "../../utils/API";
import firebase from "../../firebase";

class Everyone extends Component {

    state = {
        currentUser: []
    };

    componentDidMount() {
        this.waitTimesInfo();
        //Materialize accordion
        var elems = document.querySelectorAll('.collapsible');
        var instances = materialize.Collapsible.init(elems,{});
        //Generate firebase data
        setTimeout(()=>{ 
            this.generate();
        }, 2000);
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

        //Grab the unique event key to populate the group name
        

        //Grab the user key to populate the choices and username

        //Display that data on the page


        // const event  = this.props.recieveEvent;
        // let key = JSON.stringify(event.uniqueKey);
        // let cleanKey = key.replace(/['"]+/g, '');

        // console.log(event);

        // let group = JSON.stringify(event.groupName);
        // let user = JSON.stringify(event.username);
        // let choices = JSON.stringify(event.userChoices);

        //Firebase call and logic to populate things
        let everyonesChoices = firebase.database().ref("events/" + cleanKey);
        everyonesChoices.on("value", (snapshot)=>{
            
            console.log("This is the snapshot: " + JSON.stringify(snapshot.val()));
            //Loop through the data
            snapshot.forEach((childSnap)=>{
                //User input data
                let listShell = document.getElementById("list-holder");
                //Group key
                let groupKey = childSnap.key;
                console.log("Group key: " + groupKey);
                //Reference the unique user key
                let key2ref = everyonesChoices.child(childSnap.key);
                console.log("User key: " + key2ref);
                //Pull the information nested in the unique user key
                key2ref.once("value", (snapshot)=>{ 
                    snapshot.forEach((child)=>{
                        let childItem = []
                        childItem.push(child.val());
                        // console.log(child.key+": " + child.val());                        
                        // console.log("Child val: " + child.val());                        
                        
                    }).then((childItem)=>{
                        console.log(JSON.stringify(childItem));
                        
                    })



                    // let usersGroup = childSnap.group;
                    // let person = childSnap.user;
                    // console.log("Second User info: " + JSON.stringify(userInfo));
                    // //HTML tags for the loop
                    // let ul = document.createElement("ul").setAttribute("className","collapsible popout");
                    // let userListItem = document.createElement("li").setAttribute("id","user-list-item");
                    // let header = document.createElement("div").setAttribute("className","collapsible-header");
                    // let body = document.createElement("div").setAttribute("className","collapsible-body");
                    // //Place user name into the header portion of div
                    // header.innerText = person;
                    // //Place user choices into body portion of div
                    // body.innerText = chosen;
                    // //Append both header & body into the list item
                    // userListItem.appendChild(header);
                    // userListItem.appendChild(body);
                    // //Append list item into unordered list
                    // ul.appendChild(userListItem);
                    // //Finally, append unordered list into div shell where all will be populated
                    // listShell.appendChild(ul);


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