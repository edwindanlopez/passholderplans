import React, { Component } from "react";
import "./home.css";
import Navigation from '../../components/Navigation';
import Materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

import ParkSelect from "../../components/ParkSelect";
import Attractions from "../../components/Attractions";
import Everyone from "../../components/Everyone";

class Home extends Component{

    state = {
        activeComponent: ""
    }


	changeComponent= (incomingPage)=> {
		//Variables of active components
		let attractions = this.state.activeComponent;
		console.log("Home change component function is working: " + incomingPage);
		this.setState({
			activeComponent: incomingPage
		});
	}

	pageSwitch() {
		let pageModule;
		if(this.state.activeComponent == "parkselect"){
			pageModule = <ParkSelect auth={this.props.auth.username} next={this.changeComponent}/>
			return pageModule;
		} else if(this.state.activeComponent == "attractions") {
			pageModule = <Attractions auth={this.props.auth.username} id={this.props.auth.userId} next={this.changeComponent}/>
			return pageModule;
		} else if(this.state.activeComponent == "everyone") {
			pageModule = <Everyone auth={this.props.auth.username} next={this.changeComponent}/>
			return pageModule;
		} else{

		}
	}

    componentDidMount = ()=> {
		const elem = document.querySelector('.tabs');
     	const options = {}
        const instance = Materialize.Tabs.init(elem, options);
		this.setState({
			activeComponent: "parkselect"
		});
    }


	render() {
        return(
            <div>
                <Navigation handleLogout={this.props.handleLogout} auth={this.props.auth.username}/>
				{this.pageSwitch()}
            </div>
        );  
	}

};

export default Home;