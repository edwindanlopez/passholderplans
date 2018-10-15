import React, { Component } from "react";
import "./parkSelect.css";
import Materialize from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class ParkSelect extends Component {
    state = {
        isparkselected: false
    }

    choosePark = () => {
        //onClick={props.handleParkClick}
        this.setState({isparkselected: true})
    }
    
    componentDidMount() {
        this.choosePark();
    }

    render() {
        const isparkselected = this.state.isparkselected;

        return (
            <div>
                <div className="collection">
                    <h3 className="center-text">Pick a Park!</h3>
                    <a isparkselected={isparkselected} onClick={this.choosePark} type="text" href="#attractions" className="btn collection-item">Magic Kingdom</a>
                    <a type="text" href="#attractions" className="btn collection-item disabled">Epcot</a>
                    <a type="text" href="#attractions" className="btn collection-item disabled">Hollywood Studios</a>
                    <a type="text" href="#attractions" className="btn collection-item disabled">Animal Kingdom</a>
                </div>
            </div>
        )
    }

};
export default ParkSelect;