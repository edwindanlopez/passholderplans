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
        activeComponent: "",
		event: ""
    }


	changeComponent= (incomingPage)=> {
		//Variables of active components
		let attractions = this.state.activeComponent;
		this.setState({
			activeComponent: incomingPage
		});
	}

	verifyKey = (madeEvent) => {
		let newEvent = madeEvent
		console.log("Home page logging the madeEvent: " + JSON.stringify(newEvent));
		this.setState({
			event:newEvent
		})
		let stringed = this.state.event;
		console.log("Returning string: " + JSON.stringify(stringed));
		return stringed;
	}

	newData = () => {
		let stringed = this.state.event;
	}	

	pageSwitch() {
		let pageModule;
		if(this.state.activeComponent == "parkselect"){
			pageModule = <ParkSelect auth={this.props.auth.username} next={this.changeComponent}/>
			return pageModule;
		} else if(this.state.activeComponent == "attractions") {
			pageModule = <Attractions auth={this.props.auth.username} id={this.props.auth.userId} next={this.changeComponent} verKey={this.verifyKey}/>
			return pageModule;
		} else if(this.state.activeComponent == "everyone") {
			pageModule = <Everyone auth={this.props.auth.username} next={this.changeComponent} recieveEvent={this.state.event}/>
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


	render(pageModule) {
        return(
            <div>
                <Navigation handleLogout={this.props.handleLogout} auth={this.props.auth.username}/>
				{/* <Everyone auth={this.props.auth.username} next={this.changeComponent}/> */}
				{this.pageSwitch()}
            </div>
        );  
	}

};

export default Home;