import React, { Component} from "react";
import "./everyone.css";
import materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import axios from 'axios';
import Time from '../Time'
import API from "../../utils/API";
import firebase from "../../firebase";
import Share from "../Share/Share"

class Everyone extends Component {

    state = {
        placehere: ""
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
                    <h2>This is everyone's component</h2>
                    <Share />
                </div>
            </div>
        );
    }
};

export default Everyone;