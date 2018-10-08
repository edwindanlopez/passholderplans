import React, { Component } from "react";
import Materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import "./navigation.css"


class Navigation extends Component {

    componentDidMount() {
        //Materialize mobile side navigation
        const sideElem = document.querySelector(".sidenav");
        const sideNav = Materialize.Sidenav.init(sideElem, {
            edge: "left",
            inDuration: 250
        });
        //Chip object
        const chip = {
            tag: 'chip content',
            image: '/images/female-user.png', //optional
        };
        //Materialize chips
        document.addEventListener('DOMContentLoaded', function() {
            const chipElem = document.querySelectorAll('.chips');
            const chips = Materialize.Chips.init(chipElem, chip);
            chips;
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
                            {/* {"Welcome: "+ this.props.auth} */}
                            <div className="chip">
                                <img src="../../../public/images/female-user.png"/>
                                Jane Doe
                            </div>
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