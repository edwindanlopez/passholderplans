import React, { Component } from "react";
import "./share.css";
import Materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import firebase from '../../firebase';
import Everyone from "../Everyone";

const Share = (props) => {

    //Pull Group info from firebase
    // groupName: groupName,
        // user : {
        //     id: userId,
        //     choices : pickedArray,
        //     userName: userName
        // }
    const retrieveEvent = (uniqueKey) => {
        let ref = firebase.database().ref("events/" + uniqueKey);
        ref.once("value")
            .then(function (snapshot) {
                let groupName = snapshot.child().child(uniqueKey + "groupName").val();
                let user = snapshot.child("user").val();
                let id = snapshot.child("user/id").val();
                let choices = snapshot.child("user/choices").val();
                let userName = snapshot.child("user/userName").val();
                
                console.log("Group Name: " + groupName + "\n" + "Choices: " + choices);
            });
    }

    return (
        <button onClick={() => retrieveEvent(this.props.event)}>
            Send Invite
        </button>
    )
}

export default Share;