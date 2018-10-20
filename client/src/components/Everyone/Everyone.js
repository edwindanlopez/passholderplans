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
        groupnameRef.on("value", (snapshot)=> { 
            
            let groupName =  snapshot.val().groupName;
            const userId = this.props.creds.userId;
            const username = this.props.creds.username;
            
            //Do another firebase call to get the user choices
            let userChoiceRef = firebase.database().ref("users/" + userId);
            userChoiceRef.on("value",(snapshot)=>{
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

            })
            


        })

        


        //Firebase call and logic to populate things
        // let everyonesChoices = firebase.database().ref("events/" + cleanKey);


        // everyonesChoices.on("value", (snapshot)=>{
            
        //     console.log("This is the snapshot: " + JSON.stringify(snapshot.val()));
        //     //Loop through the data
        //     snapshot.forEach((childSnap)=>{
        //         //User input data
        //         
        //         //Group key
        //         let groupKey = childSnap.key;
        //         console.log("Group key: " + groupKey);
        //         //Reference the unique user key 
        //         let key2ref = everyonesChoices.child(childSnap.key);
        //         console.log("User key: " + key2ref);
        //         //Pull the information nested in the unique user key
        //         key2ref.once("value", (snapshot)=>{ 
        //             snapshot.forEach((child)=>{
        //                 let childItem = []
        //                 childItem.push(child.val());
        //                 // console.log(child.key+": " + child.val());                        
        //                 // console.log("Child val: " + child.val());                        
                        
        //             }).then((childItem)=>{
        //                 console.log(JSON.stringify(childItem));
                        
        //             })



        //             let usersGroup = childSnap.group;
        //             let person = childSnap.user;
        //             console.log("Second User info: " + JSON.stringify(userInfo));
                    


        //         })
                
                
        //     }) 
        // });//End everyones choices
        
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