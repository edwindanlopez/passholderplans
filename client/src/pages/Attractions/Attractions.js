import React, { Component } from "react";
import "./attractions.css";
import Navigation from '../../components/Navigation';


class Attractions extends Component {

	render () {
        return(
            <div>  
                <Navigation handleLogout={this.props.handleLogout} auth={this.props.auth.username}/>

                <div className="container">
                    <h1>These are the attractions that you're seeing now</h1>
                    <p>{this.props.auth.username}</p>
                    
                </div>
            </div>
        );    
    }
};

export default Attractions;