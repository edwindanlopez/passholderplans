import React, { Component } from "react";
import "./home.css";
import Navigation from '../../components/Navigation';
import Materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

import Attractions from "../../components/Attractions";
import Dining from "../../components/Dining";
import ParkSelect from "../../components/ParkSelect";

class Home extends Component{
	state = {
		isParkSelected: false
	};

	handleParkClick() {
		this.setState({isParkSelected: true});
	  };

    componentDidMount() {
		const elem = document.querySelector('.tabs');
     	const options = {}
        const instance = Materialize.Tabs.init(elem, options);
    }

	render() {
		const isParkSelected = this.state.isParkSelected;

		if (!isParkSelected) {
			return(
				<div>
					<Navigation handleLogout={this.props.handleLogout} auth={this.props.auth.username}/>
					<div className="container">
						<div className="row">
							<div className="col s12 centered-tabs">
								<ul className="tabs">
									<li className="tab col s3"><a href="#attractions">Attractions</a></li>
									<li className="tab col s3"><a href="#dining">Dining</a></li>
								</ul>
							</div>
						</div>
					
						<div className="data-shell">
							<div id="attractions" className="col s12">
								<Attractions auth={this.props.auth}/>
							</div>
							<div id="dining" className="col s12">
								<Dining />
							</div>
						</div>
	
					</div>
				</div>
			);
		} else {
        return(
            <div>
				<Navigation handleLogout={this.props.handleLogout} auth={this.props.auth.username}/>
            	<div className="container">
					<div className="data-shell">
						<div id="parkOptions" className="col s12">
							<ParkSelect />
						</div>
					</div>

                </div>
            </div>
        );  
	}
	}
};

export default Home;