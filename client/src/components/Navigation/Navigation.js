import React, { Component } from "react";
import Materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import "./navigation.css"


class Navigation extends Component {

    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = Materialize.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Passholder Plans</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            {"Welcome: "+ this.props.auth}
                        </li>
                        <li><a onClick = {this.props.handleLogout}>Log Out</a></li>
                    </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    {/* <li><p>{this.props.auth.username}</p></li> */}
                    <li><a onClick = {this.props.handleLogout}>Log Out</a></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;