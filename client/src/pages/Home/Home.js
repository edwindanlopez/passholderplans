import React, { Component } from "react";
import "./home.css";
import Navigation from '../../components/Navigation';
import Materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

import Attractions from "../../components/Attractions";
import Dinning from "../../components/Dinning";

class Home extends Component{

    componentDidMount() {
		const elem = document.querySelector('.tabs');
     	const options = {}
        const instance = Materialize.Tabs.init(elem, options);
    }

	render() {
        return(
            <div>  
                <Navigation handleLogout={this.props.handleLogout} auth={this.props.auth.username}/>

                <div className="container">

					<div className="row">
						<div className="col s12 centered-tabs">
							<ul className="tabs">
								<li className="tab col s3"><a href="#attractions">Attractions</a></li>
								<li className="tab col s3"><a href="#dinning">Dinning</a></li>
							</ul>
						</div>
					</div>

					<div className="data-shell">
						<div id="attractions" className="col s12">
							<Attractions auth={this.props.auth}/>
						</div>
						<div id="dinning" className="col s12">
							<Dinning />
						</div>
					</div>

                </div>
            </div>
        );  
	}

};

export default Home;